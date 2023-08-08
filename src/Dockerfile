
FROM node:18-alpine

# Use ARG inline to pass in the HELLO variable
ARG HELLO

# Create a directory for the app
RUN mkdir /root/app

# Set the working directory
WORKDIR /root/app

# Copy all files to the app directory
COPY . /root/app/

# Install dependencies
RUN npm install

# Expose port 3333 to allow connections
EXPOSE 3333

# Print environment variables for debugging
RUN printenv

# Start the application
CMD npm start
