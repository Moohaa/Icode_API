# Use a minimal Node.js image as the base
FROM python:3.8-slim-buster

# Set the working directory inside the container
WORKDIR /app

# Copy the contents of the current directory into the container
COPY . .



ENTRYPOINT ["python3","run.py"]




# Run the Node.js script with arguments provided during runtime
