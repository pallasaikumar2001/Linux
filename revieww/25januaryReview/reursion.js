 let name = "akash";

function reverse(name, n = name.length) {
  if (n === 0) {
    return "";
  } else {
    return name[n - 1] + reverse(name, n - 1);
  }
}

console.log(reverse(name));

//output
//hsaka