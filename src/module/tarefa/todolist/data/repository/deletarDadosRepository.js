import { TodoList } from "../../domain/model/todoList"

const deletarDadosRepository = (axios) => async (id) => {
    try {
        const response = await axios.delete(`/item/${id}`)
        return new TodoList(response.data)
    } catch (error) {
        throw error
    }
}

export { deletarDadosRepository }