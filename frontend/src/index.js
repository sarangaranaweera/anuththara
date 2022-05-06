import ReactDOM from 'react-dom/client';
import React from 'react';

import App from '../components/App';


const rootElement = document.getElementById('app');
const root = ReactDOM.createRoot(rootElement);

root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);