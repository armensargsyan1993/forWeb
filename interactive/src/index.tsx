import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

let n: string = 'aaa'
render(
    <div>
        <h1>A</h1>
        <App/>
    </div>,
    document.getElementById('app'))