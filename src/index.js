import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }
  
  const user = {
    firstName: 'Jovana',
    lastName: 'Usorac',
  };
  
  const element = <h1>Hello my name is {formatName(user)}!</h1>;
  
  function myFunction(user){
    return user.lastName;
  }
  const element2 = <h1> Trying out my function for last name only : {myFunction(user)} ;
  Trying out two functions : 
  Function formatName : {formatName(user)}
  Function lastName : {lastName(user)}</h1>
  ReactDOM.render(element2, document.getElementById('root'));
  
  ReactDOM.render(element2, document.getElementById('root'));
  

ReactDOM.render(<App />, document.getElementById('root'));

// I dont understand why 2 functions between <h1></h1> dont work, it only works with one
/*I also dont get why I can only get element or element2 written out, if I put them together
in ReactDOM. it wont work*/
serviceWorker.unregister();
