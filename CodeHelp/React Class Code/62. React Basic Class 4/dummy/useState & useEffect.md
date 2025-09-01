1. Difference between useState and useEffect Hooks ?

Ans: In React, `useState` and `useEffect` are two essential hooks used to manage state and side effects in functional components. Let's discuss these hooks in detail and understand them with a local example.

### `useState` Hook

The `useState` hook is used to manage the state of a component. When we need to dynamically change a variable's value and reflect that change in the UI, we use `useState`.

#### Example:

```jsx
import React, { useState } from "react";

function Counter() {
  // Using useState hook to initialize the count state
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You have clicked the button {count} times.</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default Counter;
```

In this example:

- We used the `useState` hook to initialize a state variable called `count` with an initial value of 0.
- The `setCount` function is used to update the value of `count`.
- When the user clicks the button, the `setCount` function increments the `count` by 1, and the UI automatically updates.

### `useEffect` Hook

The `useEffect` hook is used to handle side effects. Side effects are operations that should happen after the rendering, such as data fetching, subscriptions, or manually manipulating the DOM.

#### Example:

```jsx
import React, { useState, useEffect } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // Setting an interval to update the seconds state every second
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    // Returning a cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []); // Empty dependency array means this effect runs only once after the initial render

  return (
    <div>
      <p>Timer: {seconds} seconds</p>
    </div>
  );
}

export default Timer;
```

In this example:

- We used the `useState` hook to initialize a state variable called `seconds`.
- The `useEffect` hook sets up an interval that increments the `seconds` state every second.
- The empty dependency array (`[]`) indicates that this effect should only run once, after the component mounts.
- The cleanup function (`return () => clearInterval(interval)`) clears the interval when the component unmounts to prevent memory leaks.

### Summary

- The `useState` hook is used to manage state variables.
- The `useEffect` hook is used to manage side effects that need to happen after rendering.

I hope this explanation and the examples make the difference between `useState` and `useEffect` hooks clear.

### Summary

- useState hook का उपयोग state variables को manage करने के लिए किया जाता है।
- useEffect hook का उपयोग side effects को manage करने के लिए किया जाता है जो rendering के बाद perform होने चाहिए।

# Explanation in Hinglish✅

React mein `useState` aur `useEffect` hooks dono functional components mein state aur side effects manage karne ke liye use hote hain. Dono ke beech mein kuch differences hain jo ki hum ek example ke saath samjhenge.

### `useState`

`useState` hook component ki state manage karne ke liye use hota hai. Jab humein kisi variable ko update karna hota hai aur us update ke sath component ko re-render karna hota hai, tab hum `useState` ka use karte hain.

Example: Ek counter component jo button click par increment hota hai.

```jsx
import React, { useState } from "react";

function Counter() {
  // State define karna useState hook ke sath
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Current count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;
```

Is example mein, `count` state variable hai aur `setCount` function se hum us variable ko update kar rahe hain. Jab button click hota hai, `setCount` ko call karke state ko update karte hain aur component re-render hota hai.

### `useEffect`

`useEffect` hook side effects handle karne ke liye use hota hai, jaise ki data fetch karna, DOM manipulations, subscriptions, etc. Yeh hook component ke lifecycle events jese `componentDidMount`, `componentDidUpdate`, aur `componentWillUnmount` ko handle karta hai.

Example: Ek component jo API se data fetch karta hai aur render karta hai.

```jsx
import React, { useState, useEffect } from "react";

function DataFetcher() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Side effect: data fetch karna
    fetch("https://api.example.com/data")
      .then((response) => response.json())
      .then((data) => setData(data));

    // Clean up function (optional)
    return () => {
      // Cleanup code agar zarurat ho
    };
  }, []); // Empty dependency array means yeh effect sirf component mount hone par run hoga

  return (
    <div>
      <p>Data: {data ? JSON.stringify(data) : "Loading..."}</p>
    </div>
  );
}

export default DataFetcher;
```

Is example mein, `useEffect` hook API call karta hai jab component mount hota hai. `useEffect` ka second argument dependency array hai. Agar yeh array empty hai, to effect sirf once run hota hai jab component mount hota hai. Agar yahan kuch dependencies di gayi hoti, to effect tab run hota jab wo dependencies update hoti.

### Summary

1. **`useState`**:
   - State variables manage karne ke liye.
   - Example: Counter component jo button click par increment hota hai.
2. **`useEffect`**:
   - Side effects manage karne ke liye.
   - Example: Data fetching component jo API se data fetch karta hai.

Dono hooks milke React functional components ko powerful aur flexible banate hain state aur side effects handle karne ke liye.
