import { TodoList } from "../../domain/model/todoList"

const incluirDadosRepository = (axios) => async (todoList) => {
    try {
        const response = await axios.post(`/item`,todoList)
        return new TodoList(response.data)
    } catch (error) {
        throw error
    }
}

export { incluirDadosRepository }