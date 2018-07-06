# issue-tracker
Pure JavaScript with Bootstrap

## Table of contents
* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)


## General info
pp which Pure JavaScript web application. It was a challenge to do something without any framework. I decided to not implement any CSS stylesheets, just raw JavaScript and Bootstrap. In the html file I've included necessary dependencies, so you need internet connection to run application properly.


## Screenshots

![Example screenshot](https://github.com/lapinskap/issue-tracker/blob/master/img/repair.jpg)


![Example screenshot](https://github.com/lapinskap/issue-tracker/blob/master/img/medium.jpg)

![Example screenshot](https://github.com/lapinskap/issue-tracker/blob/master/img/mobile.jpg)

## Technologies
* Pure JavaScript
* Bootstrap 5

## Setup
There is no necessary setup, but you always can use live-server to show application in real-time.
Installation via yarn:

```
$ cd ./issue-tracker
$ yarn add --global live-server
$ live-server
```
Alternatively you can use npm:

```
$ cd ./issue-tracker
$ npm install -g live-server
$ live-server
```

## Code Examples

###### Pure Javascript!!! Hooraayy!!!

| [file path](./main.js)     | 
| :---------------------------------:|

```javascript
function saveIssue(e) {
    var issueDesc = document.getElementById('issueDescInput').value;
    var issueSeverity = document.getElementById('issueSeverityInput').value;
    var issueAssignedTo = document.getElementById('issueAssignedToInput').value;
    var issueId = chance.guid(); //ChanceJS built function
    var issueStatus = 'Open';

    var issue = {
        id: issueId,
        description: issueDesc,
        severity: issueSeverity,
        assignedTo: issueAssignedTo,
        status: issueStatus
    }

    if(localStorage.getItem('issue') == null) {
        var issues = [];
        issues.push(issue);
        localStorage.setItem('issues',JSON.stringify(issues)); 
    } else {
        var issues = JSON.parse(localStorage.getItem(issues));
        issues.push(issue);
        localStorage.setItem('issues',JSON.stringify(issues));
    }

    document.getElementById('issueInputForm').reset();

    fetchIssues();

    e.preventDefault();
}
```

> This function starts by pressing "Add" button


## Features

* Pure JavaScript
* Bootstrap (so with linked jQuery library)
* ChanceJS - generate global unique id for each issue

## Status
Project is: _finished_

## Inspiration
Project inspired by my friend 
