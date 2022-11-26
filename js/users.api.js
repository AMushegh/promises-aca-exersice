let usersDataJSON = `[
    {
        "id": 1,
        "firstName": "Terry",
        "lastName": "Medhurst",
        "maidenName": "Smitham",
        "age": 50,
        "gender": "male",
        "email": "atuny0@sohu.com",
        "phone": "+63 791 675 8914",
        "username": "atuny0",
        "password": "9uQFF1Lh",
        "birthDate": "2000-12-25"
    },
    {
        "id": 2,
        "firstName": "Sheldon",
        "lastName": "Quigley",
        "maidenName": "Cole",
        "age": 28,
        "gender": "male",
        "email": "hbingley1@plala.or.jp",
        "phone": "+7 813 117 7139",
        "username": "hbingley1",
        "password": "CQutx25i8r",
        "birthDate": "2003-08-02"
    },
    {
        "id": 3,
        "firstName": "Terrill",
        "lastName": "Hills",
        "maidenName": "Hoeger",
        "age": 38,
        "gender": "male",
        "email": "rshawe2@51.la",
        "phone": "+63 739 292 7942",
        "username": "rshawe2",
        "password": "OWsTbMUgFc",
        "birthDate": "1992-12-30"
    },
    {
        "id": 4,
        "firstName": "Miles",
        "lastName": "Cummerata",
        "maidenName": "Maggio",
        "age": 49,
        "gender": "male",
        "email": "yraigatt3@nature.com",
        "phone": "+86 461 145 4186",
        "username": "yraigatt3",
        "password": "sRQxjPfdS",
        "birthDate": "1969-01-16"
    },
    {
        "id": 5,
        "firstName": "Mavis",
        "lastName": "Schultz",
        "maidenName": "Yundt",
        "age": 38,
        "gender": "male",
        "email": "kmeus4@upenn.edu",
        "phone": "+372 285 771 1911",
        "username": "kmeus4",
        "password": "aUTdmmmbH",
        "birthDate": "1968-11-03"
    },
    {
        "id": 6,
        "firstName": "Alison",
        "lastName": "Reichert",
        "maidenName": "Franecki",
        "age": 21,
        "gender": "female",
        "email": "jtreleven5@nhs.uk",
        "phone": "+351 527 735 3642",
        "username": "jtreleven5",
        "password": "zY1nE46Zm",
        "birthDate": "1969-07-21"
    },
    {
        "id": 7,
        "firstName": "Oleta",
        "lastName": "Abbott",
        "maidenName": "Wyman",
        "age": 31,
        "gender": "female",
        "email": "dpettegre6@columbia.edu",
        "phone": "+62 640 802 7111",
        "username": "dpettegre6",
        "password": "YVmhktgYVS",
        "birthDate": "1982-02-21"
    },
    {
        "id": 8,
        "firstName": "Ewell",
        "lastName": "Mueller",
        "maidenName": "Durgan",
        "age": 29,
        "gender": "male",
        "email": "ggude7@chron.com",
        "phone": "+86 946 297 2275",
        "username": "ggude7",
        "password": "MWwlaeWcOoF6",
        "birthDate": "1964-08-24"
    },
    {
        "id": 9,
        "firstName": "Demetrius",
        "lastName": "Corkery",
        "maidenName": "Gleason",
        "age": 22,
        "gender": "male",
        "email": "nloiterton8@aol.com",
        "phone": "+86 356 590 9727",
        "username": "nloiterton8",
        "password": "HTQxxXV9Bq4",
        "birthDate": "1971-03-11"
    },
    {
        "id": 10,
        "firstName": "Eleanora",
        "lastName": "Price",
        "maidenName": "Cummings",
        "age": 37,
        "gender": "female",
        "email": "umcgourty9@jalbum.net",
        "phone": "+60 184 408 0824",
        "username": "umcgourty9",
        "password": "i0xzpX",
        "birthDate": "1958-08-11"
    }
]`;

const usersPromise = new Promise((resolve, reject) => {
    // your code goes here
    setTimeout(() => resolve(usersDataJSON), Math.floor((Math.random() * 10 + 1) * 1000));
});

function usersRequest() {
    return usersPromise;
};
// export function usersRequest(){
//      return usersPromise;
    
// }
