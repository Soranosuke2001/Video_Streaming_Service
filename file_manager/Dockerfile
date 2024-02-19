# FROM openjdk:latest

# WORKDIR /file_manager

# COPY . .


# EXPOSE 8080

# CMD ["java", "-jar", "target/file_manager.jar"]


# Stage 1: Build the application
FROM maven:latest as builder
WORKDIR /file_manager

# Copy the project files into the image
COPY . .

# Compile and package the application
# Skipping tests to speed up the build process; remove '-DskipTests' if tests are required
RUN mvn clean package -DskipTests

# Stage 2: Run the application
FROM openjdk:latest

WORKDIR /app

# Copy the JAR file from the previous stage
# COPY --from=builder /app/target/*.jar app.jar
COPY --from=builder /file_manager/target/file_manager-0.0.1-SNAPSHOT.jar app.jar

# Expose the application's port
EXPOSE 8080

# Command to run the application
CMD ["java", "-jar", "app.jar"]
