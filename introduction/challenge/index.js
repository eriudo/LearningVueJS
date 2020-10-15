import Vue from "https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.esm.browser.js";
Vue.component("todo-item", {
  props: ["todo", "cancel", "done", "erase", "index", "style"],
  template: `<li> 
    {{ todo.text }} 
    <span class="control-buttons">
    <button v-on:click="done(index)" type="button" class="material-icons done-button"> done </button> 
    <button v-on:click="cancel(index)" type="button" class="material-icons cancel-button"> clear </button>
    <button v-on:click="erase(index)" class="material-icons delete-button"> delete </button>
    </span>
     </li>`,
});

window.app = new Vue({
  el: "#form",
  data: {
    message: "",
    lista: [],
    idTracker: 0,
  },
  methods: {
    sended: function () {
      this.lista.push({
        id: this.idTracker++,
        text: this.message,
        style: "background-color: rgba(250, 250, 99, 0.747)",
      });
      this.message = "";
    },
    erase: function (index) {
      this.lista.splice(index, 1);
    },
    done: function (index) {
      this.lista[index].style = "background-color: rgba(193, 243, 193, 0.747);";
    },
    cancel: function (index) {
      this.lista[index].style = "background-color: rgba(243, 117, 117, 0.747)";
    },
  },
});
