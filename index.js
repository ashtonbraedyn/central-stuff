
const { Client , Intents} = require('discord.js');
const roblox = require('noblox.js');
const cookie = '_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_EAE80F13F94E44319C9E4412AA93984EFF7323E41E2445301AD34AD2378975FB87BE545033D79A2CCEBB4B4DCBE500DEC4CB90F6A9581AB21FAAD5D3890B14045EAD2A1A6C259A66B6FFDE6EDDBBCE793937EB3D4F33D30CB1C5B73DE909FA3B00632EB37EB9B05192C0B675A08D047CC081720DF4682865A09E57E301E5BFB6EBEE3271F7CB38D4668C6B895EC0E2D32364FE414858046518969B012F41F63727AC19856733F32960BCA1838ED800C1242E524448CB47C558BFFA7E4484F5680493FA82D56FA1DFD3C9701C6CDD8B7712F198890950BC84519E3FD6C150650F0849F5E7A840439AFA96F13DA087F449C1F15E586F6212F04AF3100FBB6B4EEEF295C321B1AB33680312E275A0918BE1F4128CC0D748A225A82EB9721AA7DFC873A0C80AEEC2F27632277B934DD26030C8C4C7BF'
const client = new discord.Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
client.login("ODQ5NzMxOTMzNDAzNjExMTU3.YLfciA.oWeW85WPbDs6KnjKbVpr7UH6NvI")

client.setMaxListeners(0)
roblox.setCookie(cookie).then((success) => {
  console.log(`Successfully logged into CentralRanking_Bot.`)
  

}).catch(() => {console.log("Sorry, you are not logged in. Get new Cookie.");});

client.on('ready', () => {
  
  client.user.setPresence({
    status: 'dnd',
    activity: {
        name: `${prefix}help | Central Cafe!`,
        type: 'WATCHING'
    }
})
  console.log(`Ready to serve on 1 server for Central Cafe.`)
})


var prefix = '.';
var groupId = 5767589;
var maximumRank = 254;
function isCommand(command, message){
	var command = command.toLowerCase();
	var content = message.content.toLowerCase();
	return content.startsWith(prefix + command);
}

client.on('messageCreate', (message) => {

	if (message.author.bot) return; // Dont answer yourself.
    var args = message.content.split(/[ ]+/)
    
    if(isCommand('Promote', message)){
      if (message.guild) {
        if(message.member.roles.cache.find(r => r.name === "SHR")){
    	var username = args[1]
    	if (username){
    		message.channel.send(`Checking ROBLOX for ${username}`)
    		roblox.getIdFromUsername(username)
			.then(function(id){
				roblox.getRankInGroup(groupId, id)
				.then(function(rank){
					if(maximumRank <= rank){
						message.channel.send(`${id} is rank ${rank} and not promotable.`)
					} else {
						message.channel.send(`${id} is rank ${rank} and promotable.`)
						roblox.promote(groupId, id)
						.then(function(roles){
							message.channel.send(`Successfully promoted ${username}.`)
						}).catch(function(err){
							message.channel.send("Failed to promote.")
						});
          }
          }).catch(function(err){
					message.channel.send("Couldn't get he/she in the group.")
				});
			}).catch(function(err){ 
				message.channel.send(`Sorry, but ${username} doesn't exist on ROBLOX.`)
			});
    	} else {
    		message.channel.send("Please enter a username.")
    	}      
      return;
      } else if (!message.member.roles.cache.find(r => r.name === "SHR")){
        message.channel.send(`You are not allowed to use this command.`)
      }
      return;
      }
      
      
    }

    
      
    })
    client.on('messageCreate', (message) => {	
	     if (message.author.bot) return; // Dont answer yourself.
	     var args = message.content.split(/[ ]+/)
	 if(isCommand('Setprefix', message)){
	   if (message.member.roles.cache.find(r => r.name === "SHR")){
	     var newprefix = args[1]
	     if (newprefix) {
	     const embed = new discord.MessageEmbed()
            .setTitle("New Prefix")
            .setColor(0xFF98)
             .setDescription(`Changing prefix to ${newprefix}`)
  
            message.channel.send(embed);
	 prefix = `${newprefix}`
	 client.user.setActivity(`${prefix}help | Central Cafe!`, {type : "WATCHING"
	   });	     }	     }
	       if (!message.member.roles.cache.find(r => r.name === "SHR")){
	         message.channel.send(`You are not allowed to access this command.`)    
	       }  
	   }
	   })
