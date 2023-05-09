/*
Rifare l'esercizio della to do list.
Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
- text, una stringa che indica il testo del todo;
- done, un booleano (true/false) che indica se il todo è stato fatto oppure no;
MILESTONE-1
Stampare all'interno di una lista HTML un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
MILESTONE-2
Visualizzare a fianco ad ogni item una "x": cliccando su di essa, il todo viene rimosso dalla lista.
MILESTONE-3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
Bonus:
1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)
*/
const app = Vue.createApp({
    data(){
        return{
            newTodo: '',
            inputError: false,
            toDos:[
                {
                    text: 'Fare la spesa',
                    done: true,
                },
                {
                    text: 'Passare lo straccio',
                    done: false,
                },
                {
                    text: 'Portare fuori il cane',
                    done: true,
                },
                {
                    text: 'Preparare la valigia',
                    done: true,
                },
            ],
        }; 
    },
    methods: {
        addTodo(){
            let cleanedTodo = this.newTodo.trim();
            // trim rimuove gli spazi bianchi
            if(cleanedTodo.length >= 5){
                this.toDos.unshift({
                    text: this.newTodo,
                    done: false,
                });
                // unshift aggiunge elemento
                this.newTodo = '';
                this.inputError = false; 
            } else{
                console.log('Troppo corta');
                this.inputError = true;
            }
        },
        deleteItem(index){
            this.toDos.splice(index, 1);
        }
    }
});

app.mount("#app");