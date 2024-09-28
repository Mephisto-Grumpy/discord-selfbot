# Discord Selfbot 🤖🎶

Welcome to the Discord Selfbot project! This selfbot is built using Node.js and aims to enhance your Discord experience with automated features and functionalities.

## Features 🌟

- Play music and manage audio streams 🎵
- Send custom messages and embeds 📩
- Easy to customize and extend 🔧

## Prerequisites 📋

Before you start, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (>= v22.9.0)
- [Docker](https://www.docker.com/) (for containerized setup)
- [pnpm](https://pnpm.io/) (for package management)

## Getting Started 🚀

### Clone the repository

```bash
git clone https://github.com/yourusername/discord-selfbot.git
cd discord-selfbot
```

### Install dependencies

```bash
pnpm install
```

### Set up your environment

Create a `.env` file in the root directory and add your Discord token:

```env
DISCORD_TOKEN=your_discord_token
GUILD_ID=your_guild_id
CHANNEL_ID=your_channel_id
```

### Build and run the application using Docker 🐳

```bash
docker compose up --build
```

## Usage 📖

Once the bot is running, you can interact with it via your Discord server. Follow the commands defined in your bot to enjoy its features!

## Contributing 🤝

If you want to contribute to this project, feel free to open an issue or submit a pull request!

## License 📄

This project is licensed under the Apache 2.0 License - see the [LICENSE](LICENSE) file for details.

---

Happy coding! 😊
