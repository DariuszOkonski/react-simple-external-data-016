import React from 'react';
import MessageElement from './MessageElement';

const DisplayBoard = (props) => {
  const { messages } = props;

  const displayMessages = messages.map(element =>
    <MessageElement
      key={element.id}
      element={element} />)

  console.log(messages);
  return (
    <div className="board">
      <ul>
        {displayMessages.reverse()}
      </ul>
    </div>
  );
}

export default DisplayBoard;