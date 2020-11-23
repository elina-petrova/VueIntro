//this is a variation on our module theme

(() => {
    let vue_vm = new Vue({
        // el:"#app",
        data: {
            message:"Hello from Vue!",
            anotherMessage: "sup",
            removeAformat:true,
            showBioData: false,

            collection: [
                { name: "Justin", role: "coordinator", nickname: "nitsuJ"},
                { name: "Joe", role: "prof", nickname: "super chill"},
                { name: "Jarrod", role: "coordinator", nickname: "Teddy Bear"}
            ]
        },
        

        mounted: function(){
            console.log("Vue is mounted!");

            this.collection.push({name: "Jarrod", role: "supermodel prof", nickname: "Zoolander"});
        },

        updated: function(){
            console.log("Vue just updated the DOM");
        },

        methods: {
            logClicked(){
                console.log("clicked on a profname");
            },
            clickHeader(){
                console.log("clicked on the header");
            },
            removeProf(target){
                console.log("removeProf", target);
                
                this.showBioData = this.showBioData ? false :true
            }
        }
    }).$mount("#app"); //also connects Vue to your wrapper in HTML 

})();