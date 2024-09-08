function bar() {
    console.log(a);
}
function foo() {
    var a = 100
    bar()
}

var a = 200
foo()   // 200



function foo1() {
    var a = 100
    function bar() {
        console.log(a);
    }
    bar()
}

var a = 200
foo1()   // 100

