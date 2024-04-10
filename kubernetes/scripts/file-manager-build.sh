# Pushing to Google Cloud
echo "Building the docker image for file manager service"

docker buildx build --platform linux/amd64 -t "file_manager":latest "../../file_manager" --load

echo "Tagging the new image"

docker tag "file_manager" us-west1-docker.pkg.dev/acit-3855-vm/video-streaming-service/"file_manager":latest

echo "Pushing the image to the Google Artifact Registry"

docker push us-west1-docker.pkg.dev/acit-3855-vm/video-streaming-service/"file_manager":latest

# Deleting the exiting deployment

echo "Deleting existing service"

kubectl delete service file-manager-service

kubectl delete deployment file-manager

kubectl delete hpa file-manager-hpa

# Applying the new changes

echo "Applying the changes"

kubectl apply -f ../file_manager.yml

echo "Completed the script"

kubectl get deployments
