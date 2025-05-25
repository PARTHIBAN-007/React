import React, { useReducer } from 'react';

const initialState = {
  count: 0,
  showText: true,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'TOGGLE_TEXT':
      return { ...state, showText: !state.showText };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
};

const CounterToggle = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>useReducer Counter + Toggle</h2>
      <p>Count: {state.count}</p>
      {state.showText && <p>This is toggleable text.</p>}

      <div style={{ marginTop: '1rem' }}>
        <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
        <button onClick={() => dispatch({ type: 'TOGGLE_TEXT' })}>Toggle Text</button>
        <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
      </div>
    </div>
  );
};

export default CounterToggle;
