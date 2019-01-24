const controller = require('./controller')

module.exports = (app) => {

    app
        .get('/api/authors', controller.all_authors)
        .get('/api/authors/:id', controller.show_author)
        .post('/api/authors/', controller.create_author)
        .put('/api/authors/:id', controller.update_author)
        .delete('/api/authors/:id', controller.delete_author);
}