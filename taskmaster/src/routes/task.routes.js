module.exports = app => {
    const tasks = require('../controllers/task.controller')

    var router = require('express').Router();

    // Create a new task
    router.post("/", tasks.create);

    // Retrieve all tasks
    router.get("/", tasks.findAll);

    // Retrieve all published tasks
    router.get("/published", tasks.findAllPublished);

    // Retrieve a single task with an id
    router.get("/:id", tasks.findOne);

    // Update a task with an id
    router.get("/:id", tasks.update);

    // Delete a task with an id
    router.delete("/:id", tasks.delete);

    // Delete all tutorials
    router.delete("/", tasks.deleteAll);

    app.use('/api/tasks', router);
}