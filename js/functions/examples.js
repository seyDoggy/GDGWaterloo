// Question: What is alerted in each case?

// // Example 1:
// function foo(){
//     function bar() {
//         return 3;
//     }
//     return bar();
//     function bar() {
//         return 8;
//     }
// }
// document.getElementById('target').innerHTML = foo();


// ###########################################################


// // Example 2:
// function foo(){
//     var bar = function() {
//         return 3;
//     };
//     return bar();
//     var bar = function() {
//         return 8;
//     };
// }
// document.getElementById('target').innerHTML = foo();


// ###########################################################


// // Example 3:
// document.getElementById('target').innerHTML = foo();
// function foo(){
//     var bar = function() {
//         return 3;
//     };
//     return bar();
//     var bar = function() {
//         return 8;
//     };
// }


// ###########################################################


// // Example 4:
// function foo(){
//     return bar();
//     var bar = function() {
//         return 3;
//     };
//     var bar = function() {
//         return 8;
//     };
// }
// document.getElementById('target').innerHTML = foo();


// ###########################################################


// // Example 5: SIF, not cached
// // invoked immediately, returns 3
// document.getElementById('target').innerHTML = (function () {
// 	function bar() {
// 	    return 3;
// 	}
// 	return bar();
// })();


// ###########################################################


// // Example 6: SIFE, cached
// // invoked immediately, returns 3
// var sife = (function () {
// 	function bar() {
// 	    return 3;
// 	}
// 	return bar();
// })();

// document.getElementById('target').innerHTML = sife;


// ###########################################################


// // Example 7: SIFE, cached, with arguments
// // invoked immediately, returns 6
// var sife = (function (val1, val2) {
//     function bar() {
//         return val1 + val2;
//     }
//     return bar();
// })(3,3);

// document.getElementById('target').innerHTML = sife;


// ###########################################################


// // Example 8: SEF, not cached
// // invoked immediately, returns 3
// document.getElementById('target').innerHTML = function sef () {
// 	function bar() {
// 	    return 3;
// 	}
// 	return bar();
// }();


// ###########################################################


// // Example 9: a callback is just an object
// var notSif = (function (val) {
// 	function bar() {
// 	    return val;
// 	}
// 	return bar();
// });

// var callbackFunc = (function(callback) {
// 	var sentence = "The argument passed is a(n) \"";
	
// 	if (
// 		typeof callback == "boolean"
// 		|| typeof callback == "number"
// 		|| typeof callback == "string"
// 		|| typeof callback == "function"
// 	) {

// 		sentence += typeof callback;
// 		sentence += "\". The value is: \"";
// 		sentence += callback;
// 		sentence += "\"";

// 		document.getElementById('target').innerHTML = sentence;

// 	} else if (
// 		Array.isArray(callback)
// 		// || Object.prototype.toString.call( callback ) === '[object Array]'
// 	) {
// 		sentence += Object.prototype.toString.call( callback );
// 		sentence += "\". The values in this array are: \"";
		
// 		for (var i = 0; i < callback.length; i++) {
// 			sentence += callback[i];
// 			if (i < callback.length - 1) {
// 				sentence += ", ";
// 			} else {
// 				sentence += "\"";
// 			}
// 		};
		
// 		document.getElementById('target').innerHTML = sentence;

// 	} else if (typeof callback == "object") {

// 		sentence += typeof callback;
// 		sentence += "\". The value is: \"";
// 		sentence += JSON.stringify(callback);
// 		sentence += "\"";

// 		document.getElementById('target').innerHTML = sentence;

// 	} else {

// 		document.getElementById('target').innerHTML = "Sorry Dave. I cannot do that.";

// 	}
// });

// callbackFunc(true);
// // callbackFunc(3);
// // callbackFunc("hello world");
// // callbackFunc([3,6,9]);
// // callbackFunc({someVal:3});
// // callbackFunc(notSif);
// // callbackFunc(notSif(3));
// // callbackFunc();


// ###########################################################


// // Example 10: a callback is just an object, even when it's an object
// var someObj = {
// 	val : 3
// };

// var callbackFunc = (function(data) {
// 	document.getElementById('target').innerHTML = data.val;
// });

// callbackFunc(someObj);


// ###########################################################


// // Example 11: a callback is still just an object
// var someObj = {
// 	val1 : 3
// 	, val2 : "hello world"
// };

// var callbackFunc = (function(target, data) {
// 	document.getElementById('target').innerHTML = data["val" + target];
// });

// callbackFunc(1,someObj);


// ###########################################################


// // Example 12: srsly, a callback is just an object
// var someArray = ["hello","world"];

