<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      class="white--text font-weight-bold display-1"
    >Lista de tarefas</v-app-bar>
    <v-main>
      <tabela :controller="controller" />
      <formulario
        ref="formulario"
        :controller="controller"
      />
    </v-main>
  </v-app>
</template>

<script>
import { todoListController } from "../di/di";
import tabela from "../components/tabela.vue";
import formulario from "../components/formulario.vue";
export default {
  components: {
    tabela,
    formulario,
  },
  data: (context) => ({
    controller: todoListController(context),
  }),
  mounted() {
    this.controller.mounted();
  },
};
</script>