import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import App from './App';

export default function Run(){
    return(<>
    <App />
    </>)
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(< Run />)
reportWebVitals();




