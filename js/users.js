const getUsers = async () => {
    console.log("Loading...");
  
    const response = await usersRequest();
    const data = await JSON.parse(response);
  
    console.log(data);
  
    console.log("users are loaded");
  };