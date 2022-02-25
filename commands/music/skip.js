const {VoiceConnection, StreamDispatcher } = require('discord.js');
const { Command, CommandoMessage } = require('discord.js-commando');

const ytdl = require('ytdl-core-discord');



module.exports = class SkipCommand extends Command{
    constructor(client){
        super(client, {
            name: 'skip',
            group: 'music',
            memberName: 'skip',
            description: 'Saute le titre en cours de lecture',
           
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

          if(!message.client.voice.connections.first()){
            return message.say(' Je ne suis pas connecté à un salon vocal. Tape `$join` pour m\'ajouter ');
          }
          
        
        
          if(!server.queue[0]){
                server.currentVideo = {url : "" , title : "Rien pour le moment !" }
                return message.say("il n'y a rien dans la file d'attente");

        }
              server.currentVideo = server.queue[0];
              server.connection.play(await ytdl(server.currentVideo.url , { filter : 'audioonly' }), {type: 'opus'});
              server.queue.shift();
         
          return message.say(":fast_forward: Ignoré");
    }
}