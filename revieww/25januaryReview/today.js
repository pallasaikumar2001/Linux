function greet(name) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Hello ${name}`);
    }, 2000);
  });
}

function work(profession) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Work is ${profession}`);
    }, 1000);
  });
}

async function test() {
  try {
    const result = await greet("Rohit");
    console.log(result);

    const result1 = await work("engineer");
    console.log(result1);
  } catch (error) {
    console.error(error);
  }
}

test();
