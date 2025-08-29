### Answer the following questions clearly:

1. What is the difference between **getElementById,
   Ans:
   getElementsByClassName, and querySelector / querySelectorAll**?
   Ans: There are many difference between getElementById, getElementByClassName and querySelector / querySelectorAll. Among them, getElementById is the simplest element. It returns a single element. On the other hand, getElementById, getElementByClassName and querySelector / querySelectorAll are more flexible using this selectors to find current elements

   1. getElementById:
      Purpose: getElementById selects a single elements by using unique id.
      Return: getElementById returns a single Element object. If there are no element with that, it returns Null.
      Usage: It helps our works faster and more simply.
      Example: const element = document.getElementById('our-id')

   2. getElementsByClassName:
      Purpose: getElementsByClassName selects all elements with a specific class name.
      Return: It's a live HTML collection and return HTML Collection
      Usage: It's useful for selecting multiple elements by using specific class
      Example: const ClassName = document.getElementsByClassName(class)
   3. querySelector:
      Purpose: querySelector selects the first element in the document.
      Return: It returns the first element. If there are no found, it returns Null.
      Usage: More flexible for selecting elements using CSS selectors.
      Example: const selector = document.querySelector('querySelector').
   4. querySelectorAll:
      Purpose: querySelectorAll selects all elements that match a CSS selector.
      Return: It returns a static NodeList of all elements that match the specified selectors.
      Usage: Selecting multiple elements with complex CSS selectors.

2. How do you **create and insert a new element into the DOM**?
   Ans: To create and insert a new element into the dom using JavaScript. We can follow these steps:
   Step 1. Create the element:- To create a new HTML element. We can use the document.createElement()
   Step 2. Set Attributes:- Customize the element by adding attributes, Id's, inner content or classes.
   Step 3. Insert into the dom:- Use methods like appendChlid() or append() to add the element to the desired location in the dom.
3. What is **Event Bubbling** and how does it work?
   Ans:
   Event Bubbling is a term in the DOM where the event an element receives is bubbled to its parent, upward in the dom tree, until it gets to the root.

   How it works;

   - Event Triggering: The click event is triggered on the child element, initiating the event propagation.

   - Event Capturing: In the capturing phase, the event propagates from the root of thr DOM down to the target.

   - Event Bubbling: After reaching the target element, the event enters the bubbling phase, propagating back up through the DOM tree to the parent.

   - Listener Behavioar: Event listener are attached to both parent and child elements using addEventListener.

   - Execution Order: When the button is clicked, the child listener executes first (console.log("Child")), followed by the parent listener (console.log("Parent")) as the event bubbles up.

   - Event Bubbling: Clicking the child triggers the event to propagate upward, activating listeners on the parent and grandparent.

   - Console Output: The order is "Child Clicked", "Parent Clicked", "Grandparent Clicked", showing the bubbling flow.

   - Event Object: Each listener receives the event object e, which includes details like e.target and methods like e.stopPropagation().

   - CSS Structure: Visual borders and sizes make the DOM hierarchy and event propagation clear.

4. What is **Event Delegation** in JavaScript? Why is it useful?
   Ans:

   Event Delegation is a pattern based upon the concept of Event Bubbling. It is and event-handling pattern that allows you handle event at a higher level in the DOM tree other the level where the event was first received.

   Why it's useful:

   1. Improves Performance: Attaching a single event listener to a parent is far more efficient than adding hundreds or thousands of individual listener. this saves memory and reduces the workload on the browser, leading to better performance.

   2. Simplifies Code: It makes our code cleaner and easier to manage. You don't have write loops to add listeners to every element.

   3. Handles Dynamic Content: It's particularly useful for elements that are added to the DOM after the page has loaded. Since the listener is on the parent, it automatically works for new child elements without needing to add a new listener every time you create a new element.

5. What is the difference between **preventDefault() and stopPropagation()** methods?
   Ans:
   The preventDefault() and stopPropagation() methods in JS are used to control event behavior but they serve different purposes. preventDefault() stops the default browser action for an event, while stopPropagation prevents the event from the bubbling up the dom tree.

there are many difference of preventDefault() and stopPropagation() methods;

1.preventDefault()
Purpose: Prevents the default browser action

Action: Stops form link navigation etc.

Propagation: Does not effect event propagation.

2. stopPropagation()

Purpose: Stops event from bubbling up the DOM

Action: Stops the event from reaching parent elements.

Propagation: Stops event propagation.
