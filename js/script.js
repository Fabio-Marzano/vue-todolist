const { createApp } = Vue

createApp({
    data() {
        return {
            
            newTask: null,
            toodlist: [//array di oggetti
                {
                    
                    done: true,
                    text: 'Andare a lavoro',
                }, {
                    
                    done: false,
                    text: 'Giocare a calcio',
                }, {
                    
                    done: false,
                    text: "Leggere un libro",
                }, {
                   
                    done: false,
                    text: 'Andare al cinema a vedere Harry Potter',
                }, {
                    
                    done: false,
                    text: 'Andare allo stadio a tifare la Juve',
                }
            ]
        }
    },
    methods: {
        deleteTask(index) {
            this.toodlist.splice(index, 1);
        }, 
        
    }
}).mount('#app')
