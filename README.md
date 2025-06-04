## Task 1: Fullstack Dockerization (React + Node + Nginx)

### Multi-Stage Dockerfile Summary

- **Stage 1:** Build React frontend using `node:18-alpine`
  - Alias: `frontend-builder`
  - Directory: `/app/frontend`
  - Commands:
    ```Dockerfile
    COPY frontend/my-app/ ./
    RUN npm install && npm run build
    ```

- **Stage 2:** Install backend dependencies and copy files
  - Alias: `backend-builder`
  - Directory: `/app/backend`
  - Commands:
    ```Dockerfile
    COPY backend/package*.json ./
    RUN npm install --only=production
    COPY backend/ ./
    ```

- **Stage 3:** Final image (uses Node image, not Nginx base)
  - Installs Nginx in Node image
  - Copies frontend `dist` to `/usr/share/nginx/html`
  - Copies backend to `/app/backend`
  - Runs backend with `node` and frontend with `nginx`

  ```Dockerfile
  EXPOSE 80
  CMD node /app/backend/server.js & nginx -g 'daemon off;'

# Execution & Verification

## Run image with:

```bash
docker run -p 8080:80 fullstack
```

## Inside container:

```bash
docker exec -it <containerID> sh
```

- Check contents of Nginx directory for frontend
- Run `ps aux` to ensure both Node and Nginx processes are active

---

# Task 2: C++ Dockerization

## Dockerfile Summary

- **Base Image:** `gcc:latest`
- **Working Directory:** `/app`

### Build Instructions (`Dockerfile`)

```Dockerfile
COPY cpp_dockerized.cpp .
RUN g++ -o summator cpp_dockerized.cpp
CMD ["./summator"]
```

## Execution

Run container interactively to allow input:

```bash
docker run -it cpp-app
```

- `-i` keeps input open (interactive)
- `-t` allocates terminal (TTY)