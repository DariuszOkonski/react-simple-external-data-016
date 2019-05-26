import React from 'react';

const DisplayData = (props) => {
  return (
    <React.Fragment>
      <h2>External data app</h2>
      <h3>Number of messages: <span>{props.numberOfElements}</span></h3>
    </React.Fragment>
  );
}

export default DisplayData;