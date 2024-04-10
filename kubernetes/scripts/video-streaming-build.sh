# Pushing to Google Cloud
echo "Building the docker image for video streaming service"

docker buildx build --platform linux/amd64 -t "video_streaming":latest "../../video_streaming" --load

echo "Tagging the new image"

docker tag "video_streaming" us-west1-docker.pkg.dev/acit-3855-vm/video-streaming-service/"video_streaming":latest

echo "Pushing the image to the Google Artifact Registry"

docker push us-west1-docker.pkg.dev/acit-3855-vm/video-streaming-service/"video_streaming":latest

# Deleting the exiting deployment

echo "Deleting existing service"

kubectl delete service video-streaming-service

kubectl delete deployment video-streaming

kubectl delete hpa video-streaming-hpa

# Applying the new changes

echo "Applying the changes"

kubectl apply -f ../video_streaming.yml

echo "Completed the script"

kubectl get deployments
