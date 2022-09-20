var x = 1;

function foo(){
    var x = 10;
    bar();
}

const bar = () => {
    console.log(x);
}

foo();
bar();