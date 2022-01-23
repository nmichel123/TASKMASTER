import http from '../http-common'

class TaskmasterDataService {
    getAll() {
        return http.get('tasks')
    }

    get(id) {

    }

    create(data) {

    }

    update(id,data) {

    }

    delete(id) {

    }

    deleteAll() {

    }

    findByTitle(title) {

    }
}

// What is luv? baby dont hurd me odnt hurt me no more

export default new TaskmasterDataService