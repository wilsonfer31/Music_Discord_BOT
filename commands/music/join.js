const {VoiceConnection, StreamDispatcher } = require('discord.js');
const { Command, CommandoMessage } = require('discord.js-commando');

const ytdl = require('ytdl-core-discord');



module.exports = class JoinCommand extends Command{
    constructor(client){
        super(client, {
            name: 'join',
            group: 'music',
            memberName: 'join',
            description: 'Ajoute le bot sur votre canal vocal',
           
        });
        
    }

    /**
     * 
     * @param {CommandoMessage} message 
     * @param {String} query 
     */
    async run(message){
       
          const voiceChannel = message.member.voice.channel;
        
          if(!voiceChannel){
              return message.say('Tu dois être dans un salon vocal pour pouvoir utiliser cette commande.');
          }


          
        
          await voiceChannel.join();
          return message.say("J'ai rejoins" + "`"+ voiceChannel.name +"`");
    }
}