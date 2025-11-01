import { Client, GatewayIntentBits, ActivityType } from "discord.js";
import "dotenv/config";

const client = new Client({
  intents: [GatewayIntentBits.Guilds],
});

client.once("ready", () => {
  console.log(`✅ Logged in as ${client.user.tag}`);

  const statuses = [
    // 🔹 Focus commands (appear more often)
    { name: "🤖 Talk with AI — use /ask", type: ActivityType.Playing },
    { name: "🧠 Chat • Learn • Have Fun — /ask", type: ActivityType.Watching },
    { name: "⏰ Never forget tasks — /reminder", type: ActivityType.Playing },
    { name: "📅 Smart reminders with /reminder", type: ActivityType.Listening },

    // 🔹 Other commands (rotating)
    { name: "🎁 Claim rewards — /giftcode", type: ActivityType.Playing },
    { name: "📊 Check server stats — /serverstats", type: ActivityType.Watching },
    { name: "🎪 Explore events — /event", type: ActivityType.Playing },
    { name: "🤖 Discover all commands — /help", type: ActivityType.Playing },
    { name: "✨ Generate AI images — /imagine", type: ActivityType.Playing },
  ];

  let i = 0;
  setInterval(() => {
    const status = statuses[i];
    client.user.setActivity(status);
    i = (i + 1) % statuses.length;
  }, 10000); // Change every 10 seconds
});

client.login(process.env.DISCORD_TOKEN);
// --- Keep Alive for Render Free Plan ---
const express = require("express");
const app = express();
app.get("/", (req, res) => res.send("Bot is running ✅"));
app.listen(process.env.PORT || 3000, () => console.log("Keep-alive server started"));
