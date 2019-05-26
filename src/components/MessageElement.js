import React from 'react';

const MessageElement = (props) => {
  const { element } = props;

  return (
    <li>
      <h4>{element.title}</h4>
      <p>{element.body}</p>
    </li>
  );
}

export default MessageElement;