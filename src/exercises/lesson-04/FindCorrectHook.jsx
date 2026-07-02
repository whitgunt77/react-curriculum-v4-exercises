// TOPIC: Choose the correct tool: useRef vs useState
// TASK: Make sure it updates the text *without* triggering a re-render
import { useState } from 'react';

export default function FindCorrectHook() {
  const [clickCount, setClickCount] = useState(0);

  function handleClick() {
    setClickCount((prevCount) => prevCount + 1);
  }

  return (
    <div>
      <h2>useRef vs useState Decision</h2>
      <button onClick={handleClick}>Clicks: {clickCount}</button>
    </div>
  );
}

// Explanation
/*
Why this is the correct choice:
•	Declarative UI: You tell React what the UI should look like based on the state (clickCount), and React handles the how (the re-rendering process).
•	Reliability: Using useState prevents the conflict between the actual data and the visible text. If you use the manual DOM manipulation method (bypassing re-renders), your UI will quickly fall out of sync with your internal data the moment any other part of the component re-renders.
•	Performance: React's re-rendering is highly optimized. Updating a simple number in state is extremely fast and will not cause performance issues in 99% of web applications.
*/
