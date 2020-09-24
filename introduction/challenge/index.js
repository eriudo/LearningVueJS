import Vue from "https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.esm.browser.js";
window.app = new Vue({
  el: "#form",
  data: {
    message: "",
    lista: [],
  },
  methods: {
    enviado: function () {
      this.lista.push(this.message);
      this.message = "";
    },
    apagar: function (index) {
      this.lista.splice(index, 1);
    },
  },
});
