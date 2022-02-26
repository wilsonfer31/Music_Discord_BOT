const {VoiceConnection, StreamDispatcher } = require('discord.js');
const { Command, CommandoMessage } = require('discord.js-commando');

const ytdl = require('ytdl-core');



module.exports = class ResumeCommand extends Command{
    constructor(client){
        super(client, {
            name: 'resume',
            group: 'music',
            memberName: 'resume',
            description: 'Reprend la musique qui est en pause',
           
        });
        
    }

    /**
     * 
     * @param {CommandoMessage} message 
     * @param {String} query 
     */
     async run(message){
        /**
         * 
         * @var {StreamDispatcher}
         * 
         */
        const dispatcher = message.client.server.dispatcher;
        
        console.log(message.member.voice.channel);
          if(!message.member.voice.channel){
              return message.say('Tu dois être dans un salon vocal pour pouvoir utiliser cette commande.');
          }

          if(!message.client.voice.connections.first()){
              return message.say(' Je ne suis pas connecté à un salon vocal. Tape `$join` pour m\'ajouter ');
          }

          if(dispatcher){
           dispatcher.resume();
          }

          return message.say("En train de jouer :notes:");
    }
}