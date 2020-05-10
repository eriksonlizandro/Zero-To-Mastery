var fun =5;

function funFunction(){
    //child scope
    var fun = 'hello';
    console.log(fun); 
}

function funerFunction(){
    //child scope
    var fun ='byee';
    console.log(fun);
}

function funestFunction(){
    //child scope
    var fun ='Ahhh';
    console.log(fun);
}

console.log(fun);