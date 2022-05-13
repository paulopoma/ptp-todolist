<template>
  <div>
    Sigla: <input v-model="controller.sigla" />
    <button @click="controller.buscarDados()">Buscar Tarefas</button>

    <table border="1">
      <tr>
        <th>Data</th>
        <th>Descrição</th>
        <th>Sigla</th>
        <th>Nome</th>
      </tr>
      <tr v-for="(todoList, index) in controller.resultado" :key="index">
        <td>{{ todoList.date }}</td>
        <td>{{ todoList.description }}</td>
        <td>{{ todoList.initials }}</td>
        <td>{{ todoList.name }}</td>
        <td><button @click="controller.deletarDados(todoList.id)">Exclui</button></td>
        <td><button @click="controller.mostrarDados(todoList)">Alterar</button></td>
      </tr>
    </table>
    <br />
    <hr />
    <table border="0">
      <tr>
        <td>Sigla:</td>
        <td><input v-model="controller.initialsInc" /></td>
      </tr>
      <tr>
        <td>Nome:</td>
        <td><input v-model="controller.nameInc" /></td>
      </tr>
      <tr>
        <td>Data:</td>
        <td><input v-model="controller.dateInc" /></td>
      </tr>
      <tr>
        <td>Descrição:</td>
        <td><input v-model="controller.descriptionInc" /></td>
      </tr>
      <tr>
        <td></td>
        <td>
          <button v-if="controller.isIncluir" @click="controller.incluirDados()">Incluir</button>
          <button v-else @click="controller.alterarDados()">Alterar</button>
          <button @click="controller.limpaDados()">Limpar</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { todoListController } from "../di/di";
export default {
  data: (context) => ({
    controller: todoListController(context),
  }),
};
</script>