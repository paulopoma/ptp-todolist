const incluirDadosUsecase = (repository) => async (todoList) => {
    try {
        return await repository(todoList)
    } catch (error) {
        throw error
    }
}

export { incluirDadosUsecase }