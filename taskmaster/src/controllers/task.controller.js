const db = require('../models');
const Task = db.tasks
const Op = db.Sequelize.Op

// New Task
exports.create = (req, res) => {
    // Validates requests
    if (!req.body.title) {
        res.status(400).send({
            message: 'Task must be titled!'
        });
        return;
    }

    // Creates a task
    const task = {
        title: req.body.title,
        description: req.body.description,
        published: req.body.published ? req.body.published : false
    }

    // Saves task in the database 
    Task.create(task)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || 'Error creating task. Try again.'
        })
    })
};

// Retrieve all tasks
exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { [Op.like]: `%${title}%`} } : null;

    Task.findAll({ where: condition })
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || 'Error retrieving tasks.'
        })
    })

};

// Find a single Task with an ID
exports.findOne = (req, res) => {
    const id = req.params.id;

    Task.findByPk(id)
    .then(data => {
        if (data) {
            res.send(data);
        } else {
            res.status(404).send({
                message: `Cannot find Task # ${id}`
            })
        }
    })
    .catch(err => {
        res.status(500).send({
            message: 'Error retrieving Task #' + id
        })
    })

};

// Update a Task by the ID in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Task.update(req.body, {
        where: { id : id }
    })
    .then(num => {
        if (num === 1) {
            res.send({
                message: 'Task updated successfully'
            });
        } else {
            res.send({
                message: `Cannot update Task # ${id}. Task may be missing or field is empty!`
            })
        }
    })
    .catch(err => {
        res.status(500).send({
            message: 'Error updating Task # ' + id
        });
    });

};

// Delete a Task by the specified ID in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Task.destroy({
        where: { id: id }
    })
    .then(num => {
        if (num === 1) {
            res.send({
                message: 'Task deleted!'
            });
        } else {
            res.send({
                message: `Cannot delete Task # ${id}. Task not found!`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: 'Could not delete Task #' + id
        })
    });

};

// Delete all Tasks from the database
exports.deleteAll = (req, res) => {
    Task.destroy({
        where: {},
        truncate: false
    })
    .then(nums => {
        res.send({ message: `${nums} Tasks deleted!`});
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || 'Error occurred while deleting Tasks'
        })
    })

};

// Find all published Tasks 
exports.findAllPublished = (req, res) => {
    Task.findAll({ where: { published: true } })
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || 'Some error occurred while retrieving tutorials'
        });
    });

};