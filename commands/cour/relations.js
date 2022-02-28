const {VoiceConnection, StreamDispatcher } = require('discord.js');
const { Command, CommandoMessage } = require('discord.js-commando');

const ytdl = require('ytdl-core');



module.exports = class JoinCommand extends Command{
    constructor(client){
        super(client, {
            name: 'relations',
            group: 'cour',
            memberName: 'relations',
            description: 'Donne les relations one-to-one , one-to-many etc',
           
        });
        
    }

    /**
     * 
     * @param {CommandoMessage} message 
     * @param {String} query 
     */
    async run(message){
       

          return message.say("`" + "Relation Vehicule-Couleur \n" + "One-To-one : un Vehicule ne peut avoir qu'une seule Couleur et une Couleur ne peut appartenir qu'un Vehicule \n" 
          + "Many-to-one exemple : Un Vehicule ne peut avoir qu'une seule Couleur mais cette coleur peut avoir plusieurs Vehicule \n" + "one-to-many : Un Vehicule peut avoir plusieurs Couleurs et une Couleur ne peut appartenir qu'un Vehicule \n"+
          "many-to-many : Un Vehicule peut avoir plusieurs couleurs et les Couleur peuvent avoir plusieurs Vehicules \n"
          +"`");
    }
}