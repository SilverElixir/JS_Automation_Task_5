import { function1, function2 } from "./raw_functions.js";

function bothFunctionPromises(data){
    function1(data)
   .then((x) => { 
       console.log(x); return function2(x)
    })
   .catch(err => console.log(err));
}
   
bothFunctionPromises('text');
bothFunctionPromises(21);
bothFunctionPromises(24);