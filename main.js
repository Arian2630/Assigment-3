Vue.createApp({
    data() {
        return {
            messageToDuplicate: null,
            amount: null,
            result: "",

        }
    },
    methods: {
        duplicate() {
            this.result = "";
            if (this.amount > 0) {
                for (let x = this.amount; x > 0; x--) {
                    this.result = this.result + this.messageToDuplicate;
                }
            

            }
            else{
                this.result = "Cannot be a negative number" + this.amount;
            }
            

        },
    }
    
}).mount("#app")
        