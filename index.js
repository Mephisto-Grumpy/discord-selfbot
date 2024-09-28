const { Client } = require('discord.js-selfbot-v13')
const { joinVoiceChannel, getVoiceConnection } = require('@discordjs/voice')
require('dotenv').config()

const config = {
  GUILD_ID: process.env.GUILD_ID,
  CHANNEL_ID: process.env.CHANNEL_ID,
  DISCORD_TOKEN: process.env.DISCORD_TOKEN
}

const client = new Client({ checkUpdate: false })

client.on('ready', async () => {
  console.log(`Logged in as ${client.user.username}`)
  await connectToVoiceChannel()
})

client.on('voiceStateUpdate', async (oldState, newState) => {
  if (oldState.member.id !== client.user.id) return
  const oldChannel = oldState.channelId
  const newChannel = newState.channelId
  if (oldChannel !== newChannel) {
    await handleVoiceChange(newChannel)
  }
})

async function handleVoiceChange(newChannel) {
  if (!newChannel || newChannel !== config.CHANNEL_ID) {
    await reconnectToVoiceChannel()
  }
}

async function connectToVoiceChannel() {
  try {
    const guild = await fetchGuild(client, config.GUILD_ID)
    const voiceChannel = await fetchVoiceChannel(guild, config.CHANNEL_ID)
    const existingConnection = getVoiceConnection(guild.id)
    if (existingConnection) return

    joinVoiceChannel({
      channelId: voiceChannel.id,
      guildId: guild.id,
      adapterCreator: guild.voiceAdapterCreator,
      selfDeaf: true,
      selfMute: true
    })

    console.log('Connected to voice channel')
  } catch (error) {
    console.error('Error connecting to voice channel:', error)
  }
}

async function reconnectToVoiceChannel() {
  console.log('Reconnecting to voice channel...')
  await connectToVoiceChannel()
}

async function fetchGuild(client, guildId) {
  const guild = client.guilds.cache.get(guildId)
  if (!guild) throw new Error('Guild not found')
  return guild
}

async function fetchVoiceChannel(guild, channelId) {
  const voiceChannel = guild.channels.cache.get(channelId)
  if (!voiceChannel || voiceChannel.type !== 'GUILD_VOICE')
    throw new Error('Voice channel not found or invalid')
  return voiceChannel
}

client.login(config.DISCORD_TOKEN)
