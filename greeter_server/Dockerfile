# Setup
FROM node:18-alpine
WORKDIR /app

# Dependencies
COPY package*.json ./
RUN npm install

# Copy project
COPY . /app

# Environment Variables
ENV NODE_ENV=development
ENV PORT=50051
ENV SERVER_URL=inject_at_deployment

# Start
EXPOSE $PORT
CMD [ "node", "greeter_server.js" ]