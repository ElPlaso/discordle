const { SlashCommandBuilder, MessageFlags } = require("discord.js");

const links = [
  "https://bandle.app/",
  "https://blundle.online/",
  "https://flagle.io/",
  "https://foodguessr.com/",
  "https://geogridgame.com/",
  "https://globle-game.com/",
  "https://loldle.net/",
  "https://nytimes.com/games/connections",
  "https://nytimes.com/games/wordle",
  "https://onepiecedle.net/",
  "https://travle.earth/",
  "https://worldle.teuteuf.fr",
];

module.exports = {
  data: new SlashCommandBuilder()
    .setName("list")
    .setDescription("Sends list of links to popular daily games."),
  async execute(interaction) {
    const linksMessage = links.map((link) => `<${link}>`).join("\n");
    await interaction.reply({
      content: linksMessage,
      flags: MessageFlags.Ephemeral,
    });
  },
};
