<template>
  <v-container>
    <v-card>
      <v-card-text class="pa-0">
        <cgi-data-table
          :linhas="controller.linhas"
          :colunas="controller.colunas"
          mostra-acoes
          :copiar="false"
          nome-tabela="Lista de tarefas"
          nome-programa="wtms005"
          mostra-pesquisa
          altura="68vh"
          :mostra-paginacao="false"
          mostra-propriedades
          @deletar-item="controller.deletar($event)"
          @alterar-item="controller.alterar($event)"
        >
          <template v-slot:date="{item}">
            {{moment.utc(item.date).format("DD/MM/YYYY HH:mm:ss")}}
          </template>
          <template v-slot:botoes>
            <v-btn
              outlined
              color="green"
              @click="controller.incluir()"
            >
              <v-icon left>mdi-plus</v-icon> incluir
            </v-btn>
          </template>
        </cgi-data-table>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  props: {
    controller: {
      required: true,
    },
  },
};
</script>
