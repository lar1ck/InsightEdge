# Use the official Node.js image with Debian Buster
FROM node:18-buster

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files from the backend
COPY ./Backend/package*.json ./

# Install dependencies
RUN npm install

# Copy the entire backend directory to /app
COPY ./Backend /app

# Expose port 5000 (or the port your backend uses)
EXPOSE 5000

# Command to run the app (adjust if needed based on your app.js entry point)
CMD ["node", "app.js"]
