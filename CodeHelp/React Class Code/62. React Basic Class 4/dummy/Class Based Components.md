# Class Based Components

`NOTE: Not Used now and Not Important Topic this is just for knowledge purpose`

Class-based components React ke wo components hote hain jo ES6 class syntax ka use karke banaye jate hain. Ye functional components se zyada powerful hote hain kyunki ye state aur lifecycle methods ko handle kar sakte hain.

Chaliye ek example ke through samajhte hain.

### Example: Ek Simple Class-based Component

```javascript
import React, { Component } from "react";

class HelloWorld extends Component {
  render() {
    return (
      <div>
        <h1>Hello, World!</h1>
      </div>
    );
  }
}

export default HelloWorld;
```

Yahaan pe:

1. **Class Declaration**: `HelloWorld` naam ki class banayi gayi hai jo `Component` se inherit kar rahi hai. React ke sabhi class-based components ko `Component` class ko extend karna padta hai.

2. **Render Method**: Har class-based component me ek `render` method hona chahiye jo JSX return karta hai. Yeh method define karta hai ki component ka UI kaisa dikhega.

### State aur Lifecycle Methods

Class-based components ka ek fayda yeh hai ki aap state aur lifecycle methods ka use kar sakte hain. Chaliye ek aur example dekhte hain:

```javascript
import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    // Initial state set kar rahe hain
    this.state = {
      count: 0,
    };
  }

  // Method to increment the count
  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
}

export default Counter;
```

Is example me:

1. **Constructor**: `constructor` method ka use initial state set karne ke liye kiya gaya hai. Super call zaroori hai agar aap `this` keyword ka use constructor ke andar kar rahe hain.

2. **State**: `this.state` ek object hai jo component ki state ko represent karta hai. Yahan, initial state `{ count: 0 }` set ki gayi hai.

3. **setState**: State ko update karne ke liye `this.setState` method ka use kiya jata hai.

4. **Event Handler**: `incrementCount` method ek arrow function hai jo button click hone par state ko update karta hai.

### Summary

Class-based components aapko state aur lifecycle methods ka use karne ka mauka dete hain jo functional components me (React 16.8 se pehle) possible nahi tha. Aajkal, functional components bhi hooks ka use karke ye features offer karte hain, lekin class-based components abhi bhi important hain aur kai legacy codebases me use hote hain.

Umeed hai aapko class-based components samajh aagaye honge!
