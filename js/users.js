const getUsers = async () => {
    console.log("Loading...");
  usersRequest().then(dataHandler).finally(console.log("Users are loaded"));
  };
  function dataHandler(data) {
    console.log(data);f
  }