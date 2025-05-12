# Topic Retrieval API

## Overview
The Topic Retrieval API is a Node.js-based application designed to retrieve and manage topics. It provides endpoints for health checks and topic retrieval, making it a useful tool for applications that require topic-based data management.

## Features
- **Health Check Endpoint**: Ensures the API is running and operational.
- **Topic Retrieval**: Fetches topics from a predefined dataset.

## Project Structure
```
├── package.json
├── readMe.md
├── src/
│   ├── app.js
│   ├── constants.js
│   ├── index.js
│   ├── controllers/
│   │   ├── healthcheck.controller.js
│   │   ├── topicRetriever.controller.js
│   ├── data/
│   │   ├── topics.json
│   ├── libs/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   │   ├── healthcheck.route.js
│   │   ├── topicRetriver.routes.js
│   ├── utils/
│       ├── ApiError.js
│       ├── ApiResponse.js
│       ├── asyncHandler.js
```

## Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd Topic_Retrival_Api
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Usage
1. Start the server:
   ```bash
   npm run dev
   ```
2. Access the API at `http://localhost:<port>` (default port is specified in the `app.js` file).

## Endpoints
### Health Check
- **GET** `/healthcheck`
  - Description: Checks if the API is operational.

### Topic Retrieval
- **GET** `/topics`
  - Description: Retrieves a list of topics from the dataset.

#### Basic Search
- **GET** `http://localhost:3000/api/topics?search=<searchTerm>`
  - Description: Searches for topics containing the term "react".

#### Search + Sort
- **GET** `http://localhost:3000/api/topics?search=<searchTerm>&sort=name`
  - Description: Searches for topics containing the term "a" and sorts them by name.

## Contact
For any inquiries or issues, please contact the project maintainer.