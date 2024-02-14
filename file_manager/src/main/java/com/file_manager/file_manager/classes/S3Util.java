package com.file_manager.file_manager.classes;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import software.amazon.awssdk.auth.credentials.AwsBasicCredentials;
import software.amazon.awssdk.auth.credentials.StaticCredentialsProvider;
import software.amazon.awssdk.regions.Region;
import software.amazon.awssdk.services.s3.S3Client;

@Configuration
public class S3Util {
    @Bean
    public S3Client s3Client() {
        return S3Client.builder()
                        .credentialsProvider(StaticCredentialsProvider.create(AwsBasicCredentials.create("AKIA3WOBBQWM6OCZG56X", "spvgjUujXZ3HwFRUPK+ddXtUsqJgkOXnqP1FwVbY")))
                        .region(Region.US_WEST_2)
                        .build();
    }
}
