import { TodoList } from "../../domain/model/todoList"

const buscarDadosRepository = (axios) => async (sigla) => {
    try {
        const response = await axios.get(`/item?initials=${sigla}`)
        return response.data.map((item) => new TodoList(item))
    } catch (error) {
        throw error
    }
}

export { buscarDadosRepository }