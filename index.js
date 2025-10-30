#!/usr/bin/env node
import { Command } from "commander";
import fs from "fs";

const program = new Command();
const TODO_FILE = "todos.json";
//Load Todo
function loadTodos(){
    if(!fs.existsSync(TODO_FILE)) return[];
    return JSON.parse(fs.readFileSync(TODO_FILE));
}
//Save Todo
function saveTodos(todos){
    fs.writeFileSync(TODO_FILE, JSON.stringify(todos, null, 2));
}
//Command: Add Todos
program
.command("add <task>")
.description("ADD A NEW TODO.")
.action((task) =>{
    const todos = loadTodos();
    todos.push({task,done: false});
    saveTodos(todos);
    console.log("✅ TODO Added:", task);
})
//Command: List Todos
program
.command("list")
.description("List all todos")
.action(()=>{
    const todos = loadTodos();
    if (todos.length === 0){
        console.log("No todos found.");
        return;
    }
    console.log("📌 Your Todos:");
    todos.forEach((t,i) =>{
        console.log(`${i+1}. [${t.done ? "✓": " "}] ${t.task}`);
    });
});
//Command: Mark as done
program
.command("done <index>")
.description("Mark a todo as completed")
.action((index) =>{
    const todos = loadTodos();
    const i = index - 1;
    if(!todos[i]){
        console.log("❌ Todo not found");
        return;
    }
    todos[i].done = true;
    saveTodos(todos);
    console.log("✅ Marked as done:", todos[i].task);
});
//Command: Delete all todos
program
  .command("clear")
  .description("Delete all todos")
  .action(() => {
    fs.writeFileSync(TODO_FILE, JSON.stringify([], null, 2));
    console.log("🗑️  All todos deleted successfully!");
  });

program.parse();