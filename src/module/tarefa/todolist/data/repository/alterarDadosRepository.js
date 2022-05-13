import { TodoList } from "../../domain/model/todoList"

const alterarDadosRepository = (axios) => async (todoList) => {
   const response = await axios.put(`/item/${todoList.id}`,todoList)
   return new TodoList(response.data)
}

export { alterarDadosRepository }