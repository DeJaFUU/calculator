import React from 'react';import ResultScreen from './ResultScreen';
import ComputationScreen from './ComputationScreen';

const screen = (props) => (
  <section className="screen">
    <ResultScreen> {props.display} </ResultScreen>
    <ComputationScreen> {props.updatedNumber} </ComputationScreen>
  </section>
);

export default screen;