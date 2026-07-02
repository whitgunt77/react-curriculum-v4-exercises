//src/exercises/lesson-03/BugEffectLoop.jsx

/* 
  BUG #1 — Effect Issue 

  This component uses useState and useEffect to update a value.
  The effect is running on every render, which causes the
  component to behave incorrectly.
  */

import { useEffect, useState } from 'react';

export default function BugEffectLoop() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCount((prevCount) => prevCount + 1);
  }, []);

  return <p>Bug 1 Count: {count}</p>;
}

// Explanation:
// (Write your explanation here)
/*
The code created an infinite loop because useEffect runs after every render by default.
By calling setCount inside the effect without a dependency array, the component re-rendered,
triggering the effect again, and so on. Adding the empty dependency array [] ensures the
effect runs only once on mount.
*/
