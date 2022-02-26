const {VoiceConnection, StreamDispatcher } = require('discord.js');
const { Command, CommandoMessage } = require('discord.js-commando');

const key = process.env.apiToken;

const ytdl = require('ytdl-core');
const ytsr = require('youtube-search');



module.exports = class PlayCommand extends Command{
    constructor(client){
        super(client, {
            name: 'play',
            aliases: ['p'],
            group: 'music',
            memberName: 'play',
            description: 'Lit une musique depuis Youtube.',
            args: [
                {
                key:'query',
                prompt:'Quel musique veux tu lire ?',
                type: 'string'
            }
        ]
        });
        
    }

    /**
     * 
     * @param {CommandoMessage} message 
     * @param {String} query 
     */
    async run(message , { query }){
            const server = message.client.server;
        await message.member.voice.channel.join().then((connection) => {

                ytsr(query , {key: key, maxResults:1 , type:'video'}).then((results) =>{
                    if(results.results[0]){
                        const fondVideo = {
                            url: results.results[0].link , title: results.results[0].title
                        };  

                          
                        server.currentVideo = fondVideo;
                    this.runVideo(message, connection);
                    }
                    
                })
                
               
            });
    }

    /**
     * 
     * @param {CommandoMessage} message 
     * @param {VoiceConnection} connection 
     * @param {*} video 
     */
    async runVideo(message, connection , videoUrl){
            const server = message.client.server;
            const dispatcher = connection.play(await ytdl(server.currentVideo.url , { filter : 'audioonly' }))


          
            server.dispatcher = dispatcher;
           
            
            dispatcher.on('finish' , ()=> {
               
                
            });
          

            return message.say("En train de jouer :notes: " + "'" +server.currentVideo.title +"'");
    }
}