# ACIT 3495 Project 2

## Setup

Before you begin, we need the Google Cloud Console installed and configured.

Once the console is ready, create a new kubernetes cluster on the Google Cloud Console website. After the engine is created, we can connect to it using the following command in the terminal.

```bash
gcloud container clusters get-credentials project2 --region us-central1 --project acit-3855-vm
```

## Kubernetes Commands

### 1. Creating the Pods

To create all services, we can use the following command:

```bash
kubectl apply -f .
```

### 2. Fetching the Deployed Pods

We can check if the pods for each service are running using the following command.

```bash
kubectl get deployments
```

### 3. Fetching the Replicasets

We can check the status of the replicasets by using the following command.

```bash
kubectl get replicasets
```