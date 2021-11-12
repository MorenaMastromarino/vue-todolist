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

    error: false,
  },

  methods: {
    removeTask(index){
      this.tasks.splice(index, 1);
    },

    createNewTask(){
      if(this.taskString.length < 3) {
        this.error = true;
        setTimeout(() => this.error = false, 3000);
      }else {
        const newTask = {
          text: this.taskString,
          done: false,
        };

        this.tasks.push(newTask);
        this.taskString ='';
      };      
    },
  },

});