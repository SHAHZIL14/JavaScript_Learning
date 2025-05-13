/*JavaScript has a single-threaded, non-blocking, and asynchronous nature, which allows it to handle multiple tasks efficiently without waiting for each one to finish before moving to the next. Let’s break that down and give you a real-life analogy to make it intuitive.

Blocking vs. Non-blocking
Blocking Code
Blocking operations wait until the task is complete before moving on to the next one.

Think of it as a queue at a coffee shop with only one barista, and the barista won’t start the next coffee until the current one is completely finished.

javascript
Copy
Edit
function blocking() {
  console.log("Start brewing coffee...");
  // Simulating a delay (blocking)
  const start = Date.now();
  while (Date.now() - start < 3000) {} // Busy-waiting for 3 seconds
  console.log("Coffee is ready!");
}

blocking();
console.log("Serve customer");
Output:

arduino
Copy
Edit
Start brewing coffee...
(wait 3 seconds)
Coffee is ready!
Serve customer
Everything waits until the task is done.

Non-blocking Code
Non-blocking operations initiate the task and move on, handling the result later.

Think of it like the barista takes an order and sets a timer, then takes the next order while the first coffee brews in a machine.

javascript
Copy
Edit
console.log("Start brewing coffee...");

setTimeout(() => {
  console.log("Coffee is ready!");
}, 3000);

console.log("Serve customer");
Output:

bash
Copy
Edit
Start brewing coffee...
Serve customer
(wait 3 seconds)
Coffee is ready!
Here, the barista (JavaScript engine) doesn’t just stand idle — they keep working on other tasks.

🔁 JavaScript's Asynchronous Nature
JavaScript uses an event loop with a call stack, web APIs, and a callback queue to manage asynchronous tasks like setTimeout, HTTP requests, or reading files.

Real-life analogy: Restaurant Kitchen
Chef (JavaScript engine) can cook only one dish at a time (single-threaded).

Oven or Timer (Web APIs) runs tasks in the background (e.g., baking pizza).

When the oven beeps (task is done), the chef gets notified (callback goes to the queue).

The chef finishes what they’re doing, checks the queue, and then handles the ready dish.

javascript
Copy
Edit
console.log("Order pizza");
setTimeout(() => {
  console.log("Pizza is ready!");
}, 5000);
console.log("Serve drinks");
Output:

scss
Copy
Edit
Order pizza
Serve drinks
(wait 5 seconds)
Pizza is ready!
The kitchen doesn’t stop just because the pizza is baking — drinks get served in the meantime.

Key Concepts
Concept	Description
Single-threaded	Only one task executes at a time
Non-blocking	Doesn’t wait for long tasks to finish
Asynchronous	Defers tasks and handles them when ready
Event loop	Checks if any deferred task is ready to run*/