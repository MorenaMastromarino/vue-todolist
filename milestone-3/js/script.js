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
      }, 
    ],

    taskString: '',
  },

  methods: {
    removeTask(index){
      this.tasks.splice(index, 1);
    },

    createNewTask(){
      const newTask = {
        text: this.taskString,
        done: false,
      };
      this.tasks.push(newTask);
      this.taskString ='';
    },
  },

});