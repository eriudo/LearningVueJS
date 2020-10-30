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

//Using watch to compare with computed, ever you want a reactive like this use computed dont watch!
window.vm2 = new Vue({
  el: "#demo",
  data: {
    firstName: "Foo",
    lastName: "Bar",
    fullName: "Foo Bar",
  },
  computed: {
    firstName: function (val) {
      this.fullName = val + " " + this.lastName;
    },
    lastName: function (val) {
      this.fullName = this.firstName + " " + val;
    },
  },
});
//including setters in a computed
window.vm3 = new Vue({
  el: "#demoComp",
  data: {
    firstName: "Foo",
    lastName: "Bar",
  },
  computed: {
    fullName: {
      get: function () {
        return this.firstName + " " + this.lastName;
      },
      set: function (newValue) {
        window.names = newValue.split(" ");
        this.firstName = names[0];
        this.lastName = names[names.length - 1];
      },
    },
  },
});
