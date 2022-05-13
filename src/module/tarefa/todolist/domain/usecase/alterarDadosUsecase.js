const alterarDadosUsecase = (repository) => async (todoList) => {
    return await repository(todoList)
}

export { alterarDadosUsecase }