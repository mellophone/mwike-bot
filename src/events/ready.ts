import { REST } from "@discordjs/rest";
import { Client } from "discord.js";
import { Routes } from "discord-api-types/v10";
import { CommandList } from "../utils/_Commandlists";
import presenceStatus from "../config/status";
import "dotenv/config";

export const onReady = async (client: Client) => {
  const rest = new REST({ version: "10" }).setToken(
    process.env.TOKEN as string
  );

  const commandData = CommandList.map((command) => command.data.toJSON());

  console.log("🔨 Started loading (/) commands.");

  await client.guilds.fetch();
  const guilds = client.guilds.cache;

  for (const guildEntry of guilds) {
    const guild = guildEntry[1];
    await rest.put(
      Routes.applicationGuildCommands(
        client.user?.id || "missing id",
        guild.id
      ),
      { body: commandData }
    );
  }

  console.log("✅ Successfully loaded (/) commands.");

  client.user?.setPresence(presenceStatus);

  console.log(`🤖 ${client.user?.tag} is online ⚡`);
};
