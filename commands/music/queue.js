const {VoiceConnection, StreamDispatcher, MessageEmbed } = require('discord.js');
const { Command, CommandoMessage } = require('discord.js-commando');

const ytdl = require('ytdl-core-discord');



module.exports = class QueueCommand extends Command{
    constructor(client){
        super(client, {
            name: 'queue',
            group: 'music',
            memberName: 'queue',
            description: 'Affiche la fille d\'attente',
            args: [{
                key:'page',
                prompt: 'Quelle page veut tu afficher? ',
                default : 1,
                type: 'integer'
            }]
           
        });
        
    }

    /**
     * 
     * @param {CommandoMessage} message 
     * @param {Number} page 
     */
    async run(message, {page}){
        const server = message.client.server;
        
        if(!message.client.voice.connections.first()){
            return message.say(' Je ne suis pas connecté à un salon vocal. Tape `$join` pour m\'ajouter ');
        }

        

        const numberOfItem = 10;
        const startingItem = (page-1) * numberOfItem;
        const queueLength = server.queue.length;

        const itemsPerPage = startingItem + numberOfItem;

        var totalPages = 1;

        var embed = new MessageEmbed().setTitle('File d\'atente').setColor('BLUE').addField("En train de jouer :", server.currentVideo.url);

       

        if(queueLength > 0){
            var value ="";
          

            if(queueLength > numberOfItem){
                totalPages = Math.ceil(queueLength / numberOfItem);
            }

            if(page < 0 || (page) > totalPages){
                return message.say("Cette page n'existe pas"); 
            }

            if((queueLength - startingItem) < numberOfItem){
                itemsPerPage = (queueLength - startingItem) + startingItem;
            }


            for (let i = startingItem; i < itemsPerPage ; i++){
                const video = server.queue[i];
                value += "`" + ( i + 1 ) + ".`" + video.url + "\n";
            }

            embed.addField("A venir :", value);
            
        }

        embed.setFooter(`Page ${page}/${totalPages}`);
        return message.say(embed);
    }
}