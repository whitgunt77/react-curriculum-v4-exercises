// TOPIC: Correct useRef usage to control DOM elements
// TASK: Implement focusing an input field when the button is clicked.
import { useRef } from 'react';

export default function FillRefFocus() {
  const inputRef = useRef(null);

  function focusInput() {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }

  return (
    <div>
      <h2>useRef: Focusing an Input</h2>

      <input ref={inputRef} type="text" placeholder="Type here..." />

      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

/*
Explanation
•	useRef(null): We initialize the ref with null because the component hasn't rendered yet, so there is no DOM element to reference at the start.
•	ref={inputRef}: This is a special React prop. Once the component mounts, React automatically assigns the actual underlying <input> DOM node to the inputRef.current property.
•	inputRef.current.focus(): Since inputRef.current now holds the browser's native input element, you can call any standard DOM methods, such as focus(), select(), or scrollIntoView().
*/
