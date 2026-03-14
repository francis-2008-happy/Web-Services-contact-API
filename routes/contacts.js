const express = require('express');
const router = express.Router();
const contactsController = require('../controllers/contacts');

// GET all contacts
router.get('/', contactsController.getAll);

// GET single contact by ID
router.get('/:id', contactsController.getSingle);

// POST create contact
router.post('/', contactsController.createContact);

// PUT update contact
router.put('/:id', contactsController.updateContact);

// DELETE contact
router.delete('/:id', contactsController.deleteContact);

module.exports = router;
