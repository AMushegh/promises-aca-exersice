const getUsers = () => {
  console.log("Loading....")
  usersRequest().then(a => { console.log(a) })
};