const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// TODO: Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.

// let userLanguages = users.filter(user => user.languages.length >= 3);
// console.log(userLanguages);

// TODO: Use .map to create an array of strings where each element is a user's email address

let userEmail = users.map(user => user.email);

console.log(userEmail);

// TODO: Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.

const totalYears = users.reduce((total, person) =>{
    return total + person.yearsOfExperience;
}, 0);
console.log(totalYears);
console.log(totalYears / users.length);

// TODO: Use .reduce to get the longest email from the list of users.

let longestWord = userEmail.reduce((longest, currentWord) => {
    if(currentWord.length > longest.length)
        return currentWord;
    else
        return longest;
}, "");

console.log(longestWord);

// TODO: Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.

let userNames = users.reduce(function(prevVal,currVal,idx){
    return idx == 0 ? currVal.name : prevVal + ', ' + currVal.name;
}, '');
console.log(userNames);

// another way to do it. '/.
// let names = users.reduce(
//     (stack, user) => {return stack += ` ${user.name}`; }, ''
// );
console.log(names);

// TODO: BONUS: Use .reduce to get the unique list of languages from the list of users.
let userLanguages = users.filter(user => user.languages);
console.log(userLanguages);



