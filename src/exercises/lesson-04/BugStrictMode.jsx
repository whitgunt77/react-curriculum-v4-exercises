// TOPIC: StrictMode Effects and Cleanup
// TASK: Notice how the count increments incorrectly based on the `setInterval` logic. Fix the useEffect so that the counter increments correctly.

import { useEffect, useState } from 'react';

export default function BugStrictMode() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return (
    <div>
      <h2>StrictMode Timer Bug Fixed</h2>
      <p>Count: {count}</p>
    </div>
  );
}

// Write your explanation of how StrictMode helps us catch this bug
/*
The bug occurs because the original useEffect lacked a cleanup function,
causing multiple intervals to stack up every time the component mounted.
In React's StrictMode, this issue is amplified because React intentionally
mounts, unmounts, and remounts components during development to reveal such flaws.
*/