// var callbackFunc = (function(target, data) {
// 	document.getElementById('target').innerHTML = data[target[0]] + " " + data[target[1]];
// });

// callbackFunc([0,1],someArray);


// ###########################################################

// // Example 13: Scope and Closure
// var newLine = (function(content) {
// 	var d = 'I am var d, and I am only in newLine scope.';
// 	console.log(d);

// 	var newPara = document.createElement("p")
// 	, newContent = document.createTextNode(content)
// 	, target = document.getElementById('target');
	
// 	newPara.appendChild(newContent);
// 	render = target.appendChild(newPara);
// });

// var outer_scope = function outer_scope(){
// 	var a = 'I am `a` from outer scope'
// 	, b = 'I am `b` from outer scope'
// 	, c = 'I am `c` from outer scope';

// 	newLine( '1. Logging from outer scope before inner scope function declaration.' );
// 	newLine( 'a: ' + a );
// 	newLine( 'b: ' + b );
// 	newLine( 'c: ' + c );
// 	if ( typeof d != "undefined") newLine( 'd: ' + d );
// 	else newLine('d: "undefined"');
// 	newLine( '------------------------------------------' );

// 	var inner_scope_1 = function inner_scope_1(){
// 		newLine( '2. Logging from inside function inner_scope_1 before variable declaration.' );
// 		newLine( 'a: ' + a );
// 		a = 'I will overwrite the outer scope `a`';
// 		newLine( 'Logging from inside function inner_scope_1 after variable declaration.' );
// 		newLine( 'a: ' + a );
// 		newLine( '------------------------------------------' );
// 		var superdeep = function superdeep () {
// 			newLine('3. Logging a from superdeep within inner_scope_1.');
// 			newLine( 'a: ' + a );
// 			newLine('... and c from outer_scope.');
// 			newLine( 'c: ' + c );
// 			newLine( '------------------------------------------' );
// 		};
// 		superdeep();
// 	}

// 	var inner_scope_2 = function inner_scope_2(){
// 		newLine( '4. Logging from inside function inner_scope_2 before variable declaration (notice the variable hoisting!).' );
// 		newLine( 'b: ' + b );
// 		var b = 'I will not overwrite the outer scope `b`';
// 		newLine( 'Logging from inside function inner_scope_2 after variable declaration.' );
// 		newLine( 'b: ' + b );
// 		newLine( '------------------------------------------' );
// 	}

// 	inner_scope_1();
// 	inner_scope_2();

// 	newLine( '5. Logging from outer scope after inner scope executed.' );
// 	newLine( 'a: ' + a );
// 	newLine( 'b: ' + b );
// 	newLine( 'c: ' + c );
// 	if ( typeof d != "undefined") newLine( 'd: ' + d );
// 	else newLine('d: "still undefined"');

// 	newLine( '------------------------------------------' );
// }

// outer_scope();

// ###########################################################

// // Example 14: Normal objects
// var MyObject = (function() {
// 	this.newLine = (function(content) {
// 		var newPara = document.createElement("p")
// 		, newContent = document.createTextNode(content)
// 		, target = document.getElementById('target');
		
// 		newPara.appendChild(newContent);
// 		render = target.appendChild(newPara);
// 	});
// });

// var obj = new MyObject();

// obj.newLine('I am a method of obj: "newLine"');

// MyObject.prototype.test = (function() {
// 	this.newLine('I am a prototype of MyObject: "test"');
// });

// obj.test();

// MyObject.prototype.test = (function() {
// 	this.newLine('I updated the "test" prototype of MyObject');
// });

// obj.test();

// obj.test = (function() {
// 	this.newLine('I updated the "test" method of obj');
// });

// obj.test();

// obj.more = (function() {
// 	this.newLine('I am another method of obj: "more"');
// });

// obj.more();

// obj2 = new MyObject();

// obj2.test();
// obj2.more();

// ###########################################################

// // Example 15: Object literal notaion
// var objLit = {
// 	newLine : (function(content) {
// 		var newPara = document.createElement("p")
// 		, newContent = document.createTextNode(content)
// 		, target = document.getElementById('target');
		
// 		newPara.appendChild(newContent);
// 		render = target.appendChild(newPara);
// 	})
// };

// objLit.newLine('I am a method of objLit: "newLine"');

// objLit.__proto__.test = (function() {
// 	this.newLine('I am a prototype of objLit: "test"');
// });

// objLit.test();

// objLit.__proto__.test = (function() {
// 	this.newLine('I updated the "test" prototype of objLit');
// });

// objLit.test();

// objLit.more = (function(content) {
// 	this.newLine('I am another method of objLit: "more"');
// });

// objLit.more();