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
Pure JavaScript web application. It was a challenge to do something without any framework.

## Screenshots

![Example screenshot]()


![Example screenshot]()

![Example screenshot]()

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

| [file path](./src/components/Header.js)     | 
| :---------------------------------:|

```javascript
const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard Page </NavLink>
        <NavLink to="/create" activeClassName="is-active"> Create Expense</NavLink>
        <NavLink to="/help"  activeClassName="is-active">Help Page</NavLink>
    </header>
    );

export default Header;
```

> Lorem ipsum sit amet


## Features

* Pure JavaScript
* Bootstrap (so with linked jQuery library)
* ChanceJS - generate global unique id for each issue

## Status
Project is: _finished_

## Inspiration
Project inspired by my friend 
