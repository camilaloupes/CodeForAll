const users = require("./users.js");

console.log(users);

const odds = users.filter((user) => user.id % 2 === 1);

console.log(odds);

const objOdds = odds.map((user) => {
    return {
        key: user.id,
        value: user.name,
    };
});

console.log(objOdds);

const indexIds = objOdds.reduce((acc, user) => {
    acc[user.key] = user.value;
    return acc;
}, {});

console.log(indexIds);