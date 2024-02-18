package com.file_manager.file_manager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import software.amazon.awssdk.services.s3.S3Client;
import software.amazon.awssdk.services.s3.model.ObjectCannedACL;
import software.amazon.awssdk.services.s3.model.PutObjectRequest;
import software.amazon.awssdk.core.sync.RequestBody;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;


@RestController
public class VideoController {
    private S3Client s3Client;
    private String bucketName = "acit3495-video-streaming-storage";

    @Autowired
    public void FileUploadController(S3Client s3Client) {
        this.s3Client = s3Client;
    }

    @GetMapping("/test")
    public String getMethodName() {
        return new String("testing");
    }
    

    @PostMapping("/upload")
    @CrossOrigin(origins = "http://localhost:8200", allowCredentials = "true")
    public ResponseEntity<String> uploadFile(@RequestParam("file") MultipartFile file, @CookieValue("user_id") String userID) {
        try {
            String key = userID + "/" + file.getOriginalFilename();

            s3Client.putObject(PutObjectRequest.builder().bucket(bucketName).key(key).contentType("video/mp4").acl(ObjectCannedACL.PUBLIC_READ).build(), RequestBody.fromInputStream(file.getInputStream(), file.getSize()));
            return ResponseEntity.ok("File was uploaded successfully");
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body("Failed to upload file. Error: " + e.getMessage());
        }
    }
    
}
