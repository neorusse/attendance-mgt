# [Attendance Management App](https://neorusse.github.io/attendance-mgt/)

### Project Description

A web [App](https://neorusse.github.io/attendance-mgt/) that keeps track of a company's staff meeting attendance.

### Table of Content

[Features](#features)<br/>
[Technology Used](#technology-used)<br/>
[Installation](#installation)<br/>
[Development](#development)<br/>
[API End Points](#api-end-points)<br/>
[License](#license)<br/>
[Credits](#credits)<br/>
[Author](#author)

### Features

Admin can create employee.<br/>
Admin can read employee.<br/>
Admin can update employee attendance status.<br/>
Admin can delete an employee.<br/>
Employee can view his meeting attendance record.<br/>

### Technology Used

Modern JavaScript features and technology was used for this [project](https://neorusse.github.io/api-sandbox/).

New features of ECMAScript 6 is also known as ES6 and ECMAScript 2015 such as const, let, arrow function, destructuring, array map and find method were adopted.

NodeJS is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows you to run JavaScript on the server.

JSON-Server enables one to get a full fake REST API with zero coding in less than 30 seconds (seriously).

CSS - Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language like HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.

HTML - Hypertext Markup Language is the standard markup language for creating web pages and web applications. With Cascading Style Sheets and JavaScript, it forms a triad of cornerstone technologies for the World Wide Web.

Codes were written in accordance with [Airbnb JavaScript style guide](https://github.com/airbnb/javascript).

### Installation

```bash
npm install
npm start
```

The server runs on port 9090.

### Development

This project uses [EditorConfig](http://editorconfig.org) to standardize text editor configuration. Visit this [link](http://editorconfig.org) for more details.

### API End Points

#### API URL

The API was hosted on Heroku and can be access via [Attendance-Mgt](https://russ-epic-mail.herokuapp.com/)

| S/N | HTTP VERB | ENDPOINT     | FUNCTIONALITY            |
| --: | --------- | ------------ | ------------------------ |
|   1 | POST      | /employee    | Admin create employee    |
|   2 | POST      | /employee    | Enable employee to login |
|   3 | GET       | /employee    | Get all employee         |
|   4 | GET       | /employee/id | Get an employee          |
|   5 | PUT       | /employee/id | Update an employee       |
|   6 | DELETE    | /employee/id | Delete an employee       |

### License

[MIT](https://opensource.org/licenses/MIT)

### Credits

I am grateful to Decagon BootCamp facilitators team for providing needed guidiance and mentoring towards the realization of this project.

### Author

[Russell Nyorere](https://neorusse.github.io/)
