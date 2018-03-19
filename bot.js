const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', message => {
     if (message.author.bot) return;
     if(message.content.toLowerCase().includes("food")) {
               message.channel.send("Wait someone has food?")
  	}

});

client.on('message', message => {
     if (message.author.bot) return;
     if(message.content.toLowerCase().includes("hunk daddy")) {
               message.channel.send("No stop")
  	}

});

client.on('message', message => {
     if (message.author.bot) return;
     if(message.content.toLowerCase().includes("leg")) {
               message.channel.send("I'm a leg!")
  	}

});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
