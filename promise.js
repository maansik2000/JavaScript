const promise=new Promise((resolve, reject)=>{
    setTimeout(()=>{
      reject(new Error("user not logged in "));
    },2000);
});
promise.then(user=>{
    console.log(user);
}).catch(err=>{
    console.log(err.message);
});





const yt=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("youtube stuff");
        resolve({videos:[1,2,3,4,5]});
    },2000);
});
const fb=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("facebook stuff");
        resolve({username:"mansi"});
    },2000);
});
Promise.all([yt,fb])
.then(result=>console.log(result))




async function display(){
    const logged = await loginUser("ed",323);
    const videos = await getUserVideo(logged.userEmail);
    console.log(videos);
}
display();