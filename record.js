/*coding challenge*/
var collection={
    "5841":{
        "album":"work it",
        "artist":"jack",
        "track":[
            "dancing with a stranger",
            "grenade"
        ]
    },
    "5847":{
        "album":"twilight",
        "artist":"camilo",
        "track":[
            "Easy",
            "havanah"
        ]
    },
    "5478":{
        "album":"la la land",
        "artist":"ed sheeran",
        "track":[
            "perfect",
            "photograph"
        ]
    }
};
var collectioncopy=JSON.parse(JSON.stringify(collection));
function update(id,prop,value){
    if(value === ""){
        delete collection[id][prop];
    }
    else if(prop === "track"){
        collection[id][prop]= collection[id][prop] || [];
        collection[id][prop].push(value);
    }
    else{
        collection[id][prop]=value;
    }
    return collection;
}
console.log(update(5478,"artist","taylor swift"));
