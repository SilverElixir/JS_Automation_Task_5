# JS_Automation_Task_8
Get familiar with Promises - https://codeburst.io/javascript-es-2017-learn-async-await-by-example-48acc58bad65
Create a first function (which takes argument `data`) that always returns a promise and:
1.If data is not a number, the function returns a promise rejected instantly and give the word
"error" (in a string
2.If data is an odd number, return a promise resolved 1 second later and give "odd" (in a string
3.If data is an even number, return a promise rejected 2 seconds later and give "even" (in a string
4.Create a second function (which takes argument "result") which should be executed after the
first function is done and print the final message like `Your number is ${result}` ONLY for cases
when the first function doesn't return " error“ - run 
5. Write same tasks(1-4) using async/await 

To see completed tasks, run:
# "node .\task_with_promises.js" (1 - 4)
# run "node .\task_with_async.js" (5)
