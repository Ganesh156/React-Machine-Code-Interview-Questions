// Popover.js

import React, { useState,useRef,useEffect } from 'react';

const Popover = ({ content, children }) => {
  const [showPopover, setShowPopover] = useState(false);
  const triggerRef = useRef(null);

  const togglePopover = () => {
    setShowPopover(!showPopover);
  };

  useEffect(() => {
    if (showPopover && triggerRef.current) {
      const triggerRect = triggerRef.current.parentElement.getBoundingClientRect();
      const contentRect = triggerRef.current.getBoundingClientRect();
      const arrow = triggerRef.current.querySelector('.popover-pointer');
      arrow.style.left = `${triggerRect.left + triggerRect.width / 2 - contentRect.left}px`;
    }
  }, [showPopover]);


  console.log(triggerRef.current)
  return (
    <div className="popover-container" ref={triggerRef}>
      <div onClick={togglePopover}>{children}</div>
      {triggerRef.current &&showPopover && (
        <div className="popover-content" >
        <div className="popover-pointer" />
        {content}
      </div>)}
    </div>
  );
};

export default Popover;