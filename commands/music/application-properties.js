const {VoiceConnection, StreamDispatcher } = require('discord.js');
const { Command, CommandoMessage } = require('discord.js-commando');

const ytdl = require('ytdl-core');



module.exports = class JoinCommand extends Command{
    constructor(client){
        super(client, {
            name: 'application-properties',
            group: 'music',
            memberName: 'application-properties',
            description: 'Donne Exemple de properties',
           
        });
        
    }

    /**
     * 
     * @param {CommandoMessage} message 
     * @param {String} query 
     */
    async run(message){
       

          return message.say("`"  +
          "server.port=8080 \n \n" + 
          "spring.datasource.initialization-mode=always \n \n" +
          "spring.datasource.driver-class-name=org.mariadb.jdbc.Driver \n" +
          "spring.datasource.url=jdbc:mariadb://localhost:3306/cfa2022? \n" +
          "useSSL=false&useUnicode=true&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=UTC  \n" +
          "spring.datasource.username=root \n" +
          "spring.datasource.password= \n \n" +
          "spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MariaDBDialect\n" +
          "spring.jpa.hibernate.ddl-auto=update\n \n" +
          "spring.jpa.show-sql=true\n" +
          "spring.jpa.properties.hibernate.generate_statistics=false\n \n" +
          "logging.file.name=logs/app.log\n" +
          "logging.pattern.rolling-file-name=logs/app-%d{yyyy-MM-dd}.%i.log \n" +
          "logging.file.max-size=10MB \n" +
          "logging.file.total-size-cap=10MB \n" +
          "logging.file.max-history=3 \n" +
          "logging.file.clean-history-on-start=true \n" +
          "logging.level.org.springframework.web=info \n" +
          "logging.level.org.springframework.core=info\n" +
          "logging.level.org.springframework.beans=info \n" +
          "logging.level.org.springframework.context=info \n" +
          "logging.level.org.hibernate=info \n" +
          "logging.level.org.hibernate.SQL=info \n" +
          "logging.level.org.hibernate.type=info \n" +
          "logging.level.org.hibernate.tool.hbm2ddl=info \n" +
          "logging.level.org.hibernate.jdbc=info \n" +
          "logging.level.org.hibernate.transaction=info\n" +
          "logging.level.org.hibernate.cache=info \n \n" +
        
          "`");
    }
}
