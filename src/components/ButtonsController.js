import React from 'react';

const ButtonsController = (props) => {
  return (
    <button
      onClick={props.clickReset}
    >Reset</button>
  );
}

export default ButtonsController;