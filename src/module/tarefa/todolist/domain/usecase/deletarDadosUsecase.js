const deletarDadosUsecase = (repository) => async (id) => {
    try {
        return await repository(id)
    } catch (error) {
        throw error
    }
}

export { deletarDadosUsecase }