const swaggerJsDoc = require('swagger-jsdoc');

const buildServerUrl = () => {
  if (process.env.RENDER_EXTERNAL_URL) {
    return process.env.RENDER_EXTERNAL_URL;
  }
  if (process.env.BASE_URL) {
    return process.env.BASE_URL;
  }
  return `http://localhost:${process.env.PORT || 3000}`;
};

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Contacts API',
      version: '1.0.0',
      description: 'REST API for managing contacts in MongoDB.'
    },
    servers: [
      {
        url: buildServerUrl(),
        description: 'Current environment'
      }
    ],
    components: {
      schemas: {
        Contact: {
          type: 'object',
          required: ['firstName', 'lastName', 'email', 'favoriteColor', 'birthday'],
          properties: {
            _id: {
              type: 'string',
              description: 'MongoDB ObjectId'
            },
            firstName: {
              type: 'string',
              example: 'John'
            },
            lastName: {
              type: 'string',
              example: 'Doe'
            },
            email: {
              type: 'string',
              example: 'john.doe@example.com'
            },
            favoriteColor: {
              type: 'string',
              example: 'Blue'
            },
            birthday: {
              type: 'string',
              example: '1990-05-15'
            }
          }
        },
        ContactInput: {
          type: 'object',
          required: ['firstName', 'lastName', 'email', 'favoriteColor', 'birthday'],
          properties: {
            firstName: {
              type: 'string',
              example: 'John'
            },
            lastName: {
              type: 'string',
              example: 'Doe'
            },
            email: {
              type: 'string',
              example: 'john.doe@example.com'
            },
            favoriteColor: {
              type: 'string',
              example: 'Blue'
            },
            birthday: {
              type: 'string',
              example: '1990-05-15'
            }
          }
        }
      }
    },
    paths: {
      '/contacts': {
        get: {
          summary: 'Get all contacts',
          responses: {
            200: {
              description: 'Contacts retrieved successfully',
              content: {
                'application/json': {
                  schema: {
                    type: 'array',
                    items: {
                      $ref: '#/components/schemas/Contact'
                    }
                  }
                }
              }
            }
          }
        },
        post: {
          summary: 'Create a new contact',
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/ContactInput'
                }
              }
            }
          },
          responses: {
            201: {
              description: 'Contact created',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      id: {
                        type: 'string'
                      }
                    }
                  }
                }
              }
            },
            400: {
              description: 'Validation error'
            }
          }
        }
      },
      '/contacts/{id}': {
        get: {
          summary: 'Get one contact by id',
          parameters: [
            {
              in: 'path',
              name: 'id',
              required: true,
              schema: {
                type: 'string'
              }
            }
          ],
          responses: {
            200: {
              description: 'Contact retrieved successfully',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/Contact'
                  }
                }
              }
            },
            404: {
              description: 'Contact not found'
            }
          }
        },
        put: {
          summary: 'Update a contact by id',
          parameters: [
            {
              in: 'path',
              name: 'id',
              required: true,
              schema: {
                type: 'string'
              }
            }
          ],
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/ContactInput'
                }
              }
            }
          },
          responses: {
            204: {
              description: 'Contact updated successfully'
            },
            400: {
              description: 'Validation error'
            },
            404: {
              description: 'Contact not found'
            }
          }
        },
        delete: {
          summary: 'Delete a contact by id',
          parameters: [
            {
              in: 'path',
              name: 'id',
              required: true,
              schema: {
                type: 'string'
              }
            }
          ],
          responses: {
            204: {
              description: 'Contact deleted successfully'
            },
            404: {
              description: 'Contact not found'
            }
          }
        }
      }
    }
  },
  apis: []
};

module.exports = swaggerJsDoc(options);
