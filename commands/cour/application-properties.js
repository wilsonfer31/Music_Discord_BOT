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
       

          return message.say("`" + "#configuration du port d'écoute du serveur Tomcat \n" +
          "server.port=8080 \n \n" + 
          "#configuration de la datasource \n" +
          "spring.datasource.initialization-mode=always \n \n" +
          "spring.datasource.driver-class-name=org.mariadb.jdbc.Driver \n" +
          "#spring.datasource.driver-class-name=${SPRING.DATASOURCE.DRIVER-CLASS-NAME} \n \n" +
          "spring.datasource.url=jdbc:mariadb://localhost:3306/cfa2022? \n" +
          "useSSL=false&useUnicode=true&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=UTC  \n" +
          "#spring.datasource.url=${SPRING_DATASOURCE_URL} \n \n" +
          "spring.datasource.username=root \n" +
          "spring.datasource.password= \n \n" +
          "#dialect : classe permettant de traduire les req JP-QL vers le SQL spécifique au SGBD utilisé \n" +
          "spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MariaDBDialect\n" +
          "#spring.jpa.properties.hibernate.dialect=${SPRING.JPA.PROPERTIES.HIBERNATE.DIALECT} \n \n" +
          "#Stratgie utilise pour gnrer les tables en Bdd\n" +
          "spring.jpa.hibernate.ddl-auto=update\n \n" +
          "#config des logs\n" +
          "#TODO : mettre  false en productio\n" +
          "spring.jpa.show-sql=true\n" +
          "spring.jpa.properties.hibernate.generate_statistics=false\n \n" +
          "#Loggers \n" +
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
          "#actuator \n" +
          "#management.server.port=8086\n" +
          "#management.endpoints.web.exposure.include=*\n \n" +
          "#app.storagefolder=./src/main/resources/files/\n" +
          "#app.storagefolder=${APPLICATION_STORAGE_VOLUME}\n \n" +
          "#jwt.secret=myapisecretkey123\n" +
          "#jwt.get.token.uri=/authenticate\n \n" +
          "#JavaMail \n" +
          "#spring.mail.host=smtp.gmail.com\n" +
          "#spring.mail.port=587\n" +
          "#spring.mail.username=cfaToto@gmail.com\n" +
          "#spring.mail.password=\n" +
          "#spring.mail.properties.mail.smtp.auth=true\n" +
          "#spring.mail.properties.mail.smtp.starttls.enable=true\n\n" +
          "#File weight\n" +
          "#spring.servlet.multipart.max-file-size=10MB \n" +
          "#spring.servlet.multipart.max-request-size=10MB" +
          "`");
    }
}