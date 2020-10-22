<h1> LEARNING FRAMEWORK VUEJS </h1>
<h3> GUIDE </h3>
<h1> Esssentials </h1>
<ol>
  <h3><li> Introduction </h3></li>
    <ul>
      <h4><li>Vue.js</li></h4>
       Vue is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be  incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects. On the other hand, Vue is also perfectly capable of powering sophisticated Single-Page Applications when used in combination with A modern tooling  and  <a href="https://github.com/vuejs/awesome-vue#components--libraries"> supporting libraries.</a>
ps: for this project I will use the import method import Vue from "https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.esm.browser.js" and for every topic I will make exercises.
  ps2: In this case using the import, we want to pass the vars to window for manipulation, then when we create the module we must put the window, like window.app = new Vue...  
      
   <h4><li>Composing with Components</li></h4>
      The component system it’s an abstraction that allows us to build large-scale applications composed of small, self-contained, and often reusable components. Remenber that any type of application interface can be abstracted into a tree of components, In Vue, a component is essentially a Vue instance with pre-defined options. For us its interesting modify the component definition to make it accept a <a href="https://vuejs.org/v2/guide/components.html#Passing-Data-to-Child-Components-with-Props"> prop</a>, if we need to pass data from the parent scope into child components. Like in this case <a href="https://github.com/eriudo/LearningVueJS/tree/master/introduction/challenge"> todo-list</a>.
     
  <h3><li> The Vue Instance </h3></li>
      <ul>
      <h4><li>Creating a Vue Instance</li></h4>
        Every Vue application starts by creating a new Vue instance with the Vue function. We often use the variable vm (short for ViewModel) to refer to our Vue instance. 
  When you create a Vue instance, you pass in an options object for reference. A Vue application consists of a root Vue instance created with new Vue, optionally organized into a tree of nested, reusable components, all Vue components are also Vue instances, and so accept the same options object (except for a few root-specific options).
      <h4><li>Data and Methods</li></h4>
        When a Vue instance is created, it adds all the properties found in its data object to Vue’s reactivity system. When the values of those properties change, the view will “react”, updating to match the new values. <a href="https://github.com/eriudo/LearningVueJS/blob/master/vueInstance/index.js"> Example</a> 
  be note that properties in data are only reactive if they existed when the instance was created. That means if you add a new property, like:
  
  
    vm.b = 'hi'

   Then changes to b will not trigger any view updates. If you know you’ll need a property later, but it starts out empty or non-existent, you’ll need to set some initial value. 
  PS: The only exception to this being the use of Object.freeze(), which prevents existing properties from being changed, which also means the reactivity system can’t track changes.
    Vue instances expose a number of useful instance properties and methods. These are prefixed with $.    
  </ul> 
  <h3><li> Template Syntax </h3></li>
  Vue compiles the templates into Virtual DOM render functions. Combined with the reactivity system, Vue is able to intelligently figure out the minimal number of components to re-render and apply the minimal amount of DOM manipulations when the app state changes.
      <ul>
      <h4><li>Interpolations</li></h4>
        The most basic form of data binding is text interpolation using the “Mustache” syntax (double curly braces):
  
          
             <span>Message: {{ msg }}</span>
          
          
   <h4><li>Directives</li></h4>
      <h4><li>Shorthands</li></h4>
     </ul> 
  <h3><li> Computed Propertiers and Watchers </h3></li>
      <ul>
      <h4><li>Computed Properties</li></h4>
      <h4><li>Watchers</li></h4>
     </ul> 
  <h3><li> Class and Style Bindings </h3></li>
      <ul>
      <h4><li>Binding HTML Classes</li></h4>
      <h4><li>Binding Inline Styles</li></h4>
     </ul> 
  <h3><li> Conditional Rendering</h3></li>
      <ul>
      <h4><li>v-if</li></h4>
      <h4><li>v-show</li></h4>
      <h4><li>v-if vs v-show</li></h4>
      <h4><li>v-if with v-show</li></h4>
     </ul> 
  <h3><li> List Rendering </h3></li>
      <ul>
      <h4><li>Mapping an Array to Elements with v-for</li></h4>
      <h4><li>v-for with an Object</li></h4>
      <h4><li>Maintaining State</li></h4>
      <h4><li>Array Change Detection</li></h4>
      <h4><li>Displaying Filtered/Sorted Results</li></h4>
      <h4><li>v-for with a Range</li></h4>
      <h4><li>v-for on a template</li></h4>
      <h4><li>v-for with v-if</li></h4>
      <h4><li>v-for with a Component</li></h4>
     </ul> 
  <h3><li> Event Handling </h3></li>
      <ul>
      <h4><li>Listening to Events</li></h4>
      <h4><li>Method Event Handlers</li></h4>
      <h4><li>Methods in Inline Handlers</li></h4>
      <h4><li>Event Modifiers</li></h4>
      <h4><li>Key Modifiers</li></h4>
      <h4><li>System Modifier Keys</li></h4>
      <h4><li>Why Listeners in HTML?</li></h4>
     </ul> 
  <h3><li> Form Input Bindings </h3></li>
      <ul>
      <h4><li>Basic Usage</li></h4>
      <h4><li>Value Bindings</li></h4>
      <h4><li>Modifiers</li></h4>
      <h4><li>v-model with Components</li></h4>
     </ul> 
  <h3><li> Components Basics </h3></li>
      <ul>
      <h4><li>Base Example</li></h4>
      <h4><li>Reusing Components</li></h4>
      <h4><li>Organizing Components</li></h4>
      <h4><li>Passing Data to Child Components with Props</li></h4>
      <h4><li>A Single Root Element</li></h4>
      <h4><li>Listening to Child Components Events</li></h4>
      <h4><li>Content Distribution with Slots</li></h4>
      <h4><li>Dynamic Components</li></h4>
      <h4><li>DOM Template Parsing Caveats</li></h4>
     </ul> 
</ol>
