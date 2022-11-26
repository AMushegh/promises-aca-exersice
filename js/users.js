const getUsers2 = () => {
    console.log("Loading...");
    async function foo() {
        const result = await usersRequest();
        console.log(result);
    }
 };
 
 getUsers2();