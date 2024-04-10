# Pushing to Google Cloud
echo "Building the docker image for db app service"

docker buildx build --platform linux/amd64 -t "db_app":latest "../../db_app" --load

echo "Tagging the new image"

docker tag "db_app" us-west1-docker.pkg.dev/acit-3855-vm/video-streaming-service/"db_app":latest

echo "Pushing the image to the Google Artifact Registry"

docker push us-west1-docker.pkg.dev/acit-3855-vm/video-streaming-service/"db_app":latest

# Deleting the exiting deployment

echo "Deleting existing service"

kubectl delete service db-app-service

kubectl delete deployment db-app

kubectl delete hpa db-app-hpa

# Applying the new changes

echo "Applying the changes"

kubectl apply -f ../db_app.yml

echo "Completed the script"

kubectl get deployments
