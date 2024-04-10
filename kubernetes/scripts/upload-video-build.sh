# Pushing to Google Cloud
echo "Building the docker image for upload video service"

docker buildx build --platform linux/amd64 -t "upload_video":latest "../../upload_video" --load

echo "Tagging the new image"

docker tag "upload_video" us-west1-docker.pkg.dev/acit-3855-vm/video-streaming-service/"upload_video":latest

echo "Pushing the image to the Google Artifact Registry"

docker push us-west1-docker.pkg.dev/acit-3855-vm/video-streaming-service/"upload_video":latest

# Deleting the exiting deployment

echo "Deleting existing service"

kubectl delete service upload-video-service

kubectl delete deployment upload-video

kubectl delete hpa upload-video-hpa

# Applying the new changes

echo "Applying the changes"

kubectl apply -f ../upload_video.yml

echo "Completed the script"

kubectl get deployments
