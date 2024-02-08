const fs = require('fs');
var data = fs.readFileSync('data.json');
var parsed_data = JSON.parse(data);
var input = (process.argv.splice(2));

// add a task
if (input[0] === "add") {
    if (input.length < 3 && input.length > 3) {
        console.log("Invalid input! kindly give 3 inputs only");
    }
    else {
        var task = {
            task: input[1],
            description: input[2],
            date: new Date,
        };
        parsed_data.tasks.push(task);
        fs.writeFileSync("data.json", JSON.stringify(parsed_data));
        console.log("Task added successfully");
    }
}

// view  tasks
else if (input[0] === "view") {
    console.log(parsed_data.tasks);
}

// delete task
else if (input[0] === "delete") {
    let index = parsed_data.tasks.findIndex((obj) => obj.task === input[1]);
    if (index === -1) {
        console.log("Task doesn't exist")
    }
    else {
        parsed_data.tasks.splice(index, 1);
        fs.writeFileSync("data.json", JSON.stringify(parsed_data));
        console.log("Deleted successfully!")
    }
}
else {
    console.log("Invalid Input !");
}
