import React from 'react';
import ReactDOM from 'react-dom/client';
import Application from './Application';

class App extends React.Component {
  render (){
    return (
      <React.Fragment>
        <h1></h1>
       <Application></Application>

      </React.Fragment>
       
    );
  }
}




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <App />
  
);
