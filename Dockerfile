# Step 1: Use official Node.js image
FROM node:22-alpine

# Step 2: Set working directory
WORKDIR /app

# Step 3: Copy package files and install dependencies
COPY package*.json ./
RUN npm install --only=production

# Step 4: Copy all project files
COPY . .

# Step 5: Build Next.js app
RUN npm run build

# Step 6: Set environment variables
ENV NODE_ENV=production
ENV PORT=3000

# Step 7: Expose port
EXPOSE 3000

# Step 8: Start the app
CMD ["npm", "start"]
