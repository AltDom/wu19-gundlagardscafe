import React from 'react';

const BodyContentBlock = ({ heading = null, paragraphArray }) => {
  return (
    <>
      {heading && <h1>{heading}</h1>}
      {paragraphArray.map((paragraph) => {
        return <p>{paragraph.children[0].text}</p>;
      })}
    </>
  );
};

export default BodyContentBlock;
