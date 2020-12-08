console.log("start");

function loginUser(email,password,callback){
    setTimeout(()=>{
        callback({userEmail:email});
    },5000);
}

function getUserVideo(email,callback){
    setTimeout(()=>{
        callback(['video1','video2','video3']);
    },1000);
}

const user=loginUser("mansi@gmail.com",123456,(user)=>{
   console.log(user);
   getUserVideo(user.userEmail,(video)=>{
       console.log(video)
   });
});
console.log(user);
console.log("finish");