# Windows 10 WSL
Mongo has a mounting issue on windows. Use the window's docker compose instead

## Window's command
```
docker-compose.exe up
```

## Linux
```
docker-compose up
```

## Configuration
```
Create a folder in the backend directory. This folder will be bind mounted to the containers. Dotenv will be used for configurations of each node service.
```

## Images
All images are from https://unsplash.com/