client.on('messageCreate', (message) => {

	if (message.author.bot) return; // Dont answer yourself.
    var args = message.content.split(/[ ]+/)
    
    if(isCommand('Demote', message)){
      if (message.guild) {
        if(message.member.roles.cache.find(r => r.name === "SHR")){
    	var username = args[1]
    	if (username){
    		message.channel.send(`Checking ROBLOX for ${username}`)
    		roblox.getIdFromUsername(username)
			.then(function(id){
				roblox.getRankInGroup(groupId, id)
				.then(function(rank){
					if(maximumRank <= rank){
						message.channel.send(`${id} is rank ${rank} and not demotable.`)
					} else {
						message.channel.send(`${id} is rank ${rank} and demotable.`)
						roblox.promote(groupId, id)
						.then(function(roles){
							message.channel.send(`Successfully demoted ${username}.`)
						}).catch(function(err){
							message.channel.send("Failed to demote.")
						});
          }
          }).catch(function(err){
					message.channel.send("Couldn't get he/she in the group.")
				});
			}).catch(function(err){ 
				message.channel.send(`Sorry, but ${username} doesn't exist on ROBLOX.`)
			});
    	} else {
    		message.channel.send("Please enter a username.")
    	}
      }
      if(!message.member.roles.cache.find(r => r.name === "SHR")){
        message.channel.send(`You are not allowed to access this command.`)
      }
      return;
    }
    }
})
client.on('messageCreate', (message) => {

	if (message.author.bot) return; // Dont answer yourself.
    var args = message.content.split(/[ ]+/)
if(isCommand('Startstream', message)){
     if (message.member.roles.cache.find(r => r.name === "SHR")){
       var url2 = args[1]
if (url2) {
  message.delete({ timeout: 0001 })
    message.channel.send(`Now streaming ${url2}`)
      client.user.setActivity(`${prefix}help | Central Cafe!`, {type : "STREAMING", url: (url2)
      });
}
     else {
        message.channel.send("Please enter a twitch url.")
      }
     }

    if (!message.member.roles.cache.find(r => r.name === "SHR")){
      message.channel.send("You are not allowed to access this command.")
  }
     
   }
})
client.on('messageCreate', (message) => {

	if (message.author.bot) return; // Dont answer yourself.
    var args = message.content.split(/[ ]+/)
if(isCommand('Setprefix', message)){
  if (message.member.roles.cache.find(r => r.name === "SHR")){
    var newprefix = args[1]
    if (newprefix) {
    const embed = new discord.MessageEmbed()
            .setTitle("New Prefix")
            .setColor(0xFF98)
            .setDescription(`Changing prefix to ${newprefix}`)
  
            message.channel.send(embed);
prefix = `${newprefix}`
client.user.setActivity(`${prefix}help | Central Cafe!`, {type : "WATCHING"
  });
    }
    }
      if (!message.member.roles.cache.find(r => r.name === "SHR")){
        message.channel.send(`You are not allowed to access this command.`)    
      }  
  }
  })
