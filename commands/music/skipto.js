const {VoiceConnection, StreamDispatcher } = require('discord.js');
const { Command, CommandoMessage } = require('discord.js-commando');

const ytdl = require('ytdl-core-discord');



module.exports = class SkipToCommand extends Command{
    constructor(client){
        super(client, {
            name: 'skipto',
            group: 'music',
            memberName: 'skipto',
            description: 'Saute le titre en cours de lecture jusqua a une position',
            args: [{
                key: 'index',
                prompt: "A quelle position de la fille d'attente veux tu te rendre ?",
                type: 'integer'

            }]
           
        });
        
    }

    /**
     * 
     * @param {CommandoMessage} message 
     * @param {String} query 
     */
    async run(message,{index }){
       
          const voiceChannel = message.member.voice.channel;
        
          if(!voiceChannel){
              return message.say('Tu dois être dans un salon vocal pour pouvoir utiliser cette commande.');
          }

          if(!message.client.voice.connections.first()){
            return message.say(' Je ne suis pas connecté à un salon vocal. Tape `$join` pour m\'ajouter ');
          }
          
        
          index --;
          if(!server.queue[index]){
                server.currentVideo = {url : "" , title : "Rien pour le moment !" }
                return message.say("Ce titre n'a pas été trouvé dans la file d'attente");

        }

       
              server.currentVideo = server.queue[index];
              server.connection.play(await ytdl(server.currentVideo.url , { filter : 'audioonly' }), {type: 'opus'});
              server.queue.splice(index, 1);
         
          return message.say(":fast_forward: Ignoré");
    }
}