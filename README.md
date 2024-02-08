# Video Streaming Service Project - ACIT 3495 Winter 2024

This project will be about a video streaming service that allows users to authenticate, upload, and view videos.

## Team Members

- Sora Schlegel
- Nazira Fakhrurradi

## Installation

1. Clone the repo.

```
git clone https://github.com/Soranosuke2001/Video_Streaming_Service.git
```

2. Ensure you have Docker installed, then run the docker compose file.

```
docker compose -d up
```

## Services

The system microservices can be described as follows:

-	Upload Video (Web app) is used to upload MP4 file (or any video format). Users are allowed to upload videos after validating their credentials through the Authentication Service. Video names and paths on the filesystem are written to the MySql Service. The file itself is Written to a file storage through the File System Service.

-	Video Streaming (Web app) is used to view videos. Users are allowed to view videos after validating their credentials through the Authentication Service. The list of videos and their paths are taken from MySql DB service, and the video itself can be read from the file storage through the File System Service.

-	The Authentication Services is a simple service to validate users credentials. 
-	The File System service is a simple service to write and read files to/from file storage (HDD, AWS S3,…etc)
-	MySql DB service will have a list of videos and their corresponding (path/URL) on file storage. 

## Deliverables

Deliverables:
-	All docker files, docker compose, and code files
-	A presentation
-	A technical report that explains your solution
