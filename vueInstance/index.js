import Vue from "https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.esm.browser.js";

window.data = { a: 1 };

window.vm = new Vue({
  // options
  data: window.data,
});

// Getting the property on the instance
// returns the one from the original data
vm.a == data.a; // => true

// Setting the property on the instance
// also affects the original data
vm.a = 2;
data.a; // => 2

// ... and vice-versa
data.a = 3;
vm.a; // => 3

//practicing Object.freeze()
window.obj = {
  foo: "bar",
};

Object.freeze(obj);

window.app = new Vue({
  el: "#app",
  data: obj,
});
