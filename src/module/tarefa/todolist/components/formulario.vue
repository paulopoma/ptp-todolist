<template>
  <v-dialog
    width="500px"
    v-model="controller.dialog"
    persistent
    scrollables
  >
    <v-card>

      <v-card-title>
        Manutenção da tarefa
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text class="mt-5">
        <v-form ref="form">
          <v-text-field
            label="Sigla"
            v-model="controller.todo.initials"
            dense
            :rules="[v => !!v || 'Preencha o campo']"
          >
          </v-text-field>
          <v-text-field
            label="Nome"
            v-model="controller.todo.name"
            dense
            :rules="[v => !!v || 'Preencha o campo']"
          >
          </v-text-field>
          <cgi-date-picker
            nome="Data"
            v-model="controller.todo.data"
            compacto
            :regras="[v => !!v || 'Preencha o campo']"
          >
          </cgi-date-picker>
          <cgi-time-picker
            nome="Hora"
            v-model="controller.todo.hora"
            compacto
            :regras="[v => !!v || 'Preencha o campo']"
          >
          </cgi-time-picker>
          <v-textarea
            rows="1"
            auto-grow
            v-model="controller.todo.description"
            label="Descrição"
            counter="100"
            :rules="[
              v => !!v || 'Preencha o campo',
              v => (v && v.length <= 100) || 'Menos que 100 o merda',
            ]"
          ></v-textarea>
        </v-form>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn
          outlined
          color="red"
          @click="controller.cancelar()"
        >
          <v-icon left>mdi-close</v-icon>
          cancelar
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn
          color="primary"
          @click="controller.salvar()"
        >
          <v-icon left>mdi-content-save</v-icon>
          salvar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
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