#!/bin/bash

# Array of folder names
folders=("authentication" "db_app" "file_manager" "upload_video" "video_streaming")

# Array of corresponding image names
image_names=("authentication" "db_app" "file_manager" "upload_video" "video_streaming")

# Length of the array
length=${#folders[@]}

# Loop through the arrays
for ((i=0; i<$length; i++)); do
    folder=${folders[$i]}
    image_name=${image_names[$i]}
    echo "Starting Docker build for $folder with image name $image_name..."

    # Build and push the Docker image for the current directory
    docker buildx build --platform linux/amd64 -t "$image_name":latest "../../$folder" --load 
done

# Wait for all background jobs to finish
wait

echo -e "\nCompleted building images locally. Starting Google Artifact Registry step...\n"

# Loop through the arrays
for ((i=0; i<$length; i++)); do
    folder=${folders[$i]}
    image_name=${image_names[$i]}
    echo "Tagging $image_name..."

    # Build and push the Docker image for the current directory
    docker tag "${image_name}" us-west1-docker.pkg.dev/acit-3855-vm/video-streaming-service/"${image_name}":latest

    echo "Pushing to Google Artifact Registry Repo: $image_name..."

    docker push us-west1-docker.pkg.dev/acit-3855-vm/video-streaming-service/"${image_name}":latest
done

echo "All Docker builds completed."

kubectl apply -f ../