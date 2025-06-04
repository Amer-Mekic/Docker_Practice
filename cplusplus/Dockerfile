# Use official GCC image
FROM gcc:latest

# Set working directory to /app
WORKDIR /app

# Copy the source code into the container
COPY cpp_dockerized.cpp .

# Compile the file
RUN g++ -o summator cpp_dockerized.cpp

# Command to run the executable
CMD ["./summator"]