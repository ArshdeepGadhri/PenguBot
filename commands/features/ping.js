const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	cooldown: 5,
	folder: "features",
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with the bot Latency!'),
	async execute(interaction) {
		try {
			const sent = await interaction.reply({ content: 'Pong...', fetchReply: true, ephemeral: true});
			interaction.editReply(`Roundtrip latency: ${sent.createdTimestamp - interaction.createdTimestamp}ms`);
		} catch (error) {
			console.log(error);
		}
	},
};