function receivesAFunction(callback) {
  callback()
}

function returnsANamedFunction() {
  return function newfcn() {console.log("meep")}
};

function returnsAnAnonymousFunction() {
  return function() {console.log("moop")}
};
