import Vue from "https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.esm.browser.js";

window.vm = new Vue({
  el: "#example",
  data: {
    message: "Hello",
    isActive: true,
    hasError: false,
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
    classObject: function () {
      return {
        active: this.isActive && !this.error,
        "text-danger": this.error && this.error.type === "fatal",
      };
    },
  },
});
//Binding Inline Styles EXAMPLES
window.vm = new Vue({
  el: "#example2",
  data: {
    styleObject: {
      activeColor: "red",
      fontSize: 30,
    },
  },
});
