FROM openjdk:11

ADD ./target/email-0.0.1-SNAPSHOT.jar /usr/src/email-0.0.1-SNAPSHOT.jar

WORKDIR usr/src

ENTRYPOINT ["java","-jar", "email-0.0.1-SNAPSHOT.jar"]
