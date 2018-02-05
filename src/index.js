// Create a new component. Should produce some HTML
import React from 'react';
import ReactDOM from "react-dom";

const App = () => {
    return <div>Hi!</div>;
}

// Take component's generated HTML and put on the page
ReactDOM.render(<App />, document.querySelector('.container'));
// ReactDOM.render(App(), document.querySelector('.container'));
