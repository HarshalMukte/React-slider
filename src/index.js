import React from 'react';
import * as ReactDomClient from 'react-dom/client'
import './App.css';
import App from './App';

const container = document.getElementById("root")

const root = ReactDomClient.createRoot(container);

root.render(<App tab="home"/>)


