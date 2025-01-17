# Use the official Node.js image as the base image
FROM node:16

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the entire project to the container
COPY . .

# Expose the port the app runs on (default is 3000 for React)
EXPOSE 3000

# Start the React application
CMD ["npm", "start"]
