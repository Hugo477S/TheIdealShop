FROM ubuntu:latest AS build
RUN apt-get update
RUN apt-get install openjdk-17-jdk -y
COPY . .
RUN mvn clean package -DskipTests


FROM openjdk:17.0.1-jdk-slim
COPY -from=build /target/*.jarjar demo.jar/
EXPOSE 8080
ENTRYPOINT [ "java","jar","demo.jar" ]