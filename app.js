const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?"
    },

    {
      type: "input",
      name: "github_username",
      message: "What is your Github Username?"
    },
    {
      type: "input",
      name: "project_title",
      message: "What is your project title?"
    },
   
    {
      type: "input",
      name: "project_description",
      message: "What is your project description?"
    },
    {
      type: "input",
      name: "project_installation_dependancies",
      message: "What command is used to install your project? project dependancies?"
    },
    {
      type: "input",
      name: "project_test",
      message: "What command is used to run your project test?"
    },
     {
      type: "input",
      name: "project_unknowns",
      message: "What does the user need to know?"
    },
    {
      type: "input",
      name: "project_contributions",
      message: "How can a user contribute?"
    },
  ]);
}


function generateHTML(answers) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Hi! My name is ${answers.name}</h1>
    <p class="lead">I am from ${answers.location}.</p>
    <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My GitHub username is ${answers.github}</li>
      <li class="list-group-item">LinkedIn: ${answers.linkedin}</li>
    </ul>
  </div>
</div>
</body>
</html>`;
}

async function init() {
  console.log("hi")
  try {
    const answers = await promptUser();
    const html = generateHTML(answers);

    await writeFileAsync("index.html", html);

    console.log("Successfully wrote to index.html");
  } catch(err) {
    console.log(err);
  }
}

init();
