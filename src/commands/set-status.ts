import {
  ActivityType,
  EmbedBuilder,
  PermissionFlagsBits,
  SlashCommandBuilder,
} from "discord.js";
import { Command } from "../interfaces/Command";

export const setStatus: Command = {
  data: new SlashCommandBuilder()
    .setName("set-status")
    .setDescription("Set the bot's status.")
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
    .addStringOption((option) =>
      option
        .setName("status-text")
        .setDescription("The status message you want to appear.")
        .setRequired(true)
    ),
  run: async (interaction) => {
    await interaction.deferReply({ ephemeral: true });

    const statusText = interaction.options.getString("status-text", true);

    interaction.client.user.setActivity(statusText, {
      type: ActivityType.Custom,
    });

    const returnMessage = new EmbedBuilder()
      .setTitle("✅ Status Updated")
      .setDescription(`The bot's status was updated to "${statusText}".`)
      .setColor("Green");

    await interaction.editReply({ embeds: [returnMessage] });
    return;
  },
};
