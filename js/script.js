const { createApp, ref } = Vue

createApp({
    data() {
        return {
            

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
        
    }
}).mount('#app')
