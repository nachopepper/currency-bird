<template>
  <div class="hello">
    <input v-model="name" placeholder="Nombre Completo" />
    <input v-model="email" placeholder="Ingresar tu email" />
    <input placeholder="Dirección" />
    <input placeholder="Sexo" />

    <button @click="register">Registrarse</button>
    {{ errorMessage }}
    {{ successMessage }}
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Invite",
  data() {
    return {
      name: "",
      email: "",
      errorMessage: "",
      successMessage: ""
    };
  },
  computed:{
    referalUserId() {
      return this.$route.params.id;
    }
  },
  methods: {
    async register() {
      this.errorMessage = "";
      this.successMessage = "";
      try {
        await axios.post("user?referalId=" + this.referalUserId, {
          name: this.name,
          email: this.email,
        });

        this.successMessage = "Usuario creado correctamente."
        
      } catch (e) {
        this.errorMessage = "Error registrando. ";
        e.response.data.errors.errors.forEach((el) => {
          this.errorMessage += `${el.msg}. `;
        });
      }
    },
  },
};
</script>

