const getUsers = async () => {
    console.log("Loading...");
  
    usersRequest().then(dataHandler).finally(console.log("Users are loaded"))
  
    
  
    console.log("users are loaded");
  };
  function dataHandler(data) {
    console.log(data);
  }