client.on("message", function(message) {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(' ');
  const command = args.shift().toLowerCase();
 if (command === "sum") {
    const numArgs = args.map(x => parseFloat(x));
    const sum = numArgs.reduce((counter, x) => counter += x);
    message.reply(`The sum of all the arguments you provided is ${sum}!`);
  }
  else if (command === "training") {
         if (message.member.roles.cache.find(r => r.name === "SHR")){
    message.delete({ timeout: 0001 })
var role = '865214824116256768'
    const embed = new discord.MessageEmbed()
            .setTitle("Central Cafe | Training")
    .setColor(0xFF98)
    .setDescription(`\n\n<@${message.author.id}>` + ` is now hosting a training! Come on down for a chance at promotion. Staff are needed! https://www.roblox.com/games/4786181108/Training-Center`, 'Made by xTech_yy.')
     .setThumbnail("https://t6.rbxcdn.com/572e5b8890966b4d936f032ef6da8b00")

client.channels.cache.get('863523911907934259').send(`<@&${role}>`, embed)
         
    roblox.shout(5767589, `A training is being hosted! Come on down for a chance at promotion. Staff are needed! https://www.roblox.com/games/4786181108/Training-Center`)
  }
   if(!message.member.roles.cache.find(r => r.name === "SHR")){
        message.channel.send(`You are not allowed to access this command.`)
      }
  
  }
  else if (command === "endtrain") {
         if (message.member.roles.cache.find(r => r.name === "SHR")){
    message.delete({ timeout: 0001 })
var role = '865214824116256768'
    const embed = new discord.MessageEmbed()
            .setTitle("Central Cafe | Training")
    .setColor(0xFF98)
    .setDescription(`Training has ended, thanks to those who attended.`)
     .setThumbnail("https://t6.rbxcdn.com/572e5b8890966b4d936f032ef6da8b00")

client.channels.cache.get('863523911907934259').send(embed)
message.react("☑️")
         }
   else if (command === "shift") {
     if (message.member.roles.cache.find(r => r.name === "SHR")){
    message.delete({ timeout: 0001 })
    message.react("☑️")
    var role = '865214824116256768'
            const embed = new discord.MessageEmbed()
            .setTitle("Central Cafe | Shift")
    .setColor(0xFF98)
    .setDescription(`\n\n<@${message.author.id}>`+` is now hosting a shift! Come on down for a chance at promotion. Staff are needed! https://www.roblox.com/games/4789730255/Work-at-a-Cafe-Central-Cafe`)
     .setThumbnail("https://t6.rbxcdn.com/572e5b8890966b4d936f032ef6da8b00")
client.channels.cache.get('863523911907934259').send(`<@&${role}>`, embed)
        
 
     roblox.shout(5767589, `A shift is being hosted! Come on down for a chance at promotion. Staff are needed! https://www.roblox.com/games/4786181108/Training-Center`)
  }
   if(!message.member.roles.cache.find(r => r.name === "SHR")){
        message.channel.send(`You are not allowed to access this command.`)
      }
}
  else if (command === "help") {
    const embed = new discord.MessageEmbed()
            .setTitle("Help")
            .setColor(0xFF98)
            .setThumbnail("https://t6.rbxcdn.com/572e5b8890966b4d936f032ef6da8b00")
            .addFields(
		{ name: '.demote', value: 'Demotes a given player.',inline: true },
		{ name: '.ping', value: "Get's a users latency.", inline: true },
		{ name: '.prefix', value: "Get's the current prefix.", inline: true },
		{ name: '.promote', value: 'Promotes a given player.', inline: true },
    { name: '.shift', value: 'Starts the central shift', inline: true },
    { name: '.stopstream', value: 'Central stops streaming on twitch.', inline: true },
    { name: '.sum', value: 'Get a value of +. Ex: .sum 8 9 0 1', inline: true },
    { name: '.training', value: 'Starts a Central training.', inline: true },
	)
            
 
            message.author.send(embed)
            message.react("✅");
  }
  else if (command === "prefix") {
    const embed = new discord.MessageEmbed()
            .setTitle("Prefix")
            .setColor(0xFF98)
            .setDescription(`The current prefix is ${prefix}`)
  
            
 
            message.channel.send(embed);
            
  }
  else if (command === "eraseshout") {
    if (message.member.roles.cache.find(r => r.name === "SHR")){
    message.channel.send(`Erased.`)
     roblox.shout(5767589, ` `)
    }
    if (!message.member.roles.cache.find(r => r.name === "SHR")){
      message.channel.send("You are not allowed to access this command.")
    }
  }
   else if (command === "stopstream") {
     if (message.member.roles.cache.find(r => r.name === "SHR")){
    message.channel.send(`Now watching Central Cafe!`)
      client.user.setActivity(`${prefix}help | Central Cafe!`, {type : "WATCHING"
      });
      client.user.setActivity(`${prefix}help | Central Cafe!`, {type : "WATCHING"
      });
      client.user.setActivity(`${prefix}help | Central Cafe!`, {type : "WATCHING"
      });
      client.user.setActivity(`${prefix}help | Central Cafe!`, {type : "WATCHING"
      });
      client.user.setActivity(`${prefix}help | Central Cafe!`, {type : "WATCHING"
      });
      client.user.setActivity(`${prefix}help | Central Cafe!`, {type : "WATCHING"
      });
    if (!message.member.roles.cache.find(r => r.name === "SHR")){
      message.channel.send("You are not allowed to access this command.")
  }
     }
   }
   else if (command === "reboot") {
     if (message.member.roles.cache.find(r => r.name === "SHR")){
       function resetBot(channel) {
    message.channel.send('Restarting, please wait...')
    .then(msg => client.destroy())
    .then(() => client.login(token));
  client.user.setActivity(`${prefix}help | Central Cafe!`, {type : "STREAMING",
  url: "https://twitch.tv/discord"
  });
  client.user.setActivity(`${prefix}help | Central Cafe!`, {type : "WATCHING"
  })
    message.channel.send("Restart Complete.")
       }
resetBot(message.channel)
client.login(token)
}
if (!message.member.roles.cache.find(r => r.name === "SHR")){
  message.channel.send("You are not allowed to access this command.")
     }
   }
   else if (command === "endbot") {
     if (message.member.roles.cache.find(r => r.name === "SHR")){
    message.channel.send('Shutting down...')
    .then(msg => client.destroy())
}
if (!message.member.roles.cache.find(r => r.name === "SHR")){
  message.channel.send("You are not allowed to access this command.")
     }
   }
  }
})

