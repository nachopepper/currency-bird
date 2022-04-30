<template>
  <div class="hello">
    <input v-model="email" placeholder="Ingresar tu email" />
    <input v-model="name" placeholder="Nombre Completo" />

    <button @click="generateLink">Compartir</button>
    {{ errorMessage }}
    <router-link :to="'/register/invite/' + userId">{{ referal }}</router-link>
    {{ iwi }}
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "GenerateLink",
  data() {
    return {
      name: "",
      email: "",
      referal: "",
      errorMessage: "",
      userId: null,
      iwi: process.env.VUE_APP_ENV_VARIABLE
    };
  },
  computed: {
    link() {
      return axios.defaults.baseURL + "user?referalId=";
    },
  },
  methods: {
    async generateLink() {
      this.errorMessage = "";
      try {
        const user = await axios.post("user", {
          name: this.name,
          email: this.email,
        });
        this.userId = user.data.user.id;
        this.referal =
          window.location.origin + "/register/invite/" + user.data.user.id;
      } catch (e) {
        console.log(e)
        this.errorMessage = "Error creando link. ";
        e.response.data.errors.errors.forEach((el) => {
          this.errorMessage += `${el.msg}. `;
        });
      }
    },
  },
};
</script>

