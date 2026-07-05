// TOPIC: Event Bubbling & Stopping Propagation
// TASK: Ensure only the inner button's action triggers an alert when the button is pushed

export default function BugEventPropagation() {
  function handleOuterClick() {
    alert("RED BOX CLICKED ❌ Don't show me!");
  }

  function handleInnerClick(e) {
    e.stopPropagation();

    alert('Button Clicked ✅');
  }

  return (
    <>
      <h2>Stopping Event Propagation</h2>
      <div
        style={{ padding: 20, border: '2px solid red' }}
        onClick={handleOuterClick}
      >
        <button onClick={handleInnerClick}>Click inner button</button>
      </div>
    </>
  );
}

// Explanation
/*
When you click the button, you are technically clicking both the <button> and the <div> that contains it. By default, browsers "bubble" the event from the target element (the button) up to its ancestors (the div, then body, etc.).
•	e.stopPropagation(): This method acts as a roadblock. It ensures that once the button's click handler finishes, the event is "consumed" and does not notify the parent <div> that a click occurred.
•	Why it matters: This is essential for building complex UIs, such as buttons inside cards or modal windows, where you want a click on a specific action button to execute its own logic without accidentally triggering an action on the container (like closing a modal or navigating to a new page).
*/
