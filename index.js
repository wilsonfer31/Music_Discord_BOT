



    const token = process.env.token;
    const Commando = require('discord.js-commando');
    const path = require('path');

    
   

    const client = new Commando.Client({
        commandPrefix: '$',
        
        
    });

    client.registry
    .registerDefaultTypes()
    .registerDefaultGroups()
    .registerDefaultCommands()
        .registerGroups([
		['music', 'Music'],
		['cour', 'Cour'],
	])
    .registerCommandsIn(path.join(__dirname, 'commands'));


    client.server = {
        queue : [],
        currentVideo : {title: "" , url: "" },
        dispatcher : null,
        connection : null,
    }

    // When the client is ready, run this code (only once)
    client.once('ready', () => {
        console.log(`Connecté en tant que ${client.user.tag} - (${client.user.id})`)


    })
    
    // Login to Discord with your client's token
    client.login(token);