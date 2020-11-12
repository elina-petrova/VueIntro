//this is a variation on our module theme

(() => {
    let vue_vm = new Vue({
        el:"#app",
        data: {
            message:"Hello from Vue!",
            anotherMessage: "sup",

            collection: [
                { name: "Justin", role: "coordinator", nickname: "nitsuJ"},
                { name: "Joe", role: "prof", nickname: "super chill"},
                { name: "Jarrod", role: "coordinator", nickname: "Teddy Bear"}
            ]
        },

        methods: {
            logClicked(){
                console.log("clicked on a profname");
            },
            clickHeader(){
                console.log("clicked on the header");
            }
        }
    }).$mount("#app"); //also connects Vue to your wrapper in HTML 

})();