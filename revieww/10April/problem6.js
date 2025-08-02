// const foo = function() {
//     name: "Alice",
//     greet: function() {
//       console.log("Hello, " + this.name);
//     }
//   };
  
//   const person = foo.greet();
//   person()


  const foo = function() {
    return {
      name: "Alice",
      greet: function() {
        console.log("Hello, " + this.name);
      }
    };
  };
  
  const person = foo();    // Get the object returned from foo
  person.greet();          // Output: Hello, Alice
  