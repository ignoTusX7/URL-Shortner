# Node.js URL Shortener Server

Welcome to the Node.js URL Shortener Server! This project allows you to set up your own URL shortening service quickly and easily. Follow the instructions below to get started.

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/ignoTusX7/URL-Shortner.git
   ```

2. Navigate to the project directory:

   ```bash
   cd URL-Shortner
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

## Configuration

1. Create a `.env` file in the root of the project.

2. Add the following configuration parameters to the `.env` file:

   ```env
   MONGODB_URL=your_mongo_database_uri
   ```

   Replace `your_mongo_database_uri` with the URI of your MongoDB database.

## Start the Server

1. Once the dependencies are installed and the configuration is set, start the server:

   ```bash
   npm start
   ```

   The server will run on the specified port (default is 3000).

## API Endpoints

- Shorten a URL:

  - **POST** `/url`
  - Request Body:
    ```json
    {
      "url": "https://your-long-url.com"
    }
    ```
  - Response:
    ```json
    {
      "originalUrl": "https://your-long-url.com",
      "shortUrl": "http://localhost:3000/abc123"
    }
    ```

- Accessing a Shortened URL:
  - **GET** `/:shortCode`
  - Redirects to the original long URL.

## Example

- Access the Shortened URL:

  Open `http://localhost:3000/abc123` in your browser, and it will redirect you to the original URL.

Feel free to explore and customize the code to fit your needs. Happy URL shortening!
