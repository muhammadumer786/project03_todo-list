#! /usr/bin/env node

import inquirer from 'inquirer';

let namesList :string[]=["khan","badshah"];
let fruitsList :string[]=["orange"];


async function playTodo (todoList:string[]){

    do{

        let ans=await inquirer.prompt({
            type:"list",
            message:"select an operation",
            name:"select",
            choices:["add","update","view","delete","exit"]
        })
    
        if(ans.select=="add"){
            let addTodo=await inquirer.prompt({
                type:"input",
                message:"enter to add items: ",
                name:"addItems"
            })
            // logic of additems
            todoList.push(addTodo.addItems);
            console.log(todoList);
        }
        else if(ans.select=="update"){
            let updateTodo=await inquirer.prompt({
                type:"list",
                message:"select items for update",
                name:"todo",
                choices:todoList.map(items=>items)
            })
            let addTodo=await inquirer.prompt({
                type:"input",
                message:"type here new item to update:",
                name:"addItems"
            })
            // logic of newUpdatedTodo
            let newTodoUpdated = todoList.filter(val => val !==updateTodo.todo);
            todoList = [...newTodoUpdated,addTodo.addItems];
            console.log(todoList);
        }
        else if(ans.select=="view"){
            console.log("\nthis is the current view of all items.");
            console.log(todoList);
        }
        else if(ans.select=="delete"){
            let deleteTodo=await inquirer.prompt({
                type:"list",
                message:"select items to delete",
                name:"deleteItems",
                choices:todoList.map(items=>items)   
        })
        let newTodos = todoList.filter(val => val !==deleteTodo.deleteItems);
        todoList=[...newTodos];
        console.log(todoList);
        }
        else if(ans.select=="exit"){
            console.log("Thanks for using todo list.")
            break; // this will exit from loop.
        }

    }while(true)

    
}

playTodo(fruitsList);