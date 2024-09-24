// script.js

const quizData = {
    simple: [
        {
            question: "What is the time complexity of binary search?",
            a: "O(n)",
            b: "O(log n)",
            c: "O(n^2)",
            d: "O(n log n)",
            correct: "b"
        },
        {
            question: "Which HTML tag is used to define an unordered list?",
            a: "&lt;ol&gt;",
            b: "&lt;ul&gt;",
            c: "&lt;li&gt;",
            d: "&lt;u&gt;",
            correct: "b"
        },
        {
            question: "What is the correct syntax for referring to an external script called 'script.js'?",
            a: "&lt;script src='script.js'&gt;",
            b: "&lt;script href='script.js'&gt;",
            c: "&lt;script link='script.js'&gt;",
            d: "&lt;script file='script.js'&gt;",
            correct: "a"
        },
        {
            question: "What does HTTP stand for?",
            a: "Hypertext Transfer Protocol",
            b: "Hypertext Transfer Product",
            c: "Hyper Textual Transfer Path",
            d: "High Transfer Protocol",
            correct: "a"
        },
        {
            question: "Which JavaScript method is used to convert an object to a string in JSON format?",
            a: "JSON.parse()",
            b: "JSON.stringify()",
            c: "JSON.objectify()",
            d: "JSON.string()",
            correct: "b"
        },
        {
            question: "Which of the following is a valid CSS selector?",
            a: "#id",
            b: ".class",
            c: "element",
            d: "All of the above",
            correct: "d"
        },
        {
            question: "What does CSS stand for?",
            a: "Cascading Style Sheets",
            b: "Creative Style System",
            c: "Computer Style Sheets",
            d: "Colorful Style Sheets",
            correct: "a"
        },
        {
            question: "What is the default value of the `position` property in CSS?",
            a: "absolute",
            b: "relative",
            c: "fixed",
            d: "static",
            correct: "d"
        },
        {
            question: "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
            a: "title",
            b: "src",
            c: "alt",
            d: "longdesc",
            correct: "c"
        },
        {
            question: "Which of the following is not a JavaScript data type?",
            a: "String",
            b: "Boolean",
            c: "Float",
            d: "Undefined",
            correct: "c"
        },
        {
            question: "Which method can be used to find an element with a specific id in the DOM?",
            a: "getElementById()",
            b: "getElement()",
            c: "querySelector()",
            d: "querySelectorAll()",
            correct: "a"
        },
        {
            question: "Which of the following is used to create a function in JavaScript?",
            a: "function = myFunction()",
            b: "function:myFunction()",
            c: "function myFunction()",
            d: "myFunction() = function",
            correct: "c"
        },
        {
            question: "How do you create a comment in JavaScript?",
            a: "// This is a comment",
            b: "&lt;!-- This is a comment --&gt;",
            c: "# This is a comment",
            d: "/* This is a comment */",
            correct: "a"
        },
        {
            question: "What is the main purpose of HTML?",
            a: "To style web pages",
            b: "To provide structure to web content",
            c: "To execute scripts",
            d: "To store data",
            correct: "b"
        },
        {
            question: "Which symbol is used for comments in CSS?",
            a: "//",
            b: "/* ... */",
            c: "#",
            d: "// ...",
            correct: "b"
        },
        {
            question: "What is the use of `localStorage` in JavaScript?",
            a: "To store data temporarily",
            b: "To store data persistently in the browser",
            c: "To store functions only",
            d: "To store large files",
            correct: "b"
        },
        {
            question: "Which HTML tag is used to define a table?",
            a: "&lt;table&gt;",
            b: "&lt;tab&gt;",
            c: "&lt;tbody&gt;",
            d: "&lt;tr&gt;",
            correct: "a"
        },
        {
            question: "What is the main function of a web server?",
            a: "To store files",
            b: "To serve web pages to users",
            c: "To execute code",
            d: "To process data",
            correct: "b"
        },
        {
            question: "What is the purpose of the `<head>` tag in HTML?",
            a: "To contain metadata about the document",
            b: "To display the main content",
            c: "To create hyperlinks",
            d: "To contain images",
            correct: "a"
        },
        {
            question: "Which of the following is a valid JavaScript array?",
            a: "var colors = [1, 2, 3]",
            b: "var colors = (1, 2, 3)",
            c: "var colors = {1, 2, 3}",
            d: "var colors = 1, 2, 3",
            correct: "a"
        },
        {
            question: "How do you declare a variable in JavaScript?",
            a: "var myVar",
            b: "variable myVar",
            c: "myVar : variable",
            d: "declare myVar",
            correct: "a"
        },
        {
            question: "What does the `length` property return in JavaScript?",
            a: "The number of characters in a string",
            b: "The number of elements in an array",
            c: "Both a and b",
            d: "None of the above",
            correct: "c"
        },
        {
            question: "Which HTML element is used to define a footer for a document or section?",
            a: "&lt;footer&gt;",
            b: "&lt;bottom&gt;",
            c: "&lt;section&gt;",
            d: "&lt;div&gt;",
            correct: "a"
        },
        {
            question: "What does the `<a>` tag in HTML represent?",
            a: "An image",
            b: "A link",
            c: "A section",
            d: "A footer",
            correct: "b"
        },
        {
            question: "Which CSS property controls the text size?",
            a: "font-size",
            b: "text-size",
            c: "text-style",
            d: "font-style",
            correct: "a"
        },
        {
            question: "What is the correct way to include an external CSS file in HTML?",
            a: "&lt;stylesheet>styles.css</stylesheet&gt;",
            b: "&lt;link rel='stylesheet' href='styles.css'&gt;",
            c: "&lt;css>styles.css</css&gt;",
            d: "&lt;style>styles.css</style&gt;",
            correct: "b"
        }
    ],
    medium: [
        {
            question: "What does SOLID stand for in software development principles?",
            a: "Single responsibility, Open-closed, Liskov substitution, Interface segregation, Dependency inversion",
            b: "Single Optimization, Large Integration, Data handling",
            c: "System Overload, Lack of Documentation",
            d: "None of the above",
            correct: "a"
        },
        {
            question: "What is the main purpose of Docker?",
            a: "To build machine learning models",
            b: "To virtualize hardware",
            c: "To create isolated, reproducible application environments",
            d: "To develop native mobile applications",
            correct: "c"
        },
        {
            question: "Which HTTP method is idempotent?",
            a: "POST",
            b: "GET",
            c: "DELETE",
            d: "PATCH",
            correct: "b"
        },
        {
            question: "What is the purpose of the MVC design pattern?",
            a: "To provide a way to manage users",
            b: "To separate concerns in software architecture",
            c: "To optimize database queries",
            d: "To create responsive web applications",
            correct: "b"
        },
        {
            question: "In React, what is the difference between a class component and a functional component?",
            a: "Functional components are stateful while class components are stateless",
            b: "Functional components are stateless while class components can have state",
            c: "Both have the same capabilities",
            d: "Functional components cannot return JSX",
            correct: "b"
        },
        {
            question: "What is a closure in JavaScript?",
            a: "A function that has access to its own scope, the outer function's scope, and the global scope",
            b: "A block of code that doesn't execute",
            c: "A method of creating multiple instances",
            d: "A way to handle asynchronous tasks",
            correct: "a"
        },
        {
            question: "What is the purpose of an API?",
            a: "To display content",
            b: "To handle user authentication",
            c: "To allow different software applications to communicate with each other",
            d: "To store data",
            correct: "c"
        },
        {
            question: "Which of the following is not a valid JSON data type?",
            a: "Object",
            b: "Array",
            c: "Date",
            d: "String",
            correct: "c"
        },
        {
            question: "What is the purpose of the `async` keyword in JavaScript?",
            a: "To define a synchronous function",
            b: "To indicate that a function is asynchronous and will return a promise",
            c: "To run code immediately",
            d: "To create a new variable",
            correct: "b"
        },
        {
            question: "What is the significance of the `this` keyword in JavaScript?",
            a: "It refers to the global object",
            b: "It refers to the current function's scope",
            c: "It refers to the object that is executing the current function",
            d: "It has no significance",
            correct: "c"
        },
        {
            question: "Which CSS property is used to change the text color?",
            a: "color",
            b: "font-color",
            c: "text-color",
            d: "bgcolor",
            correct: "a"
        },
        {
            question: "What is the primary function of a web framework like Express?",
            a: "To style web pages",
            b: "To simplify the development of web applications by providing a structure",
            c: "To handle user authentication",
            d: "To manage databases",
            correct: "b"
        },
        {
            question: "In Git, what does the command `git commit -m 'message'` do?",
            a: "It creates a new branch",
            b: "It adds changes to the staging area",
            c: "It commits the staged changes with a message",
            d: "It pushes changes to the remote repository",
            correct: "c"
        },
        {
            question: "Which of the following is a feature of RESTful APIs?",
            a: "They use SOAP for communication",
            b: "They are stateless",
            c: "They can only return XML data",
            d: "They require a specific URL structure",
            correct: "b"
        },
        {
            question: "What is the purpose of middleware in Express?",
            a: "To serve static files",
            b: "To handle error management",
            c: "To process requests before reaching the final route handler",
            d: "To create routes",
            correct: "c"
        },
        {
            question: "What does AJAX stand for?",
            a: "Asynchronous JavaScript and XML",
            b: "Asynchronous JSON and XML",
            c: "Advanced JavaScript and XML",
            d: "Asynchronous Java and XHTML",
            correct: "a"
        },
        {
            question: "What is the use of `Promise.all()` in JavaScript?",
            a: "To run promises sequentially",
            b: "To execute multiple promises and wait for all of them to resolve",
            c: "To reject all promises",
            d: "To create a new promise",
            correct: "b"
        },
        {
            question: "Which of the following is an example of a NoSQL database?",
            a: "MySQL",
            b: "MongoDB",
            c: "PostgreSQL",
            d: "SQLite",
            correct: "b"
        },
        {
            question: "What is the purpose of a web service?",
            a: "To host web pages",
            b: "To provide a specific function over the internet",
            c: "To manage databases",
            d: "To serve static content",
            correct: "b"
        },
        {
            question: "What is CORS?",
            a: "Cross-Origin Resource Sharing",
            b: "Cross-Origin Request Security",
            c: "Cascading Origin Resource Storage",
            d: "None of the above",
            correct: "a"
        },
        {
            question: "What does the `event.preventDefault()` method do?",
            a: "Prevents the event from propagating",
            b: "Stops the default action of an element from happening",
            c: "Prevents the execution of code",
            d: "Returns a default value",
            correct: "b"
        },
        {
            question: "What is a common use case for using the `fetch` API?",
            a: "To read files from a local system",
            b: "To make network requests to servers",
            c: "To modify the DOM",
            d: "To style web pages",
            correct: "b"
        },
        {
            question: "What is a design pattern?",
            a: "A reusable solution to a commonly occurring problem in software design",
            b: "A new programming language",
            c: "A framework for building web applications",
            d: "A way to manage database connections",
            correct: "a"
        }
    ],
    complex: [
        {
            question: "What is dependency injection?",
            a: "A way to load dependencies at runtime",
            b: "A design pattern that implements inversion of control",
            c: "A technique for managing large data sets",
            d: "A method for accessing web APIs",
            correct: "b"
        },
        {
            question: "Which of the following is true about functional programming?",
            a: "It emphasizes immutability and pure functions",
            b: "It relies heavily on classes and objects",
            c: "It is mainly used for front-end development",
            d: "It does not allow higher-order functions",
            correct: "a"
        },
        {
            question: "What is the purpose of the `this` context in JavaScript?",
            a: "To refer to the global object only",
            b: "To reference the object from which the method was called",
            c: "To access local variables only",
            d: "It has no purpose",
            correct: "b"
        },
        {
            question: "What is the difference between `==` and `===` in JavaScript?",
            a: "They are identical",
            b: "`==` checks for value equality, while `===` checks for value and type equality",
            c: "`==` checks for type equality, while `===` checks for value equality",
            d: "None of the above",
            correct: "b"
        },
        {
            question: "What is the purpose of a service worker in web applications?",
            a: "To increase page load speed",
            b: "To intercept network requests and cache responses for offline use",
            c: "To manage user sessions",
            d: "To connect to databases",
            correct: "b"
        },
        {
            question: "What is the purpose of the `use strict` directive in JavaScript?",
            a: "To enable strict mode which helps catch common coding mistakes",
            b: "To enforce variable declaration",
            c: "To restrict the use of global variables",
            d: "All of the above",
            correct: "d"
        },
        {
            question: "What is a closure in JavaScript?",
            a: "A block of code that can access variables from its containing scope",
            b: "A method for managing asynchronous calls",
            c: "A function that cannot return a value",
            d: "A type of loop",
            correct: "a"
        },
        {
            question: "Which of the following is not a characteristic of RESTful APIs?",
            a: "Statelessness",
            b: "Uniform interface",
            c: "Supports stateful interactions",
            d: "Resource-based",
            correct: "c"
        },
        {
            question: "What is the primary benefit of using TypeScript?",
            a: "It is a compiled language",
            b: "It provides static typing, making code easier to debug and maintain",
            c: "It runs faster than JavaScript",
            d: "It automatically converts to HTML",
            correct: "b"
        },
        {
            question: "What is the role of the `<script>` tag in an HTML document?",
            a: "To define CSS styles",
            b: "To embed or reference JavaScript code",
            c: "To create interactive forms",
            d: "To link to external resources",
            correct: "b"
        },
        {
            question: "What is a promise in JavaScript?",
            a: "An object that may produce a value in the future",
            b: "A synchronous operation",
            c: "A way to handle errors",
            d: "None of the above",
            correct: "a"
        },
        {
            question: "What is the purpose of throttling in web development?",
            a: "To limit the number of events triggered within a specific timeframe",
            b: "To increase the speed of API requests",
            c: "To compress file sizes",
            d: "To enhance security",
            correct: "a"
        },
        {
            question: "Which of the following techniques can be used to enhance web application security?",
            a: "Cross-Site Scripting (XSS) prevention",
            b: "Using HTTPS",
            c: "Input validation",
            d: "All of the above",
            correct: "d"
        },
        {
            question: "What is a microservice architecture?",
            a: "A single application architecture",
            b: "An approach to building software as a suite of independently deployable services",
            c: "A method of managing monolithic applications",
            d: "A way to enhance performance",
            correct: "b"
        },
        {
            question: "What is the purpose of the `Array.prototype.map()` method?",
            a: "To create a new array populated with the results of calling a provided function on every element in the calling array",
            b: "To iterate through elements of an array",
            c: "To filter elements of an array",
            d: "To find a specific element in an array",
            correct: "a"
        },
        {
            question: "What is the role of the Document Object Model (DOM)?",
            a: "To define the structure of a database",
            b: "To represent the structure of an HTML document in a tree-like structure",
            c: "To style web pages",
            d: "To manage API requests",
            correct: "b"
        },
        {
            question: "What is an event loop in JavaScript?",
            a: "A way to create infinite loops",
            b: "A mechanism that allows JavaScript to perform non-blocking operations despite being single-threaded",
            c: "A method for handling user input",
            d: "A feature of the browser",
            correct: "b"
        },
        {
            question: "What is the purpose of the `fetch` method in JavaScript?",
            a: "To make synchronous HTTP requests",
            b: "To retrieve resources across the network asynchronously",
            c: "To read files from the local file system",
            d: "To create new resources",
            correct: "b"
        },
        {
            question: "What is the difference between `null` and `undefined` in JavaScript?",
            a: "`null` is an object, while `undefined` is a type",
            b: "They are identical",
            c: "`null` indicates the absence of a value, while `undefined` means a variable has been declared but not assigned a value",
            d: "None of the above",
            correct: "c"
        },
        {
            question: "What is the purpose of the `localStorage` object?",
            a: "To store data temporarily for a session",
            b: "To store data persistently in the browser",
            c: "To cache HTTP requests",
            d: "To store cookies",
            correct: "b"
        },
        {
            question: "What is the difference between `let`, `const`, and `var` in JavaScript?",
            a: "`var` is block-scoped, while `let` and `const` are function-scoped",
            b: "`const` is reassignable, while `let` and `var` are not",
            c: "`let` is hoisted, while `const` is not",
            d: "`let` and `const` are block-scoped, while `var` is function-scoped",
            correct: "d"
        },
        {
            question: "What is a callback function?",
            a: "A function passed into another function as an argument",
            b: "A function that returns a value",
            c: "A function called automatically",
            d: "A function that calls itself",
            correct: "a"
        },
        {
            question: "What is a web socket?",
            a: "A protocol for secure communication",
            b: "A way to establish a persistent connection between client and server",
            c: "A method for storing user data",
            d: "A technique for loading images",
            correct: "b"
        },
        {
            question: "What is the purpose of a build tool like Webpack?",
            a: "To serve static files",
            b: "To bundle JavaScript files for deployment",
            c: "To improve database performance",
            d: "To create HTML templates",
            correct: "b"
        },
        {
            question: "What is the role of the `<head>` element in an HTML document?",
            a: "To contain the main content",
            b: "To define metadata and links to stylesheets and scripts",
            c: "To create a navigation bar",
            d: "To add interactivity",
            correct: "b"
        },
        {
            question: "What is the purpose of an event listener in JavaScript?",
            a: "To trigger functions in response to user interactions or events",
            b: "To prevent default behavior of events",
            c: "To manage asynchronous operations",
            d: "To create variables",
            correct: "a"
        },
        {
            question: "What is the significance of the `data-*` attribute in HTML?",
            a: "It is used to store custom data private to the page or application",
            b: "It defines metadata for elements",
            c: "It links CSS styles to elements",
            d: "It is a way to create variables in HTML",
            correct: "a"
        },
        {
            question: "What is the difference between `async` and `defer` in script tags?",
            a: "`async` loads the script asynchronously while `defer` loads it after the HTML document is fully parsed",
            b: "They are the same",
            c: "`defer` loads scripts in parallel, while `async` executes them immediately",
            d: "`async` is only for CSS files",
            correct: "a"
        },
        {
            question: "What is the purpose of the `new` keyword in JavaScript?",
            a: "To create a new function",
            b: "To create a new object",
            c: "To define a new variable",
            d: "To invoke a function",
            correct: "b"
        },
        {
            question: "What is the role of the `console` object in JavaScript?",
            a: "To manage network requests",
            b: "To log information to the web console",
            c: "To manipulate DOM elements",
            d: "To handle user input",
            correct: "b"
        },
        {
            question: "What is a Single Page Application (SPA)?",
            a: "A web application that loads a single HTML page and dynamically updates content",
            b: "A type of website with multiple pages",
            c: "A web application that does not use JavaScript",
            d: "None of the above",
            correct: "a"
        },
        {
            question: "What is the purpose of the `setTimeout` function in JavaScript?",
            a: "To pause execution for a specified period",
            b: "To schedule a function to be executed after a specified delay",
            c: "To create an infinite loop",
            d: "To handle asynchronous operations",
            correct: "b"
        },
        {
            question: "What does the `typeof` operator do in JavaScript?",
            a: "Returns the type of a variable",
            b: "Checks if a variable is defined",
            c: "Declares a variable",
            d: "Creates a new variable",
            correct: "a"
        },
        {
            question: "What is the purpose of the `slice` method in JavaScript?",
            a: "To extract a section of an array or string without modifying the original",
            b: "To modify an array",
            c: "To add new elements to an array",
            d: "To remove elements from an array",
            correct: "a"
        },
        {
            question: "What is the difference between `shallow copy` and `deep copy`?",
            a: "`Shallow copy` copies only the top-level elements, while `deep copy` copies all levels",
            b: "They are identical",
            c: "`Shallow copy` is faster than `deep copy`",
            d: "`Deep copy` is faster than `shallow copy`",
            correct: "a"
        },
        {
            question: "What is the purpose of a Content Delivery Network (CDN)?",
            a: "To improve security of web applications",
            b: "To distribute content to users from servers that are geographically closer",
            c: "To host web applications",
            d: "To optimize database performance",
            correct: "b"
        },
        {
            question: "What is the significance of the `viewport` meta tag?",
            a: "It controls the layout on mobile browsers",
            b: "It sets the default zoom level",
            c: "It optimizes images",
            d: "It defines the size of the content",
            correct: "a"
        },
        {
            question: "What is a Progressive Web App (PWA)?",
            a: "A web application that behaves like a native application",
            b: "A type of mobile app",
            c: "A web app that only works offline",
            d: "None of the above",
            correct: "a"
        },
        {
            question: "What is the purpose of the `getElementById` method?",
            a: "To create a new HTML element",
            b: "To retrieve an element from the DOM by its ID",
            c: "To modify an element's attributes",
            d: "To add event listeners to elements",
            correct: "b"
        },
        {
            question: "What is the difference between an attribute and a property in the DOM?",
            a: "They are identical",
            b: "Attributes are defined in HTML, while properties are defined in JavaScript",
            c: "Properties are more important than attributes",
            d: "Attributes cannot be modified",
            correct: "b"
        },
        {
            question: "What is a RESTful API?",
            a: "An API that uses HTTP requests to manipulate data",
            b: "A type of web server",
            c: "A framework for building web applications",
            d: "None of the above",
            correct: "a"
        },
        {
            question: "What is the purpose of the `addEventListener` method?",
            a: "To attach an event handler to a specified element",
            b: "To remove an event handler from an element",
            c: "To create a new event",
            d: "To modify existing events",
            correct: "a"
        },
        {
            question: "What is the role of AJAX in web development?",
            a: "To create animations",
            b: "To allow asynchronous data loading without refreshing the page",
            c: "To optimize image loading",
            d: "To improve server performance",
            correct: "b"
        },
        {
            question: "What is the difference between a `GET` and a `POST` request?",
            a: "GET is used for fetching data, while POST is used for sending data to the server",
            b: "They are identical",
            c: "POST is faster than GET",
            d: "GET cannot send data",
            correct: "a"
        },
        {
            question: "What is CORS in web development?",
            a: "A method for optimizing performance",
            b: "A security feature that allows restricted resources to be requested from another domain",
            c: "A protocol for data transfer",
            d: "None of the above",
            correct: "b"
        },
        {
            question: "What is the purpose of the `window` object in JavaScript?",
            a: "To represent the browser window",
            b: "To control the layout of a page",
            c: "To manage user sessions",
            d: "To define variables",
            correct: "a"
        },
        {
            question: "What is the significance of the `async` keyword in JavaScript?",
            a: "It defines a variable",
            b: "It indicates a function that returns a promise",
            c: "It creates an infinite loop",
            d: "It declares an event handler",
            correct: "b"
        },
        {
            question: "What is the purpose of the `Promise` object?",
            a: "To manage synchronous operations",
            b: "To handle asynchronous operations and their eventual completion or failure",
            c: "To create new objects",
            d: "To modify the DOM",
            correct: "b"
        },
        {
            question: "What is the difference between `==` and `===` in JavaScript?",
            a: "`==` compares values, while `===` compares values and types",
            b: "They are identical",
            c: "`===` is used for strings, while `==` is used for numbers",
            d: "`==` is faster than `===`",
            correct: "a"
        },
        {
            question: "What is the purpose of the `forEach` method in JavaScript?",
            a: "To create a new array",
            b: "To execute a provided function once for each array element",
            c: "To filter an array",
            d: "To find an element in an array",
            correct: "b"
        },
        {
            question: "What is the purpose of the `indexOf` method in JavaScript?",
            a: "To find the position of a value in an array or string",
            b: "To add new elements to an array",
            c: "To remove elements from an array",
            d: "To sort an array",
            correct: "a"
        },
        {
            question: "What is the significance of the `DOMContentLoaded` event?",
            a: "It is fired when the entire page has loaded",
            b: "It is fired when the initial HTML document has been completely loaded and parsed",
            c: "It is fired when all resources, like images and stylesheets, have finished loading",
            d: "It is fired when an error occurs",
            correct: "b"
        },
        {
            question: "What is the purpose of the `splice` method in JavaScript?",
            a: "To add or remove items from an array",
            b: "To create a shallow copy of an array",
            c: "To find the index of an item in an array",
            d: "To sort an array",
            correct: "a"
        },
        {
            question: "What is the difference between localStorage and sessionStorage?",
            a: "localStorage persists until explicitly deleted, while sessionStorage lasts only for the duration of the page session",
            b: "They are identical",
            c: "sessionStorage is faster than localStorage",
            d: "localStorage can store more data than sessionStorage",
            correct: "a"
        },
        {
            question: "What is the purpose of the `reduce` method in JavaScript?",
            a: "To iterate over an array and perform a reduction operation",
            b: "To filter an array",
            c: "To find an element in an array",
            d: "To create a new array",
            correct: "a"
        },
        {
            question: "What is the role of the `setInterval` function in JavaScript?",
            a: "To execute a function at specified intervals",
            b: "To create an infinite loop",
            c: "To delay execution of a function",
            d: "To handle user input",
            correct: "a"
        },
        {
            question: "What is the purpose of the `find` method in JavaScript?",
            a: "To find the first element in an array that satisfies a provided testing function",
            b: "To sort an array",
            c: "To filter elements of an array",
            d: "To create a new array",
            correct: "a"
        },
        {
            question: "What is the difference between a `function declaration` and a `function expression`?",
            a: "Function declarations are hoisted, while function expressions are not",
            b: "They are identical",
            c: "Function expressions can be anonymous, while function declarations cannot",
            d: "Both a and c",
            correct: "d"
        },
        {
            question: "What is the purpose of the `clearTimeout` function in JavaScript?",
            a: "To cancel a timeout previously established by `setTimeout`",
            b: "To reset the timer for an interval",
            c: "To stop execution of a function",
            d: "To remove a function from the call stack",
            correct: "a"
        },
        {
            question: "What is the purpose of the `Promise.all` method?",
            a: "To wait for all promises to resolve or for any promise to reject",
            b: "To create a new promise",
            c: "To cancel promises",
            d: "To convert callback functions into promises",
            correct: "a"
        },
        {
            question: "What is the role of the `Math` object in JavaScript?",
            a: "To perform mathematical calculations and constants",
            b: "To handle user input",
            c: "To manipulate the DOM",
            d: "To create functions",
            correct: "a"
        },
        {
            question: "What is the difference between `Array.prototype.reduce` and `Array.prototype.reduceRight`?",
            a: "reduce processes elements from left to right, while reduceRight processes elements from right to left",
            b: "They are identical",
            c: "reduceRight is faster than reduce",
            d: "reduce can only be used on arrays with numbers",
            correct: "a"
        },
        {
            question: "What is the purpose of the `setAttribute` method in JavaScript?",
            a: "To create new attributes for an element",
            b: "To set the value of an attribute on a specified element",
            c: "To retrieve the value of an attribute",
            d: "To remove an attribute",
            correct: "b"
        },
        {
            question: "What is the role of the `XMLHttpRequest` object?",
            a: "To make synchronous HTTP requests",
            b: "To make asynchronous HTTP requests",
            c: "To handle responses from the server",
            d: "Both b and c",
            correct: "d"
        },
        {
            question: "What is the purpose of the `classList` property in JavaScript?",
            a: "To manage a list of classes for an element",
            b: "To create new classes",
            c: "To retrieve class information from the DOM",
            d: "To modify the CSS styles of an element",
            correct: "a"
        },
        {
            question: "What is the significance of the `pointer-events` CSS property?",
            a: "It controls the visibility of an element",
            b: "It determines whether or not an element can be the target of mouse events",
            c: "It changes the color of an element",
            d: "It is used for layout",
            correct: "b"
        },
        {
            question: "What is the purpose of the `data-*` attribute in HTML?",
            a: "It is used to store custom data private to the page or application",
            b: "It defines metadata for elements",
            c: "It links CSS styles to elements",
            d: "It is a way to create variables in HTML",
            correct: "a"
        },
        {
            question: "What is the role of the `fetch` API?",
            a: "To retrieve data from a server asynchronously",
            b: "To create new APIs",
            c: "To make synchronous requests",
            d: "To manipulate the DOM",
            correct: "a"
        },
        {
            question: "What is the difference between the `async/await` syntax and Promises?",
            a: "async/await makes the code cleaner and easier to read",
            b: "Promises are not asynchronous",
            c: "async/await can only be used in a single function",
            d: "They are identical",
            correct: "a"
        },
        {
            question: "What is the significance of the `this` keyword in JavaScript?",
            a: "It refers to the global object",
            b: "It refers to the current object in a method",
            c: "It is used for creating variables",
            d: "It is a reserved keyword",
            correct: "b"
        },
        {
            question: "What is the purpose of the `visibility` CSS property?",
            a: "To control whether an element is visible or hidden",
            b: "To control the layout of an element",
            c: "To set the size of an element",
            d: "To change the color of an element",
            correct: "a"
        },
        {
            question: "What is the purpose of the `removeChild` method in JavaScript?",
            a: "To remove a specified child node from an element",
            b: "To delete an element from the DOM",
            c: "To create a new element",
            d: "To modify an element's attributes",
            correct: "a"
        },
        {
            question: "What is the role of the `setTimeout` function in JavaScript?",
            a: "To execute a function after a specified number of milliseconds",
            b: "To create a delay in execution",
            c: "To stop execution of a function",
            d: "To handle user input",
            correct: "a"
        },
        {
            question: "What is the purpose of the `innerHTML` property?",
            a: "To retrieve or set the HTML content of an element",
            b: "To modify the attributes of an element",
            c: "To access the styles of an element",
            d: "To retrieve the parent node of an element",
            correct: "a"
        },
        {
            question: "What is the significance of the `transform` property in CSS?",
            a: "It controls how an element is displayed",
            b: "It allows you to apply 2D and 3D transformations to an element",
            c: "It changes the size of an element",
            d: "It is used for animations",
            correct: "b"
        },
        {
            question: "What is the purpose of the `Object.keys` method in JavaScript?",
            a: "To retrieve the keys of an object",
            b: "To create a new object",
            c: "To sort an object",
            d: "To delete an object",
            correct: "a"
        },
        {
            question: "What is the role of the `URL` interface in JavaScript?",
            a: "To create and manipulate URLs",
            b: "To make HTTP requests",
            c: "To handle user input",
            d: "To format strings",
            correct: "a"
        },
        {
            question: "What is the purpose of the `focus` method in JavaScript?",
            a: "To set focus on a specific element",
            b: "To highlight text in an input",
            c: "To create a new element",
            d: "To remove focus from an element",
            correct: "a"
        },
        {
            question: "What is the difference between `true` and `1` in JavaScript?",
            a: "They are identical",
            b: "`true` is a boolean value, while `1` is a number",
            c: "`true` is faster than `1`",
            d: "`1` is converted to `true` automatically",
            correct: "b"
        },
        {
            question: "What is the purpose of the `filter` method in JavaScript?",
            a: "To create a new array with all elements that pass the test implemented by the provided function",
            b: "To remove elements from an array",
            c: "To find an element in an array",
            d: "To sort an array",
            correct: "a"
        },
        {
            question: "What is the significance of the `opacity` CSS property?",
            a: "It controls the visibility of an element",
            b: "It sets the transparency level of an element",
            c: "It changes the color of an element",
            d: "It is used for animations",
            correct: "b"
        },
        {
            question: "What is the role of the `localStorage` object?",
            a: "To store key-value pairs in a web browser",
            b: "To manage cookies",
            c: "To handle session data",
            d: "To create global variables",
            correct: "a"
        },
        {
            question: "What is the purpose of the `setInterval` method in JavaScript?",
            a: "To execute a function at specified intervals",
            b: "To create a delay in execution",
            c: "To stop execution of a function",
            d: "To handle user input",
            correct: "a"
        },
        {
            question: "What is the significance of the `z-index` CSS property?",
            a: "It controls the order of elements along the z-axis",
            b: "It sets the opacity of an element",
            c: "It determines the size of an element",
            d: "It is used for animations",
            correct: "a"
        },
        {
            question: "What is the purpose of the `preventDefault` method in JavaScript?",
            a: "To stop the default action of an event from occurring",
            b: "To trigger an event manually",
            c: "To create a new event",
            d: "To remove an event listener",
            correct: "a"
        },
        {
            question: "What is the role of the `replace` method in JavaScript?",
            a: "To replace a specified value with another value in a string",
            b: "To remove an element from an array",
            c: "To find the index of an item in an array",
            d: "To create a new string",
            correct: "a"
        },
        {
            question: "What is the purpose of the `JSON.stringify` method?",
            a: "To convert a JavaScript object into a JSON string",
            b: "To parse a JSON string into a JavaScript object",
            c: "To create a new object",
            d: "To remove an object",
            correct: "a"
        },
        {
            question: "What is the significance of the `box-shadow` property in CSS?",
            a: "It creates a shadow effect around an element",
            b: "It changes the color of an element",
            c: "It is used for animations",
            d: "It sets the position of an element",
            correct: "a"
        },
        {
            question: "What is the purpose of the `getElementById` method in JavaScript?",
            a: "To retrieve an element by its ID",
            b: "To create a new element",
            c: "To modify an element's attributes",
            d: "To remove an element from the DOM",
            correct: "a"
        },
        {
            question: "What is the role of the `addEventListener` method?",
            a: "To attach an event handler to a specified element",
            b: "To remove an event handler from an element",
            c: "To create a new event",
            d: "To modify existing events",
            correct: "a"
        },
        {
            question: "What is the significance of the `innerText` property?",
            a: "It sets or returns the text content of the specified node and its descendants",
            b: "It retrieves the HTML content of an element",
            c: "It modifies the attributes of an element",
            d: "It retrieves the CSS styles of an element",
            correct: "a"
        },
        {
            question: "What is the purpose of the `getComputedStyle` method?",
            a: "To retrieve the computed style of an element",
            b: "To modify an element's attributes",
            c: "To remove an element from the DOM",
            d: "To create new elements",
            correct: "a"
        },
        {
            question: "What is the role of the `event` object in JavaScript?",
            a: "To store user input",
            b: "To represent the details of an event",
            c: "To create new events",
            d: "To modify existing events",
            correct: "b"
        },
        {
            question: "What is the significance of the `visibility` CSS property?",
            a: "It controls whether an element is visible or hidden",
            b: "It controls the layout of an element",
            c: "It sets the size of an element",
            d: "It changes the color of an element",
            correct: "a"
        },
        {
            question: "What is the purpose of the `match` method in JavaScript?",
            a: "To search a string for a match against a regular expression",
            b: "To replace part of a string",
            c: "To split a string into an array",
            d: "To concatenate two strings",
            correct: "a"
        },
        {
            question: "What is the role of the `slice` method in JavaScript?",
            a: "To extract a section of a string or array",
            b: "To join two strings",
            c: "To find the index of an item in an array",
            d: "To remove elements from an array",
            correct: "a"
        },
        {
            question: "What is the purpose of the `setAttribute` method in JavaScript?",
            a: "To set the value of an attribute on a specified element",
            b: "To remove an attribute from an element",
            c: "To retrieve an attribute's value",
            d: "To create a new element",
            correct: "a"
        },
        {
            question: "What is the significance of the `data-*` attribute in HTML?",
            a: "To store custom data private to the page or application",
            b: "To create new HTML elements",
            c: "To define the language of a document",
            d: "To create hyperlinks",
            correct: "a"
        },
        {
            question: "What is the role of the `Promise` object?",
            a: "To represent a value that may be available now, or in the future, or never",
            b: "To create asynchronous functions",
            c: "To store variables",
            d: "To manipulate the DOM",
            correct: "a"
        },
        {
            question: "What is the purpose of the `console.log` method?",
            a: "To print messages to the console",
            b: "To create a new console",
            c: "To retrieve console messages",
            d: "To clear the console",
            correct: "a"
        },
        {
            question: "What is the significance of the `transition` property in CSS?",
            a: "It enables the transition from one style to another smoothly",
            b: "It changes the position of an element",
            c: "It sets the size of an element",
            d: "It is used for animations",
            correct: "a"
        },
        {
            question: "What is the role of the `window` object in JavaScript?",
            a: "To represent the browser's window",
            b: "To create new elements",
            c: "To manipulate the DOM",
            d: "To manage user input",
            correct: "a"
        },
        {
            question: "What is the purpose of the `cloneNode` method?",
            a: "To create a copy of a node",
            b: "To remove an element from the DOM",
            c: "To modify an element's attributes",
            d: "To create a new element",
            correct: "a"
        },
        {
            question: "What is the significance of the `display` CSS property?",
            a: "It specifies how an element is displayed on the page",
            b: "It changes the color of an element",
            c: "It sets the size of an element",
            d: "It is used for animations",
            correct: "a"
        },
        {
            question: "What is the purpose of the `requestAnimationFrame` method?",
            a: "To create smoother animations",
            b: "To handle user input",
            c: "To manipulate the DOM",
            d: "To store key-value pairs",
            correct: "a"
        },
        {
            question: "What is the role of the `scrollTo` method in JavaScript?",
            a: "To scroll to a particular set of coordinates in the document",
            b: "To change the position of an element",
            c: "To retrieve scroll position",
            d: "To create new elements",
            correct: "a"
        },
        {
            question: "What is the significance of the `cursor` CSS property?",
            a: "It specifies the type of cursor to be displayed when hovering over an element",
            b: "It changes the size of an element",
            c: "It is used for animations",
            d: "It controls the layout of an element",
            correct: "a"
        },
        {
            question: "What is the purpose of the `window.localStorage` object?",
            a: "To store data in a web browser with no expiration time",
            b: "To manage session data",
            c: "To handle cookies",
            d: "To create global variables",
            correct: "a"
        },
        {
            question: "What is the role of the `createElement` method in JavaScript?",
            a: "To create a new element node",
            b: "To remove an element from the DOM",
            c: "To modify an element's attributes",
            d: "To create a new document",
            correct: "a"
        },
        {
            question: "What is the significance of the `:hover` pseudo-class in CSS?",
            a: "It applies styles when an element is hovered over",
            b: "It sets the size of an element",
            c: "It changes the color of an element",
            d: "It is used for animations",
            correct: "a"
        },
        {
            question: "What is the purpose of the `indexOf` method in JavaScript?",
            a: "To return the index of the first occurrence of a specified value in a string or array",
            b: "To create a new array",
            c: "To remove an element from an array",
            d: "To find the last occurrence of a specified value",
            correct: "a"
        },
        {
            question: "What is the significance of the `:focus` pseudo-class in CSS?",
            a: "It applies styles when an element has focus",
            b: "It sets the size of an element",
            c: "It changes the color of an element",
            d: "It is used for animations",
            correct: "a"
        },
        {
            question: "What is the role of the `add` method in the `Set` object?",
            a: "To add a new element to a set",
            b: "To remove an element from a set",
            c: "To check for the existence of an element in a set",
            d: "To create a new set",
            correct: "a"
        },
        {
            question: "What is the significance of the `background-color` CSS property?",
            a: "It sets the background color of an element",
            b: "It changes the size of an element",
            c: "It is used for animations",
            d: "It modifies an element's attributes",
            correct: "a"
        },
        {
            question: "What is the purpose of the `every` method in JavaScript?",
            a: "To test whether all elements in an array pass the test implemented by the provided function",
            b: "To remove elements from an array",
            c: "To find an element in an array",
            d: "To sort an array",
            correct: "a"
        },
        {
            question: "What is the role of the `classList` property in JavaScript?",
            a: "To return a live DOMTokenList of the class attributes of the element",
            b: "To modify an element's attributes",
            c: "To remove an element from the DOM",
            d: "To create a new element",
            correct: "a"
        },
        {
            question: "What is the significance of the `flex` property in CSS?",
            a: "It defines the ability of a flex item to grow or shrink",
            b: "It sets the size of an element",
            c: "It is used for animations",
            d: "It changes the background color of an element",
            correct: "a"
        },
        {
            question: "What is the purpose of the `reduce` method in JavaScript?",
            a: "To execute a reducer function on each element of the array, resulting in a single output value",
            b: "To create a new array",
            c: "To remove elements from an array",
            d: "To find an element in an array",
            correct: "a"
        },
        {
            question: "What is the role of the `document` object?",
            a: "To represent the HTML document loaded in the browser",
            b: "To create new elements",
            c: "To modify an element's attributes",
            d: "To handle user input",
            correct: "a"
        },
        {
            question: "What is the significance of the `@keyframes` rule in CSS?",
            a: "It is used to create animations",
            b: "It modifies an element's attributes",
            c: "It sets the size of an element",
            d: "It changes the background color of an element",
            correct: "a"
        },
        {
            question: "What is the purpose of the `forEach` method in JavaScript?",
            a: "To execute a provided function once for each array element",
            b: "To create a new array",
            c: "To remove elements from an array",
            d: "To sort an array",
            correct: "a"
        },
        {
            question: "What is the role of the `replaceChild` method in JavaScript?",
            a: "To replace a child node with a new node",
            b: "To remove a child node from an element",
            c: "To create a new node",
            d: "To modify an element's attributes",
            correct: "a"
        },
        {
            question: "What is the significance of the `:nth-child` pseudo-class in CSS?",
            a: "It matches elements based on their position in a parent",
            b: "It changes the color of an element",
            c: "It is used for animations",
            d: "It sets the size of an element",
            correct: "a"
        },
        {
            question: "What is the purpose of the `filter` method in JavaScript?",
            a: "To create a new array with all elements that pass the test implemented by the provided function",
            b: "To remove elements from an array",
            c: "To find an element in an array",
            d: "To sort an array",
            correct: "a"
        },
        {
            question: "What is the role of the `focus` method in JavaScript?",
            a: "To give focus to an element",
            b: "To change the position of an element",
            c: "To retrieve focus position",
            d: "To create new elements",
            correct: "a"
        },
        {
            question: "What is the significance of the `visibility` CSS property?",
            a: "It specifies whether an element is visible or hidden",
            b: "It changes the size of an element",
            c: "It is used for animations",
            d: "It modifies an element's attributes",
            correct: "a"
        },
        {
            question: "What is the purpose of the `sort` method in JavaScript?",
            a: "To sort the elements of an array",
            b: "To create a new array",
            c: "To remove elements from an array",
            d: "To find an element in an array",
            correct: "a"
        },
        {
            question: "What is the role of the `removeChild` method in JavaScript?",
            a: "To remove a child node from an element",
            b: "To create a new node",
            c: "To modify an element's attributes",
            d: "To replace a child node",
            correct: "a"
        },
        {
            question: "What is the significance of the `position` CSS property?",
            a: "It specifies how an element is positioned in the document",
            b: "It changes the size of an element",
            c: "It sets the background color of an element",
            d: "It is used for animations",
            correct: "a"
        },
        {
            question: "What is the purpose of the `setTimeout` method in JavaScript?",
            a: "To execute a function after a specified delay",
            b: "To create a new timer",
            c: "To clear a timer",
            d: "To manage animations",
            correct: "a"
        },
        {
            question: "What is the role of the `unshift` method in JavaScript?",
            a: "To add one or more elements to the beginning of an array",
            b: "To remove the first element from an array",
            c: "To find an element in an array",
            d: "To create a new array",
            correct: "a"
        },
        {
            question: "What is the significance of the `opacity` CSS property?",
            a: "It sets the transparency level of an element",
            b: "It changes the size of an element",
            c: "It is used for animations",
            d: "It modifies an element's attributes",
            correct: "a"
        },
        {
            question: "What is the purpose of the `map` method in JavaScript?",
            a: "To create a new array populated with the results of calling a provided function on every element in the calling array",
            b: "To create a new array",
            c: "To remove elements from an array",
            d: "To find an element in an array",
            correct: "a"
        },
        {
            question: "What is the role of the `setInterval` method in JavaScript?",
            a: "To execute a function repeatedly at specified intervals",
            b: "To create a new timer",
            c: "To clear a timer",
            d: "To manage animations",
            correct: "a"
        },
        {
            question: "What is the significance of the `z-index` CSS property?",
            a: "It specifies the stack order of an element",
            b: "It changes the size of an element",
            c: "It is used for animations",
            d: "It modifies an element's attributes",
            correct: "a"
        },
        {
            question: "What is the purpose of the `find` method in JavaScript?",
            a: "To return the value of the first element that passes a test",
            b: "To create a new array",
            c: "To remove elements from an array",
            d: "To sort an array",
            correct: "a"
        },
        {
            question: "What is the role of the `appendChild` method in JavaScript?",
            a: "To add a new child node to an element",
            b: "To remove a child node from an element",
            c: "To create a new node",
            d: "To modify an element's attributes",
            correct: "a"
        },
        {
            question: "What is the significance of the `grid` property in CSS?",
            a: "It enables the use of CSS Grid Layout",
            b: "It changes the size of an element",
            c: "It is used for animations",
            d: "It modifies an element's attributes",
            correct: "a"
        },
        {
            question: "What is the purpose of the `push` method in JavaScript?",
            a: "To add one or more elements to the end of an array",
            b: "To remove the last element from an array",
            c: "To find an element in an array",
            d: "To create a new array",
            correct: "a"
        },
        {
            question: "What is the role of the `remove` method in JavaScript?",
            a: "To remove an element from the DOM",
            b: "To create a new node",
            c: "To modify an element's attributes",
            d: "To replace a child node",
            correct: "a"
        },
        {
            question: "What is the significance of the `font-size` CSS property?",
            a: "It sets the size of the font for an element",
            b: "It changes the size of an element",
            c: "It is used for animations",
            d: "It modifies an element's attributes",
            correct: "a"
        },
        {
            question: "What is the purpose of the `some` method in JavaScript?",
            a: "To test whether at least one element in the array passes the test implemented by the provided function",
            b: "To remove elements from an array",
            c: "To find an element in an array",
            d: "To sort an array",
            correct: "a"
        },
        {
            question: "What is the role of the `createDocumentFragment` method in JavaScript?",
            a: "To create a lightweight, minimal document object",
            b: "To remove an element from the DOM",
            c: "To modify an element's attributes",
            d: "To create a new node",
            correct: "a"
        },
        {
            question: "What is the significance of the `align-items` property in CSS Flexbox?",
            a: "It aligns flex items along the cross axis",
            b: "It sets the size of an element",
            c: "It changes the color of an element",
            d: "It is used for animations",
            correct: "a"
        },
        {
            question: "What is the purpose of the `isNaN` function in JavaScript?",
            a: "To determine whether a value is NaN (Not-a-Number)",
            b: "To create a new array",
            c: "To remove elements from an array",
            d: "To find an element in an array",
            correct: "a"
        },
        {
            question: "What is the role of the `getElementById` method in JavaScript?",
            a: "To return a reference to the first object with the specified ID",
            b: "To create a new element",
            c: "To modify an element's attributes",
            d: "To remove an element from the DOM",
            correct: "a"
        },
        {
            question: "What is the significance of the `border` property in CSS?",
            a: "It defines the border of an element",
            b: "It changes the size of an element",
            c: "It is used for animations",
            d: "It modifies an element's attributes",
            correct: "a"
        },
        {
            question: "What is the purpose of the `shift` method in JavaScript?",
            a: "To remove the first element from an array",
            b: "To add one or more elements to the beginning of an array",
            c: "To find an element in an array",
            d: "To create a new array",
            correct: "a"
        },
        {
            question: "What is the role of the `match` method in JavaScript?",
            a: "To retrieve the matches when matching a string against a regular expression",
            b: "To create a new array",
            c: "To remove elements from an array",
            d: "To find an element in an array",
            correct: "a"
        },
        {
            question: "What is the significance of the `flex-direction` property in CSS Flexbox?",
            a: "It defines the direction of the flexible items",
            b: "It sets the size of an element",
            c: "It changes the color of an element",
            d: "It is used for animations",
            correct: "a"
        },
        {
            question: "What is the purpose of the `indexOf` method in JavaScript?",
            a: "To return the index of the first occurrence of a specified value in an array",
            b: "To create a new array",
            c: "To remove elements from an array",
            d: "To find an element in an array",
            correct: "a"
        },
        {
            question: "What is the role of the `setAttribute` method in JavaScript?",
            a: "To set the value of an attribute on an element",
            b: "To create a new node",
            c: "To modify an element's attributes",
            d: "To remove an element from the DOM",
            correct: "a"
        },
        {
            question: "What is the significance of the `background-color` CSS property?",
            a: "It sets the background color of an element",
            b: "It changes the size of an element",
            c: "It is used for animations",
            d: "It modifies an element's attributes",
            correct: "a"
        },
        {
            question: "What is the purpose of the `every` method in JavaScript?",
            a: "To test whether all elements in the array pass the test implemented by the provided function",
            b: "To remove elements from an array",
            c: "To find an element in an array",
            d: "To sort an array",
            correct: "a"
        },
        {
            question: "What is the role of the `classList` property in JavaScript?",
            a: "It provides methods to add, remove, and toggle CSS classes",
            b: "To create a new node",
            c: "To modify an element's attributes",
            d: "To remove an element from the DOM",
            correct: "a"
        },
        {
            question: "What is the significance of the `gap` property in CSS Grid?",
            a: "It defines the space between grid items",
            b: "It sets the size of an element",
            c: "It changes the color of an element",
            d: "It is used for animations",
            correct: "a"
        },
        {
            question: "What is the purpose of the `forEach` method in JavaScript?",
            a: "To execute a provided function once for each array element",
            b: "To create a new array",
            c: "To remove elements from an array",
            d: "To find an element in an array",
            correct: "a"
        },
        {
            question: "What is the role of the `requestAnimationFrame` method in JavaScript?",
            a: "To schedule a function to run before the next repaint",
            b: "To create a new animation",
            c: "To stop an animation",
            d: "To manage DOM elements",
            correct: "a"
        },
        {
            question: "What is the significance of the `justify-content` property in CSS Flexbox?",
            a: "It aligns flex items along the main axis",
            b: "It sets the size of an element",
            c: "It changes the color of an element",
            d: "It is used for animations",
            correct: "a"
        },
        {
            question: "What is the purpose of the `reduce` method in JavaScript?",
            a: "To execute a reducer function on each element of the array, resulting in a single output value",
            b: "To create a new array",
            c: "To remove elements from an array",
            d: "To find an element in an array",
            correct: "a"
        },
        {
            question: "What is the role of the `cloneNode` method in JavaScript?",
            a: "To create a copy of an element",
            b: "To remove an element from the DOM",
            c: "To modify an element's attributes",
            d: "To create a new node",
            correct: "a"
        },
        {
            question: "What is the significance of the `color` CSS property?",
            a: "It sets the color of text in an element",
            b: "It changes the size of an element",
            c: "It is used for animations",
            d: "It modifies an element's attributes",
            correct: "a"
        },
        {
            question: "What is the purpose of the `findIndex` method in JavaScript?",
            a: "To return the index of the first element that satisfies the provided testing function",
            b: "To create a new array",
            c: "To remove elements from an array",
            d: "To find an element in an array",
            correct: "a"
        },
        {
            question: "What is the role of the `toggle` method in JavaScript?",
            a: "To add or remove a class from an element",
            b: "To create a new node",
            c: "To modify an element's attributes",
            d: "To remove an element from the DOM",
            correct: "a"
        },
        {
            question: "What is the significance of the `flex-wrap` property in CSS Flexbox?",
            a: "It defines whether flex items should wrap onto multiple lines",
            b: "It sets the size of an element",
            c: "It changes the color of an element",
            d: "It is used for animations",
            correct: "a"
        },
        {
            question: "What is the purpose of the `splice` method in JavaScript?",
            a: "To change the contents of an array by removing or replacing existing elements and/or adding new elements",
            b: "To create a new array",
            c: "To remove elements from an array",
            d: "To find an element in an array",
            correct: "a"
        },
        {
            question: "What is the role of the `scrollTo` method in JavaScript?",
            a: "To scroll to a particular set of coordinates in the document",
            b: "To create a new animation",
            c: "To stop an animation",
            d: "To manage DOM elements",
            correct: "a"
        },
        {
            question: "What is the significance of the `transition` property in CSS?",
            a: "It provides a way to change property values smoothly (over a given duration)",
            b: "It changes the size of an element",
            c: "It is used for animations",
            d: "It modifies an element's attributes",
            correct: "a"
        },
        {
            question: "What is the purpose of the `keys` method in JavaScript?",
            a: "To return an array of a given object's own enumerable property names",
            b: "To create a new array",
            c: "To remove elements from an array",
            d: "To find an element in an array",
            correct: "a"
        },
        {
            question: "What is the role of the `setTimeout` function in JavaScript?",
            a: "To execute a function after a specified number of milliseconds",
            b: "To create a new timer",
            c: "To clear a timer",
            d: "To manage animations",
            correct: "a"
        },
        {
            question: "What is the significance of the `max-width` CSS property?",
            a: "It sets the maximum width of an element",
            b: "It changes the size of an element",
            c: "It is used for animations",
            d: "It modifies an element's attributes",
            correct: "a"
        },
        {
            question: "What is the purpose of the `slice` method in JavaScript?",
            a: "To return a shallow copy of a portion of an array into a new array object",
            b: "To create a new array",
            c: "To remove elements from an array",
            d: "To find an element in an array",
            correct: "a"
        },
        {
            question: "What is the role of the `type` attribute in HTML input elements?",
            a: "To specify the type of input control to display",
            b: "To create a new element",
            c: "To modify an element's attributes",
            d: "To remove an element from the DOM",
            correct: "a"
        },
        {
            question: "What is the significance of the `display` CSS property?",
            a: "It specifies how an element is displayed on the web page",
            b: "It changes the size of an element",
            c: "It is used for animations",
            d: "It modifies an element's attributes",
            correct: "a"
        },
        {
            question: "What is the purpose of the `every` method in JavaScript?",
            a: "To test whether all elements in the array pass the test implemented by the provided function",
            b: "To remove elements from an array",
            c: "To find an element in an array",
            d: "To sort an array",
            correct: "a"
        },
        {
            question: "What is the role of the `setInterval` function in JavaScript?",
            a: "To repeatedly execute a function at specified intervals",
            b: "To create a new timer",
            c: "To clear a timer",
            d: "To manage animations",
            correct: "a"
        },
        {
            question: "What is the significance of the `flex-grow` property in CSS Flexbox?",
            a: "It defines the ability of a flex item to grow relative to the rest of the flex items",
            b: "It sets the size of an element",
            c: "It changes the color of an element",
            d: "It is used for animations",
            correct: "a"
        },
        {
            question: "What is the purpose of the `map` method in JavaScript?",
            a: "To create a new array populated with the results of calling a provided function on every element in the calling array",
            b: "To create a new array",
            c: "To remove elements from an array",
            d: "To find an element in an array",
            correct: "a"
        },
        {
            question: "What is the role of the `replace` method in JavaScript?",
            a: "To replace a specified value with another value in a string",
            b: "To remove an element from the DOM",
            c: "To modify an element's attributes",
            d: "To create a new node",
            correct: "a"
        },
        {
            question: "What is the significance of the `margin` CSS property?",
            a: "It sets the margin area on all four sides of an element",
            b: "It changes the size of an element",
            c: "It is used for animations",
            d: "It modifies an element's attributes",
            correct: "a"
        },
        {
            question: "What is the purpose of the `filter` method in JavaScript?",
            a: "To create a new array with all elements that pass the test implemented by the provided function",
            b: "To create a new array",
            c: "To remove elements from an array",
            d: "To find an element in an array",
            correct: "a"
        },
        {
            question: "What is the role of the `addEventListener` method in JavaScript?",
            a: "To attach an event handler to an element",
            b: "To create a new event",
            c: "To modify an element's attributes",
            d: "To remove an element from the DOM",
            correct: "a"
        },
        {
            question: "What is the significance of the `position` CSS property?",
            a: "It specifies the positioning method of an element",
            b: "It changes the size of an element",
            c: "It is used for animations",
            d: "It modifies an element's attributes",
            correct: "a"
        },
        {
            question: "What is the purpose of the `join` method in JavaScript?",
            a: "To join all elements of an array into a string",
            b: "To create a new array",
            c: "To remove elements from an array",
            d: "To find an element in an array",
            correct: "a"
        },
        {
            question: "What is the role of the `focus` method in JavaScript?",
            a: "To set focus on a specified element",
            b: "To create a new element",
            c: "To modify an element's attributes",
            d: "To remove an element from the DOM",
            correct: "a"
        },
        {
            question: "What is the significance of the `overflow` CSS property?",
            a: "It specifies what happens if content overflows an element's box",
            b: "It changes the size of an element",
            c: "It is used for animations",
            d: "It modifies an element's attributes",
            correct: "a"
        },
        {
            question: "What is the purpose of the `includes` method in JavaScript?",
            a: "To determine whether an array includes a certain value among its entries",
            b: "To create a new array",
            c: "To remove elements from an array",
            d: "To find an element in an array",
            correct: "a"
        },
        {
            question: "What is the role of the `getElementById` method in JavaScript?",
            a: "To return the element that has the ID attribute with the specified value",
            b: "To create a new element",
            c: "To modify an element's attributes",
            d: "To remove an element from the DOM",
            correct: "a"
        },
        {
            question: "What is the significance of the `flex-basis` property in CSS Flexbox?",
            a: "It defines the default size of an element before the remaining space is distributed",
            b: "It sets the size of an element",
            c: "It changes the color of an element",
            d: "It is used for animations",
            correct: "a"
        },
        {
            question: "What is the purpose of the `some` method in JavaScript?",
            a: "To test whether at least one element in the array passes the test implemented by the provided function",
            b: "To create a new array",
            c: "To remove elements from an array",
            d: "To find an element in an array",
            correct: "a"
        },
        {
            question: "What is the role of the `getAttribute` method in JavaScript?",
            a: "To return the value of a specified attribute on an element",
            b: "To create a new node",
            c: "To modify an element's attributes",
            d: "To remove an element from the DOM",
            correct: "a"
        },
        {
            question: "What is the significance of the `border` CSS property?",
            a: "It sets the border around an element",
            b: "It changes the size of an element",
            c: "It is used for animations",
            d: "It modifies an element's attributes",
            correct: "a"
        },
        {
            question: "What is the purpose of the `concat` method in JavaScript?",
            a: "To merge two or more arrays",
            b: "To create a new array",
            c: "To remove elements from an array",
            d: "To find an element in an array",
            correct: "a"
        },
        {
            question: "What is the role of the `setTimeout` function in JavaScript?",
            a: "To execute a function after a specified number of milliseconds",
            b: "To create a new timer",
            c: "To clear a timer",
            d: "To manage animations",
            correct: "a"
        },
        {
            question: "What is the significance of the `flex-shrink` property in CSS Flexbox?",
            a: "It defines the ability of a flex item to shrink if necessary",
            b: "It sets the size of an element",
            c: "It changes the color of an element",
            d: "It is used for animations",
            correct: "a"
        },
        {
            question: "What is the purpose of the `unshift` method in JavaScript?",
            a: "To add one or more elements to the beginning of an array",
            b: "To create a new array",
            c: "To remove elements from an array",
            d: "To find an element in an array",
            correct: "a"
        },
        {
            question: "What is the role of the `scroll` event in JavaScript?",
            a: "To trigger a function when the document view is scrolled",
            b: "To create a new event",
            c: "To modify an element's attributes",
            d: "To remove an element from the DOM",
            correct: "a"
        },
        {
            question: "What is the significance of the `z-index` CSS property?",
            a: "It sets the stack order of an element",
            b: "It changes the size of an element",
            c: "It is used for animations",
            d: "It modifies an element's attributes",
            correct: "a"
        },
        {
            question: "What is the purpose of the `reverse` method in JavaScript?",
            a: "To reverse the order of the elements in an array",
            b: "To create a new array",
            c: "To remove elements from an array",
            d: "To find an element in an array",
            correct: "a"
        },
        {
            question: "What is the role of the `addEventListener` method in JavaScript?",
            a: "To attach an event handler to an element",
            b: "To create a new event",
            c: "To modify an element's attributes",
            d: "To remove an element from the DOM",
            correct: "a"
        },
        {
            question: "What is the significance of the `opacity` CSS property?",
            a: "It sets the transparency level of an element",
            b: "It changes the size of an element",
            c: "It is used for animations",
            d: "It modifies an element's attributes",
            correct: "a"
        },
        {
            question: "What is the purpose of the `push` method in JavaScript?",
            a: "To add one or more elements to the end of an array",
            b: "To create a new array",
            c: "To remove elements from an array",
            d: "To find an element in an array",
            correct: "a"
        },
        {
            question: "What is the role of the `removeEventListener` method in JavaScript?",
            a: "To remove an event handler from an element",
            b: "To create a new event",
            c: "To modify an element's attributes",
            d: "To remove an element from the DOM",
            correct: "a"
        },
        {
            question: "What is the significance of the `display` CSS property?",
            a: "It specifies the display behavior of an element",
            b: "It changes the size of an element",
            c: "It is used for animations",
            d: "It modifies an element's attributes",
            correct: "a"
        },
        {
            question: "What is the purpose of the `slice` method in JavaScript?",
            a: "To return a shallow copy of a portion of an array into a new array object",
            b: "To create a new array",
            c: "To remove elements from an array",
            d: "To find an element in an array",
            correct: "a"
        },
        {
            question: "What is the role of the `setInterval` function in JavaScript?",
            a: "To repeatedly execute a function at specified intervals",
            b: "To create a new timer",
            c: "To clear a timer",
            d: "To manage animations",
            correct: "a"
        }
    ]
};

