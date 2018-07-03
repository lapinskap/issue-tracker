# issue-tracker
Pure JavaScript with Bootstrap
# Expensify 
React App created with Andrew Mead course, contains React Router and Redux


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

![Example screenshot](https://raw.githubusercontent.com/lapinskap/lapinskap.github.io/master/assets/img/projects/proj-2/add.jpg)


![Example screenshot](https://raw.githubusercontent.com/lapinskap/lapinskap.github.io/master/assets/img/projects/proj-2/stretch.jpg)

![Example screenshot](https://raw.githubusercontent.com/lapinskap/lapinskap.github.io/master/assets/img/projects/proj-2/thumb.jpg)

## Technologies
* Pure JavaScript
* Bootstrap 5

## Setup
There is no necessary setup, but you always can use live-server to show application in real-time.
Installation via yarn:

```
$ cd ./expensify
$ yarn add --global live-server
$ live-server
```
Alternatively you can use npm:

```
$ cd ./expensify
$ npm install -g live-server
$ live-server
```

## Code Examples

###### Simple Header component created with fat arrow function - contains React Router

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

> With React’s stateless functional components, each component can be easily tested in isolation. No mocking, state manipulation, special libraries, or tricky test harnesses are needed.

###### [Reducer](https://redux.js.org/api-reference/combinereducers) example - catches "log in" and "log out" actions - contains Redux

| [file path](./src/reducers/auth.js)     | 
| :---------------------------------:|


```javascript
export default (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        uid: action.uid
      };
    case 'LOGOUT':
      return {};
    default:
      return state;
  }
};
```

## Features

* React Router
* Redux
* Firebase
* Jest
* Enzyme
* SCSS
* Ecmascript 6

## Status
Project is: _finished_

## Inspiration
Project based on Andrew Mead React Course which I catched on Udemy.com.
