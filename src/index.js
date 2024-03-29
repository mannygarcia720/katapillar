require('dotenv').config;

const {token} = require('./config.json');

const {Client, Events, GatewayIntentBits} = require('discord.js');

const client = new Client({intents:[GatewayIntentBits.Guilds]});

client.once(Events.ClientReady, readyClient => {
	console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

client.login(token);