client.on('messageCreate', message => {

    if (message.content === `${prefix}` + `ping`) {

        message.channel.send('Pinged!').then(message => {
const receivedEmbed = message.embeds[0];
             const embed = new discord.MessageEmbed(receivedEmbed)
             .setTitle("Ping").setColor(0xFF98).setDescription(`Message latency is ${Date.now() - message.createdTimestamp}ms.\nAPI Latency is ${Math.round(client.ws.ping)}ms.`);
  
            
 
            

        message.edit(embed);
            
        })
    }
})

const { ReactionRoleManager } = require('discord.js-collector')
const { Client } = require("discord.js");

const reactionRoleManager = new ReactionRoleManager(client, {
    storage: true, // Enable reaction role store in a Json file
    path: __dirname + '/roles.json', // Where will save the roles if store is enabled // See here to see how setup mongoose: https://github.com/IDjinn/Discord.js-Collector/blob/master/examples/reaction-role-manager/Note.md
});

client.on("ready", () => {
    console.log("ready")
});

// When is ready, reation role manager will emit this event
reactionRoleManager.on('ready', () => {
    console.log('Reaction Role Manager is ready!');
});

// When user react and win role, will trigger this event
reactionRoleManager.on('reactionRoleAdd', (member, role) => {
    console.log(member.displayName + ' won the role' + role.name)
});

// When user remove reaction and lose role, will trigger this event
reactionRoleManager.on('reactionRoleRemove', (member, role) => {
    console.log(member.displayName + ' lose the role' + role.name)
});

// When someone removed all reactions from message
reactionRoleManager.on('allReactionsRemove', (message) => {
    console.log(`All reactions from message ${message.id} was removed, all roles was taken and reactions roles deleted.`)
});

// If member doesn't have all requirements, this event is triggered.
reactionRoleManager.on('missingRequirements', (type, member, reactionRole) => {
    console.log(`Member '${member.id}' will not win role '${reactionRole.role}', because him hasn't requirement ${type}`);
});

