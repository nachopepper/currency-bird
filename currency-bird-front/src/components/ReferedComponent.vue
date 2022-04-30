<template>
  <div>
    <h1 v-if="users.length === 0">No se han creado referidos :(</h1>
    <table v-else>
      <tr>
        <th>Nombre Completo</th>
        <th>Invitaciones</th>
        <th>Total Recibido $</th>
      </tr>
      <tr v-for="(user, index) in users" :key="index">
        <td>{{ user.name }}</td>
        <td>{{ user.count }}</td>
        <td>{{ user.count * 5000 }}</td>
      </tr>
    </table>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      users: [],
    };
  },
  methods: {
    async getReferals() {
      const { data } = await axios.get("user/getReferals");
      this.users = data.users;
    },
  },
  async mounted() {
    await this.getReferals();
  },
};
</script>
<style scoped>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>