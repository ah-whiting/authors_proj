const Author = require('./models')

module.exports = {

    all_authors: (req,res) => {
        Author.find().sort('name')
            .then(data => res.json({message: "success", data}))
            .catch(err => res.json({message: 'find error', error: err}))
    },
    create_author: (req,res) => {
        const author = new Author(req.body)
        author.save()
            .then(data => res.json({message: "success", data}))
            .catch(err => res.json({message: 'add error', error: err}))
    }, 
    show_author: (req,res) => {
        Author.findById(req.params.id)
            .then(data => res.json({message: "success", data}))
            .catch(err => res.json({message: 'find error', error:err}))
    },
    update_author: (req,res) => {
        Author.findByIdAndUpdate(req.params.id, { $set : req.body }, 
            {new: true, runValidators: true}
        )
            .then(data => res.json({message: "success", data}))
            .catch(err => res.json({message: 'update error', error: err}))
    },
    delete_author: (req,res) => {
        Author.findByIdAndDelete(req.params.id)
            .then(data => res.json({message: 'success', deleted: data}))
            .catch(err => res.json({message: "delete error", error: err}))
    }
}