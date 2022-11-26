// const getUsers = () => {
//     // your code goes here
//     console.log("Loading ...");
//     usersRequest().then((result) => console.log(JSON.parse(result)));
//     console.log("Users are loaded");
// };


async function getUsers(){
    // your code goes here
    console.log("Loading ...");
     
    let promise = await usersRequest();
    console.log(JSON.parse(promise));
    console.log("Users are loaded");
};
