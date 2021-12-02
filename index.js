//File: index.js
const mongoose = require("mongoose")
const keepAlive = require("./server");
const { Client } = require("discord.js");
const WOKCommands = require("wokcommands");
require("dotenv").config();
keepAlive();

const client = new Client({
  partials: ["MESSAGE", "CHANNEL", "REACTION", "GUILD_MEMBER", "USER"],
});

client.on("ready", async () => {
  console.log(`Hey, ${client.user.tag} is logged in!!`);

  const wok = new WOKCommands(client, {
    commandsDir: "Commands",
    featureDir: "Events",
    messagesPath: "",
    showWarns: false,
    disabledDefaultCommands: ["language", "help"],
  })
    .setDefaultPrefix(">")
    .setBotOwner("914121588511739965")
    .setMongoPath(process.env.MONGO_URI);
    
  await mongoose.connect(process.env.MONGO_URI, {
    keepAlive: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });
});
client.login(process.env.TOKEN);
client.snipe = new Map()