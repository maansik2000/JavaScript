var arr=[
    {
        "fname":"damon",
        "lname":"Salvator",
        "number":"123456789",
        "hobbies":["games","drinking","driving"]
    },
    {
        "fname":"Stephan",
        "lname":"Salvator",
        "number":"978412365",
        "hobbies":["reading","writing","walking"]
    },
    {
        "fname":"Elena",
        "lname":"Gilbert",
        "number":"79841793",
        "hobbies":["Music","novel","love damon"]
    },
    {
        "fname":"Caroline",
        "lname":"Forbes",
        "number":"497512687",
        "hobbies":["singing","fashion","clubing"]
    },
];
function profile(name,prop){
    for(var i=0;i<arr.length;i++){
        if(arr[i].fname===name){
            return arr[i][prop] || "no such property";
        }
    }
    return "no such contact";
}
console.log(profile("Elena","number"));