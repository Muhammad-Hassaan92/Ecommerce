import React from 'react';

const Heading = (props) => {
  return (
    <div className='d-flex align-items-center justify-content-center my-5'>
      <div
        className='flex-grow-1 border-bottom border-primary mx-3'
        style={{ height: "3px", borderRadius: "6px" }}
      ></div>
      <h2
        className='mb-0 text-nowrap'
        style={{ color: "rgb(50, 50, 50)" }}
      >
        {props.content}
      </h2>
      <div
        className='flex-grow-1 border-bottom border-primary mx-3'
        style={{ height: "3px", borderRadius: "6px" }}
      ></div>
    </div>
  );
};

export default Heading;