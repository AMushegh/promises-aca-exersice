const getUsers = () => {
    console.log("loading")
   return usersPromise.then((data) => console.log(data))
};

