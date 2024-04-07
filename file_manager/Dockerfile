FROM maven:latest as builder
WORKDIR /file_manager

COPY . .

RUN mvn clean package -DskipTests

FROM openjdk:latest

WORKDIR /app

COPY --from=builder /file_manager/target/file_manager-0.0.1-SNAPSHOT.jar app.jar

EXPOSE 8080

CMD ["java", "-jar", "app.jar"]
