module.exports = {
  name: "setstatus",
  minArgs: 2,
  expectedArgs: "<Type> <Status>",
  permissions: ["MANAGE_GUILD"],
  async run({ message, args, client }) {
    client.user.setPresence({
      activity: { name: args.splice(1).join(" "), type: args[0].toUpperCase() },
      status: "CUSTOM_STATUS"
    });
  }
}

