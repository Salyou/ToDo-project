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
            const deletes = todos.splice(index, 1);
            console.log(`${deletes[0]} was deleted`);
        }else{
            console.log("Unknown Index");
        }

    }
    userInput =prompt("what would you like to do?");
}
console.log("You Quit the application");