FROM openjdk:latest

WORKDIR /file_manager

COPY . .

RUN ./mvnw dependency:go-offline

RUN ./mvnw package -DskipTests

EXPOSE 8080

CMD ["java", "-jar", "target/file_manager.jar"]
