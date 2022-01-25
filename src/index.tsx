import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { TestCard } from './TestData';
import CardMaker from './CardMaker/CardMaker';


ReactDOM.render(
  <React.StrictMode>
    <CardMaker cardMaker={TestCard} />
  </React.StrictMode>,
  document.getElementById('root')
);