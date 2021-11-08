import { function1, function2 } from "./raw_functions.js";

async function bothFunctionsAsync(data){
	try{
        let a = await function1(data);
        console.log(a);
	    let b = await function2(a);
    }catch(err){
        console.log(err.toString());
    }
};

bothFunctionsAsync('text');
bothFunctionsAsync(11);
bothFunctionsAsync(12);