const quiz = document.getElementById('quiz');
const submitBtn = document.getElementById('submit');
const progressEl = document.getElementById('progress');
const timerEl = document.getElementById('timer');

let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 30;
let selectedQuestions = [];

// Function to select 10 random questions from each category
function selectQuestions() {
    const simpleQuestions = quizData.simple.sort(() => 0.5 - Math.random()).slice(0, 10);
    const mediumQuestions = quizData.medium.sort(() => 0.5 - Math.random()).slice(0, 10);
    const complexQuestions = quizData.complex.sort(() => 0.5 - Math.random()).slice(0, 10);

    selectedQuestions = [...simpleQuestions, ...mediumQuestions, ...complexQuestions].sort(() => 0.5 - Math.random());
}

// Function to load the current question
function loadQuiz() {
    const currentQuizData = selectedQuestions[currentQuestionIndex];
    quiz.innerHTML = `
        <h2>${currentQuizData.question}</h2>
        <label>
            <input type="radio" name="answer" value="a"> ${currentQuizData.a}
        </label>
        <br>
        <label>
            <input type="radio" name="answer" value="b"> ${currentQuizData.b}
        </label>
        <br>
        <label>
            <input type="radio" name="answer" value="c"> ${currentQuizData.c}
        </label>
        <br>
        <label>
            <input type="radio" name="answer" value="d"> ${currentQuizData.d}
        </label>
    `;
    updateProgress();
    startTimer();
}

