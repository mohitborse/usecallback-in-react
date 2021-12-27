import React, { useState, useCallback } from 'react';
import { render } from 'react-dom';
import Button from './button';

const App = () => {
  const [open, setOpen] = useState(false);
  const onClick = useCallback((e) => {
    setOpen((prev) => !prev);
  }, []);
  return (
    <div>
      {open && <div>show value of open: {open ? 'true' : 'false'}</div>}
      <br />
      <Button callbackClick={onClick} />
    </div>
  );
};

render(<App />, document.getElementById('root'));
