const app = new Vue({
  el: '#app',

  data: {
    tasks: [
      {
        text: 'Fare la spesa',
        done: false,
      },
      {
        text: 'Pagare bollette',
        done: false,
      },
      {
        text: 'Ripetere html/css',
        done: true,
      },
      {
        text: 'Fare esercizio',
        done: false,
      }  
    ],
  },

  methods: {
    removeTask(index){
      this.tasks.splice(index, 1);
    },
  },

});