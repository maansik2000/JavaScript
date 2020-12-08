console.log("start");

function loginUser(email,password){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("we get the data");
            resolve({userEmail:email});
        },3000);
    });
}

function getUserVideo(email){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(['video1','video2','video3']);
        },1000);
    });
}

// const user=loginUser("mansi@gmail.com",123456,(user)=>{
//    console.log(user);
//    getUserVideo(user.userEmail,(video)=>{
//        console.log(video)
//    });
// });
// console.log(user);

// loginUser("mansi@gmail.com",12345)
// .then(user=>{getUserVideo(user.email)
//     console.log(video)})
// console.log("finish");
// const yt=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("youtube stuff");
//         resolve({videos:[1,2,3,4,5]});
//     },2000);
// });
// const fb=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("facebook stuff");
//         resolve({username:"mansi"});
//     },2000);
// });
// Promise.all([yt,fb])
// .then(result=>console.log(result))
async function display(){
    try{
    const logged = await loginUser("ed",323);
    const videos = await getUserVideo(logged.userEmail);
    console.log(videos);
    }
    catch(err){
        console.log("error error!!!!");
    }
}
display();