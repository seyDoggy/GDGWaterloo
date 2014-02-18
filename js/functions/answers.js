// Answer: Simulated processing sequence for Example 1
function foo(){
    //define bar once
    function bar() {
        return 3;
    }
    //redefine it
    function bar() {
        return 8;
    }
    //return its invocation
    return bar(); //8
}
document.getElementById('target').innerHTML = foo();


// ###########################################################


// Answer 2: Simulated processing sequence for Example 2
function foo(){
    //a declaration for each function expression
    var bar = undefined;
    var bar = undefined;
    //first Function Expression is executed
    bar = function() {
        return 3;
    };
    // Function created by first Function Expression is invoked
    return bar();
    // second Function Expression unreachable
}
document.getElementById('target').innerHTML = foo();


// ###########################################################


// Answer 3: Simulated processing sequence for Example 3
// Same as Example 2
// Function declaration is hoisted to the top
function foo(){
    //a declaration for each function expression
    var bar = undefined;
    var bar = undefined;
    //first Function Expression is executed
    bar = function() {
        return 3;
    };
    // Function created by first Function Expression is invoked
    return bar();
    // second Function Expression unreachable
}
// execution falls to the bottom
document.getElementById('target').innerHTML = foo();


// ###########################################################


// Answer 4: Simulated processing sequence for Example 4
function foo(){
    //a declaration for each function expression
    var bar = undefined;
    var bar = undefined;
    return bar(); //TypeError: "bar not defined"
    //neither Function Expression is reached
}
document.getElementById('target').innerHTML = foo();