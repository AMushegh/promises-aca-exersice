const getUsers = (users) => {
   console.log("Loading...");
   const userList = JSON.parse(users);
   console.log(userlist);
   console.log('Users are loaded');
};

async function foo() {
    let result = await usersPromise();
    return result;
}

getUsers(foo());