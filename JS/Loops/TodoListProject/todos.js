// let input = prompt('what would you like to do?');
// const todos = ['Collect Chicken Eggs', 'Clean Litter Box'];
// while (input !== 'quit' && input !== 'q') {
//     if (input === 'list') {
//         console.log('*****************')
//         for (let i = 0; i < todos.length; i++) {
//             console.log(`${i}: ${todos[i]}`);
//         }
//         console.log('*****************')
//     } else if (input === 'new') {
//         const newTodo = prompt('Ok, what is the new todo?');
//         todos.push(newTodo);
//         console.log(`${newTodo} added to the list!`)
//     } else if (input === 'delete') {
//         const index = parseInt(prompt('Ok, enter an index to delete:'));
//         if (!Number.isNaN(index)) {
//             const deleted = todos.splice(index, 1);
//             console.log(`Ok, deleted ${deleted[0]}`);
//         } else {
//             console.log('Unknown index')
//         }
//     }
//     input = prompt('what would you like to do?')
// }
// console.log('OK QUIT THE APP!')


let userInput = prompt("What would you like to do?");
const todos = ['Hello', 'Bye'];

while (userInput !== "quit" && userInput !== "q") {
    if (userInput === "list") {
        console.log("***************")
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log("***************")
    } else if (userInput === "new") {
        const objective = prompt("What is Your new Objective?");
        todos.push(objective);
        console.log(`${objective} was added to your todo-list`);
    } else if (userInput === "delete") {
        const index = parseInt(prompt("What would you like to delete? (give me the index)"));
        if (!Number.isNaN(index)) {
            if (!Number > todos.length) {
                const deletes = todos.splice(index, 1);
                console.log(`${deletes[0]} was deleted`);
            } else { console.log("Invalid Index") }
        } else {
            console.log("Unknown Index");
        }

    }
    userInput = prompt("what would you like to do?");
}
console.log("You Quit the application");