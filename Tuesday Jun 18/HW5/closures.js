// closures.js

// Exercise 1: Basic Closures
// createGreeting takes a greeting string and returns a function that appends a name to the greeting.
export function createGreeting(greeting) {
    return function(name) {
      return `${greeting} ${name}`;
    };
  }
  
  // Example usage:
  // const sayHello = createGreeting("Hello");
  // console.log(sayHello("Alice"));  // Outputs: "Hello Alice"
  // const sayHi = createGreeting("Hi");
  // console.log(sayHi("Bob"));  // Outputs: "Hi Bob"
  
  // Exercise 2: Counter
  // createCounter initializes a counter to 0 and returns an object with methods to increment and get the counter value.
  export function createCounter() {
    let counter = 0;
  
    return {
      increment() {
        counter++;
        return counter;
      },
      getValue() {
        return counter;
      }
    };
  }
  
  // Example usage:
  // let counter = createCounter();
  // console.log(counter.getValue());  // Outputs: 0
  // console.log(counter.increment());  // Outputs: 1
  // console.log(counter.increment());  // Outputs: 2
  // console.log(counter.getValue());  // Outputs: 2
  
  // Exercise 3: Function Store
  // functionStore allows storing functions by key and retrieving them for execution.
  export function functionStore() {
    const store = {};
  
    return {
      store(key, fn) {
        store[key] = fn;
      },
      run(key, ...args) {
        if (key in store) {
          return store[key](...args);
        } else {
          throw new Error(`Function not found for key: ${key}`);
        }
      }
    };
  }
  
  // Example usage:
  // let store = functionStore();
  // store.store("add", (a, b) => a + b);
  // console.log(store.run("add", 5, 7)); // Outputs: 12
  
  // Exercise 4: Private Variables
  // createPerson creates a person object with private variables and methods to get and set the name.
  export function createPerson(name) {
    let privateName = name;
  
    return {
      getName() {
        return privateName;
      },
      setName(newName) {
        privateName = newName;
      }
    };
  }
  
  // Example usage:
  // let person = createPerson("Alice");
  // console.log(person.getName());  // Outputs: "Alice"
  // person.setName("Bob");
  // console.log(person.getName());  // Outputs: "Bob"
  
  // Exercise 5: Limited Call Function
  // createLimitedCallFunction returns a function that can only be called a specified number of times.
  export function createLimitedCallFunction(fn, limit) {
    let callCount = 0;
  
    return function(...args) {
      if (callCount < limit) {
        callCount++;
        return fn(...args);
      }
    };
  }
  
  // Example usage:
  // function sayHello() {
  //   console.log("Hello!");
  // }
  // let limitedHello = createLimitedCallFunction(sayHello, 3);
  // limitedHello(); // Outputs: "Hello!"
  // limitedHello(); // Outputs: "Hello!"
  // limitedHello(); // Outputs: "Hello!"
  // limitedHello(); // No output, subsequent calls are ignored
  
  // Exercise 6: Rate Limiter
  // createRateLimiter returns a function that limits how often a given function can be called within a specified interval.
  export function createRateLimiter(fn, limit, interval) {
    let callCount = 0;
    let startTime = Date.now();
  
    return function(...args) {
      const now = Date.now();
      if (now - startTime > interval) {
        callCount = 0;
        startTime = now;
      }
  
      if (callCount < limit) {
        callCount++;
        return fn(...args);
      }
    };
  }
  
  // Example usage:
  // function logMessage(message) {
  //   console.log(message);
  // }
  // let limitedLog = createRateLimiter(logMessage, 2, 1000); // Allow 2 calls every 1000 milliseconds
  // limitedLog("Hello"); // "Hello" is logged
  // limitedLog("World"); // "World" is logged
  // limitedLog("Again"); // This call is ignored
  