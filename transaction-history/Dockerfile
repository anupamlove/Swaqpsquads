FROM openjdk:11
ADD ./target/transaction-history-0.0.1-SNAPSHOT.jar /usr/src/transaction-history-0.0.1-SNAPSHOT.jar
WORKDIR usr/src
ENTRYPOINT ["java","-jar", "transaction-history-0.0.1-SNAPSHOT.jar"]
