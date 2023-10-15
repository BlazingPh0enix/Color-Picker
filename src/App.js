import React from 'react';
import ColorPicker from './components/ColorPicker';

const App = () => {
  const colors = ['red', 'lime', 'blue', 'purple', 'orange', 'pink', 'yellow', 'green', 'teal', 'brown', 'gray', 'violet', 'indigo', 'cyan', 'magenta'];

  return (
    <div>
      <ColorPicker colors={colors} />
    </div>
  );
}

export default App;
