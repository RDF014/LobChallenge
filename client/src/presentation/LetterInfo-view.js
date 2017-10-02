import React from 'react';

function LetterInfo (props) {
  return (
    <div>
      <h3>Letter successfully sent to {props.letter.to.name}</h3>
      <h4>Preview letter <a href={props.letter.url}>here</a></h4>
    </div>
  );
}

export default LetterInfo;