// Function to start the countdown timer
function startTimer() {
    timeLeft = 30;
    timerEl.textContent = `Time Left: ${timeLeft}s`;

    timer = setInterval(() => {
        timeLeft--;
        timerEl.textContent = `Time Left: ${timeLeft}s`;

        if (timeLeft <= 0) {
            clearInterval(timer);
            submitAnswerAutomatically();
        }
    }, 1000);
}

// Function to automatically submit answer if time runs out
function submitAnswerAutomatically() {
    submitBtn.click();
}

// Function to get the selected answer
function getSelectedAnswer() {
    const answers = document.querySelectorAll('input[name="answer"]');
    let answer;

    answers.forEach((ans) => {
        if (ans.checked) {
            answer = ans.value;
        }
    });
    return answer;
}

// Function to update the progress display
function updateProgress() {
    progressEl.textContent = `Question ${currentQuestionIndex + 1} of ${selectedQuestions.length}`;
}

// Function to submit the answer
function submitAnswer() {
    const answer = getSelectedAnswer();
    if (answer === selectedQuestions[currentQuestionIndex].correct) {
        score++;
        alert("Correct!");
    } else {
        alert(`Wrong! The correct answer was ${selectedQuestions[currentQuestionIndex][selectedQuestions[currentQuestionIndex].correct]}`);
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < selectedQuestions.length) {
        loadQuiz();
    } else {
        showResult();
    }
}

// Function to show the final result
function showResult() {
    clearInterval(timer);
    quiz.innerHTML = `<h2>You answered correctly ${score}/${selectedQuestions.length} questions.</h2>`;
    submitBtn.style.display = "none";
}

// Event listener for the submit button
submitBtn.addEventListener('click', submitAnswer);

// Initialize the quiz
function initQuiz() {
    selectQuestions();
    loadQuiz();
}

initQuiz();
