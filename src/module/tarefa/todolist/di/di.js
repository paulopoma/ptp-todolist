import axios from "axios";
import { TodoListController } from "../controller/todoListController";
import { buscarDadosRepository } from "../data/repository/buscarDadosRepository";
import { buscarDadosUsecase } from "../domain/usecase/buscarDadosUsecase";
import { incluirDadosRepository } from "../data/repository/incluirDadosRepository";
import { incluirDadosUsecase } from "../domain/usecase/incluirDadosUsecase";
import { deletarDadosRepository } from "../data/repository/deletarDadosRepository";
import { deletarDadosUsecase } from "../domain/usecase/deletarDadosUsecase";
import { alterarDadosRepository } from "../data/repository/alterarDadosRepository";
import { alterarDadosUsecase } from "../domain/usecase/alterarDadosUsecase";

const axiosInstance = axios.create({
    baseURL: "https://todo-list-hateoas.herokuapp.com/"
})
const buscarDadosRepositoryImpl = buscarDadosRepository(axiosInstance)
const buscarDadosUsecaseImpl = buscarDadosUsecase(buscarDadosRepositoryImpl)
const incluirDadosRepositoryImpl = incluirDadosRepository(axiosInstance)
const incluirDadosUsecaseImpl = incluirDadosUsecase(incluirDadosRepositoryImpl)
const deletarDadosRepositoryImpl = deletarDadosRepository(axiosInstance)
const deletarDadosUsecaseImpl = deletarDadosUsecase(deletarDadosRepositoryImpl)
const alterarDadosRepositoryImpl = alterarDadosRepository(axiosInstance)
const alterarDadosUsecaseImpl = alterarDadosUsecase(alterarDadosRepositoryImpl)

const todoListController = (context) => new TodoListController(
    context, 
    alterarDadosUsecaseImpl,
    buscarDadosUsecaseImpl,
    incluirDadosUsecaseImpl,
    deletarDadosUsecaseImpl)

export { todoListController }