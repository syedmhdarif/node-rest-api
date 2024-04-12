FROM node:21.7.1

WORKDIR /Users/syedmhdarif/node-rest-api/backend
COPY package.json .
RUN npm install
COPY . .
# EXPOSE 3306
CMD npm start

# # Use official Node.js image as base
# FROM node:14

# # Set working directory in the container
# WORKDIR /Users/syedmhdarif/node-rest-api/backend

# # Copy package.json and package-lock.json to the working directory
# COPY package*.json ./

# # Install dependencies
# RUN npm install

# # Copy the rest of the application code
# COPY . .

# # Expose port 3000 for the Express.js application
# EXPOSE 3000

# # Command to run the Express.js application
# CMD ["npm", "start"]