const sayHello = (name) => `Hi, my name is ${name}!`;
console.log(sayHello("Matthew"));

const addFunction = (a, b) => `This is the solution: ${a + b}`;
console.log(addFunction(5, 5));
///////////////////////////////////////////////////////////////////
/*
 * Complete the TODO items below
 */
const users = [
    {
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash']
    },
    {
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript']
    },
    {
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php']
    },
    {
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql']
    },
    {
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php']
    },
    {
        name: 'matthew',
        email: 'matthew@codeup.com',
        languages: ['html', 'css', 'javascript', 'jquery', 'ajax']
    }
];

// TODO: fill in your name and email and add some programming languages you know // DONE
// to the languages array
// TODO: replace the `var` keyword with `const`, then try to reassign a variable // DONE
// declared as `const`
const name = 'Europa';
const email = 'europa@codeup.com';
const languages = ['html', 'css', 'javascript', 'jquery', 'bootstrap', 'English', 'Spanish'];

// name = "Daniel";

// TODO: rewrite the object literal using object property shorthand // DONE
users.push({
    name,
    email,
    languages
});

// console.log(users[5].name);
// console.log(users[5].languages);

// TODO: replace `var` with `let` in the following variable declarations // DONE
let emails = [];
let names = [];

// TODO: rewrite the following using arrow functions
// users.forEach(function(user) {
//     return emails.push(user.email);
// });

// rewritten
users.forEach((user) => {
    return emails.push(user.email)
});

// users.forEach(function(user) {
//     return names.push(user.name);
// });

// rewritten
users.forEach((user) => {
    return names.push(user.name)
});

// TODO: replace `var` with `let` in the following declaration // DONE
let developers = [];
users.forEach((user) => {
    // TODO: rewrite the code below to use object destructuring assignment
    //       note that you can also use destructuring assignment in the function
    //       parameter definition
    // const name = user.name;
    // const email = user.email;
    // const languages = user.languages;

    const {name, email, languages} = user;

    // TODO: rewrite the assignment below to use template strings
    // developers.push(name + '\'s email is ' + email + name + ' knows ' + languages.join(', '));

    // rewrite
    developers.push(`${name}'s email is ${email}, ${name} knows ${languages.join(', ')}`);
// console.log(developers);

});

// TODO: Use `let` for the following variable
let list = '<ul>';

// TODO: rewrite the following loop to use a for..of loop

for (let developer of developers) {

    // TODO: rewrite the assignment below to use template strings
    // list += '<li>' + ${developer} + '</li>';

    // rewrite
    document.getElementById('test').innerHTML += `<li> ${developer} </li>`;
}
list += `</ul>`;
