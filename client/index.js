import React from "react";
import * as ReactDOM from 'react-dom/client';
import App from './App.jsx';

ReactDOM.hydrateRoot(
    document.getElementById('root'),
    <div>
        <App />
    </div>
)