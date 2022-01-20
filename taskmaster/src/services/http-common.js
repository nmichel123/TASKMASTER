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

export default new TaskmasterDataService