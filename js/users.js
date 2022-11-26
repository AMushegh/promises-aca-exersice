const getUsers = () => {
    // your code goes here
    console.log("Loading ...");
    usersRequest().then((result) => console.log(JSON.parse(result)));
    console.log("Users are loaded");
};

getUsers();
