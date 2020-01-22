//=== My Version ===//
// function wait(x) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (Math.random() > 0.1) {
//                 resolve('Here is your data: ...');
//             } else {
//                 reject('Network Connection Error!');
//             }
//         }, x);
//     });
// }

//=== Different Version ===//
const wait = (num) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, num);
    })
};

// wait(1000).then(() => console.log('You\'ll see this after 1 second'));
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));
// wait(5000).then(() => console.log('You\'ll see this after 5 seconds'));
// wait(10000).then(() => console.log('You\'ll see this after 10 seconds'));

//==== extra wait function ====//
// const wait2 = () => {
//   return fetch("https://icanhazdadjoke.com/");
// };
// wait2().then((data) => {
//     console.log(data);
// });

/////////////////////////////////////////////////////////////////////////////////////////////

function lastCommit(user) {
    return fetch(`https://api.github.com/users/${user}/events`, {headers: {'Authorization': "token" + gitKeyPAT}})
        .then((data) => {
            return data.json()
        }).then((jsonData) => {
            console.log(jsonData);
            return "Date is: " + jsonData[0].created_at + " user name is: " + jsonData[0].actor.display_login
        })
}

lastCommit("MatthewHettler").then((data) => console.log(data));

// const lastCommit = (username) => {
//     // return a promise that resolves to
//     // usernames last commit time
//     let url = `https://api.github.com/users/${username}/events/public`;
//     fetch(url, {headers: {'Authorization': `token ${gitKeyPAT}`}})
//         .then(data => data.json())
//         // .then(data => console.log(data))
//         .then(data => {
//             data.find(event => event.type === "PushEvent");
//         })
//         .then(firstPushEvent => {
//             return firstPushEvent.created_at;
//         })
// };
// lastCommit("MatthewHettler");