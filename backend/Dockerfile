# Use Node.js image
FROM node:20

WORKDIR /app

# Install dependencies
COPY package.json .
RUN npm install

# Copy code
COPY . .

# Expose port
EXPOSE 5000

CMD ["node", "server.js"]
