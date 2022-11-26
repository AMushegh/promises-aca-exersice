const getUsers2 = async () => {
    console.log("Loading...");
    const result = await usersRequest();
    setTimeout(() => {
        console.log(result);
        console.log("Users loaded");
    }, (Math.floor(Math.random() * 11)) * 1000)
 };
 
 getUsers2();