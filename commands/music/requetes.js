const {VoiceConnection, StreamDispatcher } = require('discord.js');
const { Command, CommandoMessage } = require('discord.js-commando');

const ytdl = require('ytdl-core');



module.exports = class JoinCommand extends Command{
    constructor(client){
        super(client, {
            name: 'requetes',
            group: 'music',
            memberName: 'requetes',
            description: 'Donne les requetes',
           
        });
        
    }

    /**
     * 
     * @param {CommandoMessage} message 
     * @param {String} query 
     */
    async run(message){
       

          return message.say("`" + "GET : récup d'une ressource \n" +
          "POST : ajout ou modif d'une ressource \n" +
          "PUT : écrase une ressource existante \n" +
          "PATCH : modification partielle d'une ressource\n" +
          "DELETE : suppression d'une ressource" +"`");
    }
}
