# Project Notes

These are just some useful commands to remember.

## Useful Commands

Any commands that I used for this project.

### Setting up Google Artifact Registry

1. Navigate to the Google Cloud Console and create a new artifact registry repository

2. Use the following command to create the connection to the artifact registry

```bash
gcloud auth configure-docker us-west1-docker.pkg.dev
```

### Adding a Tag

Use the following command to add a tag to an existing docker image on the local machine

Note: The image must already exist on the local machine

```bash
docker tag authentication us-west1-docker.pkg.dev/acit-3855-vm/video-streaming-service/authentication:latest
```

### Pushing Docker Image to Google Artifact Registry

Once we have added a tag to the docker image, we can push the image to the artifact registry repo using the following command

```bash
docker push us-west1-docker.pkg.dev/acit-3855-vm/video-streaming-service/authentication:latest
```

### Building Docker Images

Use the `docker-build.sh` script to create the docker image for all services. This script will save the images to to local machine.

```bash
bash docker-build.sh
```

