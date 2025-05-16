const { SlashCommandBuilder, Client } = require('discord.js');
const { execute } = require('./user');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('isconnected')
        .setDescription('Provides information about whether the user is connected to a voice channel or not.'),
    async execute(interaction) {
        if (!interaction.member.voice.channel) {
            return await interaction.reply(`You must first be in a voice channel to run this command!`)
        }
        vc = interaction.member.voice
        await interaction.reply(`You are in the voice channel ${vc.channel}. It has the channel ID ${vc.channelId}. The channel currently has members: ${vc.channelId.members}`)
    }
}

