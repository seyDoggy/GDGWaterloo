# Diving Deep into Functions

## Function Declarations vs Function Expressions

- see examples 1 through 4
- see answers 1 through 4 to see how they are actually parsed
- Hoisting will get you every time, expressions are better
- Expressions are more versatile
- Declarations not allowed in non-function blocks (i.e. if)
		
		// Firefox will have issues here
		function foo() {
		    if(false) {
		        function x() {};
		    }
		    return x;
		}
		alert(foo());

- Expressions are more versatile

		//Function Expressions can be used to name other function executions
		var sayHello = alert.curry("hello!");
		sayHello();

## Anonymous vs Named

- Anonymous functions are the backbone of javascript
	- first class objects
	- passed as arguments
	- deferred as callbacks
	- generally awesome
	- hard to debug
	- needs to be wrapped in () and start with some other character like , or ! to avoid ambiguity with function declarations

- Named and/or cached functions
	- stored in memory
	- still first class object
	- passed as argument
	- passed in non-function block
	- deferred as callback... unless arguments are needed
	- easier to debug... sometimes

If the same pattern happens more than once, cache it.

## SIF, SIFE and SEF

Self Invoking Functions, Self Invoking Functions Expression and Self Executing Functions, oh my.

- See examples 5 through 8
- the () at the end of any expression statement is the magic sauce
- someFunc() is immediately invoked, someFunc is not (can be used as callback)
- depending on context (i.e. not a callback), someFunc is just a string when not self invoked

## Arguments, objects, strings, callbacks... callbacks, strings, objects, arguments 

- see examples 9 through 12
- everything is an object, objects are everything

## Scope and closure

- see example 13

## Constructors and Prototypes

Constructors are a very powerful way to make an object with both private and public variables and methods. Much like classes, constructors can be instantiated and reused.

Prototypes are very efficient ways to extend objects, both before and after instantiation.

- see examples 14 through 15