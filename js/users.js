const getUsers = async () => {
    console.log("loading");
    const res = await usersRequest();
    const data = await console.log(res); 
    console.log(data);
  };

