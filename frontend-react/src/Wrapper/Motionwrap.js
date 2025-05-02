import React from 'react';

const Motionwrap = (Component, classNames) => function HOC() {
  return (
    <div
      className={`${classNames} app__flex`}
    >
      <Component />
    </div>
  );
};

export default Motionwrap;