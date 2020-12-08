var add=(function(){
    var counter=0;
    return function(){
        counter+=1;
        return counter;
    }
})();
function func(){
    document.getElementById("demo").innerHTML=add();
}
