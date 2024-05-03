import {
  EmbedBuilder,
  PermissionFlagsBits,
  SlashCommandBuilder,
} from "discord.js";
import { Command } from "../interfaces/Command";
export const ping: Command = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Ping the BayouBot!")
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
  run: async (interaction) => {
    await interaction.deferReply({ ephemeral: true });

    const returnMessage = new EmbedBuilder()
      .setTitle("🏓 Pong!")
      .setDescription("Thank you for using the /ping command!")
      .setColor("Green");

    await interaction.editReply({ embeds: [returnMessage] });
    return;
  },
};
