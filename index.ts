// ### TYPESCRIPT 5.5 / DISCORD.JS INCOMPATIBILITY WORKAROUND
// *** NOT CURRENTLY IN USE ***
// https://github.com/discordjs/discord.js/issues/10358
// ### Installs version of d.js with PR fix
// 1. Unistall discord.js
// npm uninstall discord.js
// 2. Add to package.json:
// "resolutions": {
//   "discord.js": "github:discordjs/discord.js#8dd69cf2811d86ed8da2a7b1e9a6a94022554e96"
// },
// 3. Install
// npm i discordjs/discord.js#8dd69cf2811d86ed8da2a7b1e9a6a94022554e96
// ### NOTICE
// "sometimes you have to call `npm i` again to make sure your resolutions work"

// Require the necessary discord.js classes
import { Client, Events, GatewayIntentBits } from 'discord.js'
// Throws errors...
// import token from './config.json'
const { token } = require('./config.json')

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] })

// When the client is ready, run this code (only once)
// The distinction between `client: Client<boolean>` and `readyClient: Client<true>` is important for TypeScript developers
// It makes some properties non-nullable
client.once(Events.ClientReady, readyClient => {
	console.log(`Ready! Logged in as ${readyClient.user.tag}`)
})

// Log in to Discord with your client's token
client.login(token)