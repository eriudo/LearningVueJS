import Vue from "https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.esm.browser.js";
window.app = new Vue({
  el: "#app",
  data: {
    message: "Hello Vue",
  },
});
window.app2 = new Vue({
  el: "#app-2",
  data: {
    message: "You loaded this page on " + new Date().toLocaleString(),
  },
});
window.app3 = new Vue({
  el: "#app-3",
  data: {
    seen: true,
  },
});
window.app4 = new Vue({
  el: "#app-4",
  data: {
    todos: [
      { text: "Learn JavaScript" },
      { text: "Learn Vue" },
      { text: "Build something awesome" },
    ],
  },
});
window.app5 = new Vue({
  el: "#app-5",
  data: {
    message: "Hello Vue.js!",
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split("").reverse().join("");
    },
  },
});
window.app6 = new Vue({
  el: "#app-6",
  data: {
    message: "Hello Vue!",
  },
});
