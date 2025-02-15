# Stage 1: Build
FROM node:23 AS build-stage

WORKDIR /app

# Copy the necessary files from the parent directory
COPY ../package.json ../yarn.lock ./
COPY ../client ./client
COPY ../server ./server
COPY ../admin ./admin

# Install dependencies
RUN yarn build

# Stage 2: Final Image
FROM node:23

WORKDIR /app

# Copy everything from the build stage
COPY --from=build-stage /app /app

EXPOSE 3001

CMD ["yarn", "start"]