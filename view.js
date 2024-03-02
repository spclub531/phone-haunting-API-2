document.addEventListener('DOMContentLoaded', function() {
    const keyDisplay = document.querySelector('.key-display');
    const keycodeDisplay = document.querySelector('.keycode-display');
  
    document.addEventListener('keydown', function(event) {
      const pressedKey = event.key;
      const keyCode = event.keyCode;
      const key = event.key;
      const ctrlKey = event.ctrlKey;
      const altKey = event.altKey;
      const shiftKey = event.shiftKey;
      const metaKey = event.metaKey;
      const code = event.code;
      
      keyDisplay.textContent = `Pressed Key: ${pressedKey}`;
      keycodeDisplay.textContent = `Keycode: ${keyCode}`;
      console.log(event);
      if (ctrlKey) {
        console.log('Control key is pressed');
      }
      if (altKey) {
        console.log('Alt key is pressed');
      }
      if (shiftKey) {
        console.log('Shift key is pressed');
      }
      if (metaKey) {
        console.log('Meta key is pressed');
      }
      console.log(code);
    });
  });
  