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
Vue instances expose a number of useful instance properties and methods. These are prefixed with \$.

  </ul> 
  <h3><li> Template Syntax </h3></li>
  Vue compiles the templates into Virtual DOM render functions. Combined with the reactivity system, Vue is able to intelligently figure out the minimal number of components to re-render and apply the minimal amount of DOM manipulations when the app state changes.
      <ul>
      <h4><li>Interpolations</li></h4>
        The most basic form of data binding is text interpolation using the “Mustache” syntax (double curly braces):
          
       <span>Message: {{ msg }}</span>
          
   The mustache tag will be replaced with the value of the msg property on the corresponding data object. It will also be updated whenever the data object’s msg property changes.       
   PS: with the use of v-once, the msg cant be altered, if the data change.
    The double mustaches interprets the data as plain text, not HTML. In order to output real HTML, you will need to use the v-html directive: 
    
    <p>Using mustaches: {{ rawHtml }}</p>
     <p>Using v-html directive: <span v-html="rawHtml"></span></p>
     
   Mustaches cannot be used inside HTML attributes. Instead, use a v-bind directive: ```<div v-bind:id="dynamicId"></div>```
    In the case of boolean attributes, where their mere existence implies true, v-bind works a little differently, If the atribute has the value of null, undefined, or false, the disabled attribute will not even be included in the rendered.
    So far we’ve only been binding to simple property keys in our templates. But Vue.js actually supports the full power of JavaScript expressions inside all data bindings.
    One restriction is that each binding can only contain one single expression.

   <h4><li>Directives</li></h4>
    Directives are special attributes with the v- prefix. Directive attribute values are expected to be a single JavaScript expression (with the exception of v-for, which will be discussed later). A directive’s job is to reactively apply side effects to the DOM when the value of its expression changes. Let’s review the example we saw in the introduction:
   <a href="https://github.com/eriudo/LearningVueJS/blob/master/introduction/index.html"> here</a>
    Some directives can take an “argument”, denoted by a colon after the directive name. Starting in version 2.6.0, it is also possible to use a JavaScript expression in a directive argument by wrapping it with square brackets: ```<a v-bind:[attributeName]="url"> ... </a>```
    Here attributeName will be dynamically evaluated as a JavaScript expression, and its evaluated value will be used as the final value for the argument. Modifiers are special postfixes denoted by a dot, which indicate that a directive should be bound in some special way. For example, the .prevent modifier tells the v-on directive to call event.preventDefault().
      <h4><li>Shorthands</li></h4>
      Vue provides special shorthands for two of the most often used directives, v-bind and v-on:
      
       <!-- full syntax -->
          <a v-bind:href="url"> ... </a>
          <!-- short hand --->
          <a :href="url"> ... </a>
       <!-- full syntax -->
          <a v-on:click="doSomething"> ... </a>
          <!-- short hand --->
         <a @click="doSomething"> ... </a>
          
          
   </ul> 
  <h3><li> Computed Propertiers and Watchers </h3></li>
    When you want a complex logic in your templates, you should use Computed Property, to dont make your template bloated and hard to maintain. <a href="https://github.com/eriudo/LearningVueJS/tree/master/computedProperties"> EXAMPLE </a>
      <ul>
      <h4><li>Computed Properties</li></h4>
      You can data-bind to computed properties in templates just like a normal property. Vue is aware that vm.reversedMessage depends on vm.message, so it will update any bindings that depend on vm.reversedMessage when vm.message changes. And the best part is that we’ve created this dependency relationship declaratively: the computed getter function has no side effects, which makes it easier to test and understand.
      Instead of a computed property, we can define the same function as a method. For the end result, the two approaches are indeed exactly the same. However, the difference is that computed properties are cached based on their reactive dependencies. A computed property will only re-evaluate when some of its reactive dependencies have changed.
      <h4><li>Watchers</li></h4>
      Watch option is the most useful when you want to perform asynchronous or expensive operations in response to changing data. <a href="https://github.com/eriudo/LearningVueJS/tree/master/watchers"> EXAMPLE </a>
      In this case, using the watch option allows us to perform an asynchronous operation (accessing an API), limit how often we perform that operation, and set intermediary states until we get a final answer. None of that would be possible with a computed property.
     </ul> 
  <h3><li> Class and Style Bindings </h3></li>
      Vue provides special enhances when v-bind is used with class and style, In addition to strings, the expressions can also evaluate to objects or arrays.
      <ul>
      <h4><li>Binding HTML Classes</li></h4>
          We can pass an object to v-bind:class to dynamically toggle classes, you can have multiple classes toggled by having more fields in the object. In addition, the v-bind:class directive can also co-exist with the plain class attribute. <a href="https://github.com/eriudo/LearningVueJS/tree/master/class-style-bindings"> EXAMPLE </a>
          PS: We can pass an array to v-bind:class to apply a list of classes. If you would like to also toggle a class in the list conditionally, you can do it with a ternary expression.
      <h4><li>Binding Inline Styles</li></h4>
        The object syntax for v-bind:style is pretty straightforward - it looks almost like CSS, except it’s a JavaScript object. You can use either camelCase or kebab-case (use quotes with kebab-case) for the CSS property names: <a href="https://github.com/eriudo/LearningVueJS/tree/master/class-style-bindings"> EXAMPLE </a>
        PS: Again, the object syntax is often used in conjunction with computed properties that return objects.
        PS2: When you use a CSS property that requires vendor prefixes in v-bind:style, for example transform, Vue will automatically detect and add appropriate prefixes to the applied styles.
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
