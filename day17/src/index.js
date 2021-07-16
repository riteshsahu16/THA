import react from 'react';
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Cards from './components/cards'
// Container : overflow
//Card
//: Props: Name and Calaroies



//Handle rendering of array of cards
ReactDom.render(
    <Cards></Cards>, document.getElementById('root')
)