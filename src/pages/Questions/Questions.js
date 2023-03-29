export const questions = {
    "Html": [
       {
          id:"01",
          Question:"What is the replacement for cookies in HTML5?",
          answerOptions: [
            { answerText :"Web Beacons", isCorrect: false},
            { answerText :"Java Script", isCorrect: false},
            { answerText :"Local Storage", isCorrect: true},
            { answerText :"All the above", isCorrect: false}
          ]
       },
       {
          id:"02",
          Question:"Choose the correct HTML element for the largest heading?",
          answerOptions: [
            { answerText :"<h1>", isCorrect: true},
            { answerText :"<heading>", isCorrect: false},
            { answerText :"<head>", isCorrect: false},
            { answerText :"<h6>", isCorrect: false}
         ]
       },
       {
          id:"03",
          Question:"What is the correct HTML element for inserting a line break?",
          answerOptions: [
            { answerText :"<hr>", isCorrect: false},
            { answerText :"<br>", isCorrect: true},
            { answerText :"<lb>", isCorrect: false},
            { answerText :"<break>", isCorrect: false}
         ]
       },
       {
          id:"04",
          Question:"What is the correct HTML for adding a background color?",
          answerOptions: [
            { answerText :"<body style='background-color:yellow;'>", isCorrect: true},
            { answerText :"<background>yellow</background>", isCorrect: false},
            { answerText :"<body bg='yellow'>", isCorrect: false},
            { answerText :"<body color='yellow'>", isCorrect: false}
         ]
       },
       {
          id:"05",
          Question:"Choose the correct HTML element to define important text?",
          answerOptions: [
            { answerText :"<strong>", isCorrect: false},
            { answerText :"<b>", isCorrect: false},
            { answerText :"<i>", isCorrect: false},
            { answerText :"<important>", isCorrect: true}
         ]
       },
       {
          id:"06",
          Question:"Choose the correct HTML element to define emphasized text?",
          answerOptions: [
            { answerText :"<i>", isCorrect: false},
            { answerText :"<italic>", isCorrect: false},
            { answerText :"<em>", isCorrect: true},
            { answerText :"Above all", isCorrect: false}
         ]
       },
       {
          id:"07",
          Question:"How can you open a link in a new tab/browser window?",
          answerOptions: [
            { answerText :"<a href='url' target='new'>", isCorrect: false},
            { answerText :"<a href='url' new>", isCorrect: false},
            { answerText :"<a href='url' target='_blank'>", isCorrect: true},
            { answerText :"<a href='url' target='blank'>", isCorrect: false}
         ]
       },
       {
          id:"08",
          Question:"Which of these elements are all <table> elements?",
          answerOptions: [
            { answerText :"<table><tr><tt>", isCorrect: false},
            { answerText :"<table><head><tfoot>", isCorrect: false},
            { answerText :"<thead><body><tr>", isCorrect: false},
            { answerText :"<table><tr><td>", isCorrect: true}
         ]
       },
       {
          id:"09",
          Question:"IDE stands for _____?",
          answerOptions: [
            { answerText :"Internet Development Environment", isCorrect: false},
            { answerText :"<table><head><tfoot>", isCorrect: true},
            { answerText :"<thead><body><tr>", isCorrect: false},
            { answerText :"<table><tr><td>", isCorrect: false}
         ]
       },
       {
          id:"10",
          Question:"What is the correct HTML for making a text input field?",
          answerOptions: [
            { answerText :"<textfield>", isCorrect: false},
            { answerText :"<input type='text'>", isCorrect: true},
            { answerText :"<textinput type='text'>", isCorrect: false},
            { answerText :"<input type='textfield'>", isCorrect: false}
         ]
       }
    ],
    "Css": [
        {
           id:"01",
           Question:"What does CSS stand for?",
           answerOptions: [
            { answerText :"Creating Style Sheets", isCorrect: false},
            { answerText :"Computer Style Sheets", isCorrect: false},
            { answerText :"Cascading Style Sheets", isCorrect: true},
            { answerText :"Colorful Style Sheets", isCorrect: false}
          ]
        },
        {
           id:"02",
           Question:"What is the correct HTML for referring to an external style sheet?",
           answerOptions: [
            { answerText :"<stylesheet>style.css</stylesheet>", isCorrect: false},
            { answerText :"<link rel='stylesheet' type='text/css' href='style.css'>", isCorrect: true},
            { answerText :"<style src='style.css'>", isCorrect: false},
            { answerText :"<a href='style.css'></a>", isCorrect: false}
          ]
        },
        {
           id:"03",
           Question:"Where is the correct place to refer to an external style sheet?",
           answerOptions: [
            { answerText :"<head> section", isCorrect: true},
            { answerText :"<body> section", isCorrect: false},
            { answerText :"<section> section", isCorrect: false},
            { answerText :"<footer> section", isCorrect: false}
          ]
        },
        {
           id:"04",
           Question:"How do you insert a comment in a CSS file?",
           answerOptions: [
            { answerText :"// this is a css comment", isCorrect: false},
            { answerText :"<!-- this is a css comment -->", isCorrect: false},
            { answerText :"// this is a css comment //", isCorrect: false},
            { answerText :"/* this is a css comment */", isCorrect: true}
          ]
        },
        {
           id:"05",
           Question:"Which HTML tag is used to define an internal style sheet?",
           answerOptions: [
            { answerText :"<script>", isCorrect: false},
            { answerText :"<css>", isCorrect: false},
            { answerText :"<style>", isCorrect: true},
            { answerText :"<link>", isCorrect: false}
          ]
        },
        {
           id:"06",
           Question:"Which is the correct CSS syntax?",
           answerOptions: [
            { answerText :"body:color=blue;", isCorrect: false},
            { answerText :"body {color: blue;}", isCorrect: true},
            { answerText :"{body:color=blue;}", isCorrect: false},
            { answerText :"{body;color:blue;}", isCorrect: false}
          ]
        },
        {
           id:"07",
           Question:"Which css selector will we use to define an unique element?",
           answerOptions: [
            { answerText :"Id", isCorrect: true},
            { answerText :"Text", isCorrect: false},
            { answerText :"Class", isCorrect: false},
            { answerText :"Name", isCorrect: false}
          ]
        },
        {
           id:"08",
           Question:"If we want to show an Arrow as cursor, then which value we will use ?",
           answerOptions: [
            { answerText :"pointer", isCorrect: false},
            { answerText :"arrow", isCorrect: false},
            { answerText :"default", isCorrect: true},
            { answerText :"arr", isCorrect: false}
          ]
        },
        {
           id:"09",
           Question:"Which CSS property is used to control the text size of an element ?",
           answerOptions: [
            { answerText :"font-style", isCorrect: false},
            { answerText :"font-size", isCorrect: true},
            { answerText :"text-style", isCorrect: false},
            { answerText :"text-size", isCorrect: false}
          ]
        },
        {
           id:"10",
           Question:"How do you remove the underline from hyperlink by using CSS?",
           answerOptions: [
            { answerText :"a {text: no-underline;}", isCorrect: false},
            { answerText :"a {text-decoration:none;}", isCorrect: true},
            { answerText :"a {text-style: no-underline;}", isCorrect: false},
            { answerText :"a {text-decoration: no-underline;}", isCorrect: false}
          ]
        }
    ],
    "JavaScript": [
        {
           id:"01",
           Question:"To insert a JavaScript into an HTML page, which tag is used?",
           answerOptions: [
            { answerText :"<script='javascript'>", isCorrect: false},
            { answerText :"<javascript>", isCorrect: false},
            { answerText :"<script>", isCorrect: true},
            { answerText :"<js>", isCorrect: false}
          ]
        },
        {
           id:"02",
           Question:"Where is the correct place to insert a JavaScript?",
           answerOptions: [
            { answerText :"The <head> section", isCorrect: false},
            { answerText :"The <body> section", isCorrect: false},
            { answerText :"The <footer> section", isCorrect: false},
            { answerText :"All of the above", isCorrect: true}
          ]
        },
        {
           id:"03",
           Question:"What is the correct syntax for referring to an external script called 'xxx.js'?",
           answerOptions: [
            { answerText :"<script src='xxx.js'></script>", isCorrect: true},
            { answerText :"<script href='xxx.js'></script>", isCorrect: false},
            { answerText :"<a src='xxx.js'></a>", isCorrect: false},
            { answerText :"<a href='xxx.js'></a>", isCorrect: false}
          ]
        },
        {
           id:"04",
           Question:"How can you add a comment in a JavaScript?",
           answerOptions: [
            { answerText :"<!--This is a comment-->", isCorrect: false},
            { answerText :"'This is a comment'", isCorrect: false},
            { answerText :'// This is a comment', isCorrect: true},
            { answerText :"/ This is a comment", isCorrect: false}
          ]
        },
        {
           id:"05",
           Question:"How do you write ';Hello World' in ana alert box?",
           answerOptions: [
            { answerText :"alert('Hello World');", isCorrect: true},
            { answerText :"msg('Hello World');", isCorrect: false},
            { answerText :"msgBox('Hello World');", isCorrect: false},
            { answerText :"alertBox('Hello World');", isCorrect: false}
          ]
        },
        {
           id:"06",
           Question:"What is the alternate name for Java script?",
           answerOptions: [
            { answerText :"LimeScript", isCorrect: false},
            { answerText :"ECMScript", isCorrect: false},
            { answerText :"ECMAScript", isCorrect: true},
            { answerText :"Both a and d", isCorrect: false}
          ]
        },
        {
           id:"07",
           Question:"Which is not a primitive data type in JavaScript?",
           answerOptions: [
            { answerText :"Boolean", isCorrect: false},
            { answerText :"Number", isCorrect: false},
            { answerText :"String", isCorrect: false},
            { answerText :"Character", isCorrect: true}
          ]
        },
        {
           id:"08",
           Question:"Output of the following code: var myArr = [1,2,3,4,5]; myArr.shift();",
           answerOptions: [
            { answerText :"[1,2,3,4]", isCorrect: false},
            { answerText :"[2,3,4,5]", isCorrect: true},
            { answerText :"[1,2,3,4,5]", isCorrect: false},
            { answerText :"None of the above", isCorrect: false}
          ]
        },
        {
           id:"09",
           Question:"How do you declare a JavaScript variable?",
           answerOptions: [
            { answerText :"variable carName;", isCorrect: false},
            { answerText :"var carName;", isCorrect: true},
            { answerText :"v carName;", isCorrect: false},
            { answerText :"All of the above", isCorrect: false}
          ]
        },
        {
           id:"10",
           Question:"How do you create a function in JavaScript?",
           answerOptions: [
            { answerText :"function:myFunction()", isCorrect: false},
            { answerText :"function = myFunction()", isCorrect: false},
            { answerText :"function myFunction()", isCorrect: true},
            { answerText :"function-myFunction()", isCorrect: false}
          ]
        }
    ],
    "ReactJS": [
        {
           id:"01",
           Question:"Which of the following command is used to create react-js-app ?",
           answerOptions: [
            { answerText :"npx create-react-app appname", isCorrect: true},
            { answerText :"npm install create-react-app", isCorrect: false},
            { answerText :"npx install create-react-app", isCorrect: false},
            { answerText :"install - l create-react-app", isCorrect: false}
          ]
        },
        {
           id:"02",
           Question:"Which of the following is must for the API in React.js ?",
           answerOptions: [
            { answerText :"SetinitialComponent", isCorrect: false},
            { answerText :"renderComponent", isCorrect: true},
            { answerText :"render", isCorrect: false},
            { answerText :"All of the above", isCorrect: false}
          ]
        },
        {
           id:"03",
           Question:"Everything in React is a _____________?",
           answerOptions: [
            { answerText :"Module", isCorrect: false},
            { answerText :"Component", isCorrect: true},
            { answerText :"Package", isCorrect: false},
            { answerText :"Class", isCorrect: false}
          ]
        },
        {
           id:"04",
           Question:"What is Babel?",
           answerOptions: [
            { answerText :"A Transpiler", isCorrect: false},
            { answerText :"An Interpreter", isCorrect: false},
            { answerText :"A Compiler", isCorrect: true},
            { answerText :"Both Compiler and Transpilar", isCorrect: false}
          ]
        },
        {
           id:"05",
           Question:"What is ReactJS?",
           answerOptions: [
            { answerText :"Server-side Framework", isCorrect: false},
            { answerText :"User-interface framework", isCorrect: true},
            { answerText :"A Library for building interaction interfaces", isCorrect: false},
            { answerText :"None of the Above", isCorrect: false}
          ]
        },
        {
           id:"06",
           Question:"What port is the default where the webpack-dev-server will run?",
           answerOptions: [
            { answerText :"3000", isCorrect: true},
            { answerText :"3306", isCorrect: false},
            { answerText :"8080", isCorrect: false},
            { answerText :"None of the above", isCorrect: false}
           ]
        },
        {
           id:"07",
           Question:"Who Develop React.js?",
           answerOptions: [
            { answerText :"Google", isCorrect: false},
            { answerText :"Apple", isCorrect: false},
            { answerText :"Facebook", isCorrect: true},
            { answerText :"Twitter", isCorrect: false}
          ]
        },
        {
           id:"08",
           Question:"How do you write an inline style specifying the font-size and color in JSX?",
           answerOptions: [
            { answerText :"style={{font-size:12,color:'red'}}", isCorrect: false},
            { answerText :"style={{fontSize:'12px',color:'red'}}", isCorrect: true},
            { answerText :"style={fontSize:'12px',color:'red'}", isCorrect: false},
            { answerText :"style={{font-size:12px,color:'red'}}", isCorrect: false}
          ]
        },
        {
           id:"09",
           Question:"How do you import just the Component from the React library?",
           answerOptions: [
            { answerText :"import React.Component from 'react'", isCorrect: false},
            { answerText :"import [ Component ] from 'react'", isCorrect: false},
            { answerText :"import Component from 'react'", isCorrect: false},
            { answerText :"import { Component } from 'react'", isCorrect: true}
          ]
        },
        {
           id:"10",
           Question:"Which of the following is must for the API in React.js ?",
           answerOptions: [
            { answerText :"SetinitialComponent", isCorrect: false},
            { answerText :"renderComponent", isCorrect: true},
            { answerText :"render", isCorrect: false},
            { answerText :"All of the above", isCorrect: false}
          ]
        }
    ],
    "Mssql": [
        {
           id:"01",
           Question:"What does SQL stand for?",
           answerOptions: [
            { answerText :"Strong Question Language", isCorrect: false},
            { answerText :"Structured Query Language", isCorrect: true},
            { answerText :"Structured Question Language", isCorrect: false},
            { answerText :"Strong Query Language", isCorrect: false}
          ]
        },
        {
           id:"02",
           Question:"Which SQL statement is used to update data in a database?",
           answerOptions: [
            { answerText :"SAVE AS", isCorrect: false},
            { answerText :"SAVE", isCorrect: false},
            { answerText :"MODIFY", isCorrect: false},
            { answerText :"UPDATE", isCorrect: true}
          ]
        },
        {
           id:"03",
           Question:"Which SQL statement is used to delete data from a database?",
           answerOptions: [
            { answerText :"COLLAPSE", isCorrect: false},
            { answerText :"REMOVE", isCorrect: false},
            { answerText :"DELETE", isCorrect: true},
            { answerText :"UNLINK", isCorrect: false}
          ]
        },
        {
           id:"04",
           Question:"Which SQL statement is used to insert new data in a database?",
           answerOptions: [
            { answerText :"ADD RECORD", isCorrect: false},
            { answerText :"INSERT NEW", isCorrect: true},
            { answerText :"ADD NEW", isCorrect: false},
            { answerText :"INSERT NEW", isCorrect: false}
          ]
        },
        {
           id:"05",
           Question:"How do you select all the columns from a table named 'Persons'?",
           answerOptions: [
            { answerText :"SELECT *.Persons", isCorrect: false},
            { answerText :"SELECT Persons", isCorrect: false},
            { answerText :"SELECT * FROM Persons", isCorrect: true},
            { answerText :"SELECT [all]  FROM Persons", isCorrect: false}
          ]
        },
        {
           id:"06",
           Question:"How do you select a column 'FirstName' from a table 'Persons'?",
           answerOptions: [
            { answerText :"EXTRACT FirstName FROM Persons", isCorrect: false},
            { answerText :"SELECT FirstName FROM Persons", isCorrect: true},
            { answerText :"SELECT Persons.FirstName", isCorrect: false},
            { answerText :"EXTRACT Persons.FirstName", isCorrect: false}
          ]
        },
        {
           id:"07",
           Question:"How can you insert a new record into the 'Persons' table?",
           answerOptions: [
            { answerText :"INSERT ('Jimmy', 'Jackson') INTO Persons", isCorrect: false},
            { answerText :"INSERT INTO Persons VALUES ('Jimmy', 'Jackson')", isCorrect: true},
            { answerText :"INSERT VALUES ('Jimmy', 'Jackson') INTO Persons", isCorrect: false},
            { answerText :"INSERT INTO VALUES('Jimmy', 'Jachson') INTO Persons", isCorrect: false}
          ]
        },
        {
           id:"08",
           Question:"Which SQL statement is used to update data in a database?",
           answerOptions: [
            { answerText :"SAVE AS", isCorrect: false},
            { answerText :"SAVE", isCorrect: false},
            { answerText :"MODIFY", isCorrect: false},
            { answerText :"UPDATE", isCorrect: true}
          ]
        },
        {
           id:"09",
           Question:"Which SQL statement is used to delete data from a database?",
           answerOptions: [
            { answerText :"COLLAPSE", isCorrect: false},
            { answerText :"REMOVE", isCorrect: false},
            { answerText :"DELETE", isCorrect: true},
            { answerText :"UNLINK", isCorrect: false}
          ]
        },
        {
           id:"10",
           Question:"Which SQL statement is used to insert new data in a database?",
           answerOptions: [
            { answerText :"ADD RECORD", isCorrect: false},
            { answerText :"INSERT NEW", isCorrect: true},
            { answerText :"ADD NEW", isCorrect: false},
            { answerText :"INSERT NEW", isCorrect: false}
          ]
        }
    ]
 }