# Todo-CLI
A simple Todo CLI with the use of javascript.
# CLI Todo

A simple command-line Todo application built with Node.js and Commander. Stores todos in a local 'todos.json' file.

---

## Requirements

* Node.js (v14+ recommended)
* npm

---

## Installation

1. Clone or download this project into a folder.

2. Open terminal and navigate to the project folder:

bash
cd /path/to/cli-todo


3. Install dependencies:

bash
npm install


4. Make the script executable (macOS / Linux):

bash
chmod +x index.js


5. Link the package globally so you can run the 'todo' command from anywhere:

bash
npm link


Now the 'todo' command should be available globally.



## Usage

### Add a todo

bash
todo add "Learn Node.js"


Adds a new todo and saves it to 'todos.json'.

Example output:


✅ TODO Added: Learn Node.js


### List todos

bash
todo list

Shows all saved todos, with their index and status.

Example output:

📌 Your Todos:
1. [ ] Learn Node.js
2. [✓] Practice TypeScript


### Mark a todo as done

bash
todo done 2

Marks todo number 2 as completed and saves the file.

Example output:

✅ Marked as done: Practice TypeScript


### Clear all todos

bash
todo clear

Deletes all todos (empties 'todos.json').

Example output:
🗑️  All todos deleted successfully!

If you want, I can also create a short `CONTRIBUTING.md` or convert this README into a PDF.
