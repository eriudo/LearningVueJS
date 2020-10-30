import Vue from "https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.esm.browser.js";

window.vm = new Vue({
  el: "#example",
  data: {
    message: "Hello",
  },
  computed: {
    // a computed getter
    reversedMessage: function () {
      // `this` points to the vm instance
      return this.message.split("").reverse().join("");
    },
    now: function () {
      return Date.now();
    },
  },
});
