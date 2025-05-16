const { Events } = require('discord.js');
const { execute } = require('../commands/utility/user');

module.exports = {
    name: Events.ClientReady,
    once: true,
    execute(client) {
        console.log(`Ready! Logged in as ${client.user.tag}`);
    },
};