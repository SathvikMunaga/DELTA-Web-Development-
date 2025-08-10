let todo = []

let req = prompt("Please enter your request!")

while (true) {
    if (req == "quit"){ 
        console.log("Quitting App");
    break;

}
if (req == "list") {
    for(let i = 0; i<todo.length; i++) 
        console.log(i, todo[i]);
    }
    else if (req == "add") {
        let task = prompt("Please enter your task");
        todo.push(task);
        console.log("Task Added");
    }else if(req = "delete"){
        let idx = prompt("Please enter your index");
        todo.splice(idx, 1);
    }else{
        console.log("wrong Request")
    }
    req = prompt("Please enter your request!")
}