// Triggered when the bot doesn't have permissions to manage this role.
reactionRoleManager.on('missingPermissions', (action, member, roles, reactionRole) => {
    console.log(`Some roles cannot be ${action === 1 ? 'given' : 'taken'} to member \`${member.displayName}\`, because i don't have permissions to manage these roles: ${roles.map(role => `\`${role.name}\``).join(',')}`);
});

client.on("message", async (message) => {
    const client = message.client;
    const args = message.content.split(' ').slice(1);
    // Example
    // >createReactionRole @role :emoji: MessageId
    if (message.content.startsWith('>createReactionRole')) {
        const role = message.mentions.roles.first();
        if (!role)
            return message.reply('You need mention a role').then(m => m.delete({ timeout: 1000 }));

        const emoji = args[1];
        if (!emoji)
            return message.reply('You need use a valid emoji.').then(m => m.delete({ timeout: 1000 }));

        const msg = await message.channel.messages.fetch(args[2] || message.id);
        if (!role)
            return message.reply('Message not found! Wtf...').then(m => m.delete({ timeout: 1000 }));

        reactionRoleManager.createReactionRole({
            message: msg,
            roles: [role],
            emoji,
            type:1
        });
/**
 * Reaction Role Type
 * NORMAL [1] - This role works like basic reaction role.
 * TOGGLE [2] - You can win only one role of all toggle roles in this message (like colors system)
 * JUST_WIN [3] - This role you'll only win, not lose.
 * JUST_LOSE [4] - This role you'll only lose, not win.
 * REVERSED [5] - This is reversed role. When react, you'll lose it, when you take off reaction you'll win it.
 */


        message.reply('Done').then(m => m.delete({ timeout: 500 }));
    }
    else if (message.content.startsWith('>deleteReactionRole')){
        const emoji = args[0];
        if (!emoji)
            return message.reply('You need use a valid emoji.').then(m => m.delete({ timeout: 1000 }));

        const msg = await message.channel.messages.fetch(args[1]);
        if (!msg)
            return message.reply('Message not found! Wtf...').then(m => m.delete({ timeout: 1000 }));

        await reactionRoleManager.deleteReactionRole({message: msg, emoji});
    }
});
client.on('messageCreate', message => {
  if (message.author.bot) return;

   var args = message.content.split(/[ ]+/)
if(isCommand('suggest', message)){
     var suggestion = args[1]
     if (suggestion){
       const embed = new discord.MessageEmbed()
            .setTitle("Suggestion")
	.setColor('#0099ff')
  .setDescription(`${suggestion}`)

     
     client.channels.cache.get('863407566834106388').send({embed: embed}).then(embedMessage => {
        embedMessage.react("✅")
     embedMessage.react("❌")
});
     message.channel.send(`*Suggestion successfully sent.*`)
   }
   }

})
client.on('messageCreate', message => {
	 var args = message.content.split(/[ ]+/)
	if (message.content === `${prefix}`+'avatar') {
		if (args[1]) {
			const user = getUserFromMention(args[0]);
			if (!user) {
				return message.reply('Please use a proper mention if you want to see someone elses avatar.');
			}

			return message.channel.send(`<@${user.username}>`+`'s avatar: ${user.displayAvatarURL({ dynamic: true })}`);
		}

		return message.channel.send(`<@${message.author.id}>` + `, your avatar: ${message.author.displayAvatarURL({ dynamic: true })}`);
	}
})
client.on('messageCreate', message => {
  if (message.content === `!verify` ) {
  const embed = new discord.MessageEmbed()
  .setTitle("Welcome to Central Cafe!")
.setDescription("➣ To verify your account type `!verify` in "+ message.guild.channels.cache.get('863392295163920394').toString()+".\n\n➣ Please make sure to follow our guidelines located at "+ message.guild.channels.cache.get('863396837532893195').toString() + " to avoid punishments.\n\n➣ If you need support feel free to open a ticket at "+ message.guild.channels.cache.get('870798991015706646').toString() + ".")
  message.author.send(embed)
  }
});
