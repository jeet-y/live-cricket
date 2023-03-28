import React from 'react';
import ReactDom from 'react-dom/client';
import Header from './components/Header';
import Main from './components/Main';

const App = () => {
    return (
        <div className="app">
            <Header />
            <Main />
        </div>
    )
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(React.createElement(App));
