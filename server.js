const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const mongodb = require('./db/connect');
const swaggerDocument = require('./swagger');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/', require('./routes'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Initialize database connection and start server
mongodb.initDb((err) => {
  if (err) {
    console.error('Failed to connect to MongoDB:', err.message);
    process.exit(1);
  } else {
    app.listen(port, () => {
      console.log(`Connected to DB and listening on port ${port}`);
    });
  }
});
