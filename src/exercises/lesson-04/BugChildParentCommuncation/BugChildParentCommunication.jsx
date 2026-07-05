//Do not change this component
//Update Parent and Child component so that the button increments the counter in Parent.

import Parent from './Parent';

export default function BugChildParentCommunication() {
  return <Parent />;
}

/*
Explanation
•	Callback Props: By passing the increment function as a prop (onIncrement), you give the child a "remote control" to trigger a specific change in the parent's state.
•	Functional State Updates: Inside the Parent, I used setCount((prev) => prev + 1). This is a best practice in React; it ensures that even if state updates happen rapidly, you are always using the most up-to-date value of the count.
•	Unidirectional Flow: Note that the data still only "lives" in the parent. The child doesn't own the count; it simply asks the parent to change it.
*/
