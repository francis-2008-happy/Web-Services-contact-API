# Contacts API - Week 01

A REST API for storing and retrieving contact information using Node.js, Express, and MongoDB.

## Features

- **GET /contacts** - Retrieve all contacts
- **GET /contacts/:id** - Retrieve a single contact by ID

## Contact Schema

Each contact has the following fields:
- `firstName` - First name of the contact
- `lastName` - Last name of the contact  
- `email` - Email address
- `favoriteColor` - Favorite color
- `birthday` - Birthday date

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Edit the `.env` file and replace the placeholder with your MongoDB connection string:

```
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster-url>/<database-name>?retryWrites=true&w=majority
```

### 3. Import Sample Data to MongoDB

1. Go to [MongoDB Atlas](https://cloud.mongodb.com)
2. Navigate to your cluster → Collections
3. Create a new database (e.g., `contactsDB`)
4. Create a collection named `contacts`
5. Click "Insert Document" or use "Import Data"
6. Import the data from `sampleContacts.json`

Alternatively, use MongoDB Compass or the MongoDB Shell to import:

```bash
mongoimport --uri "your-mongodb-uri" --collection contacts --file sampleContacts.json --jsonArray
```

### 4. Run the Application

```bash
npm start
```

The server will start on `http://localhost:3000`

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /contacts | Get all contacts |
| GET | /contacts/:id | Get a single contact by ID |

## Deployment to Render

1. Push your code to GitHub (excluding `.env` and `node_modules`)
2. Create a new Web Service on [Render](https://render.com)
3. Connect your GitHub repository
4. Configure the following:
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
5. Add environment variable:
   - Key: `MONGODB_URI`
   - Value: Your MongoDB connection string
6. Deploy!

## Project Structure

```
├── controllers/
│   └── contacts.js      # Contact controller functions
├── db/
│   └── connect.js       # MongoDB connection
├── routes/
│   ├── index.js         # Main router
│   └── contacts.js      # Contact routes
├── .env                 # Environment variables (not committed)
├── .gitignore          # Git ignore file
├── package.json        # NPM package configuration
├── sampleContacts.json # Sample data for import
├── server.js           # Main application entry point
└── README.md           # This file
```

## Testing

Test the API using:
- Browser: `http://localhost:3000/contacts`
- curl: `curl http://localhost:3000/contacts`
- Postman or similar API testing tool

## Week 02 (Coming Soon)

- POST /contacts - Create a new contact
- PUT /contacts/:id - Update an existing contact
- DELETE /contacts/:id - Delete a contact
- Swagger API Documentation
