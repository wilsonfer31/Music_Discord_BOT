const {VoiceConnection, StreamDispatcher } = require('discord.js');
const { Command, CommandoMessage } = require('discord.js-commando');

const ytdl = require('ytdl-core');



module.exports = class PauseCommand extends Command{
    constructor(client){
        super(client, {
            name: 'pause',
            group: 'music',
            memberName: 'pause',
            description: 'Met en pause la musique courante',
           
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
        
          if(!message.member.voice.channel){
              return message.say('Tu dois être dans un salon vocal pour pouvoir utiliser cette commande.');
          }

          if(!message.client.voice.connections.first()){
              return message.say(' Je ne suis pas connecté à un salon vocal. Tape `$join` pour m\'ajouter ');
          }

          if(dispatcher){
          dispatcher.pause();
          }

          return message.say("Pause");
    }
}