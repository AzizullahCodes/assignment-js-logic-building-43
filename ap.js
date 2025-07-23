
/*_______________________ Question no 1 ______________________
 Count Arguments
Description: Write a function that counts how many arguments were passed using the rest parameter.

Example Input:

countArgs(10, 20, 30, 40, 50)
Expected Output:

5
_________________________ Answer ____________________________*/
// const counting = (...restParameter) =>{console.log(restParameter.length)}
// counting('Sndleeb','Ruksana','Dilfraib')

/*_______________________ Question no 2 ______________________
default parameter
_________________________ Answer ____________________________*/
//  const calculating = (a,b = 10) =>{let sum = a + b ;
//     console.log(sum)
//  };
//  calculating(2);
/*_______________________ Question no 3 ______________________
turnay operator
_________________________ Answer ____________________________*/
// let age = 1;
// let condition = (age >= 18)?('eligible'):('younger');
// console.log(condition)

/*_______________________ Question no 4 ______________________
find max number
_________________________ Answer ____________________________*/
// let maxNumber = (...restParameter)=>{
//     // let max = Math.max(...restParameter);
//     // console.log(max)
//     let max = 0;
//     for(let i = 0; i< restParameter.length;i++){if(restParameter[i] > max){max = restParameter[i]}
// }console.log(max)
// }
// maxNumber(2,5,177,9,3);
// maxNumber(1000,200,5000,389,889)

/*_______________________ Question no 5 ______________________

_________________________ Answer ____________________________*/
// let num = Number(prompt('Enter number'));

// let condition = (num % 2 === 0)?('Even'):('odd');
// console.log(condition)
/*_______________________ Question no 6 ______________________
You have a variable inputName which might be null, undefined, or an actual string.

Use the ternary operator to assign inputName to a displayName variable. If inputName is 
falsy (null, undefined, empty string), displayName should be "Guest". Otherwise, it should be
 inputName.

Log displayName to the console.
_________________________ Answer ____________________________*/

// let inputName = '';
// let n = inputName || 'Guest';
// let result = (inputName !== '')?(`Hello : ${inputName}`) : (`Hello : ${n}`);
// console.log(result)

/*_______________________ Question no 7 ______________________
Create variables isLoggedIn (boolean) and username (string).

Use the ternary operator to create a message variable:

If isLoggedIn is true, the message should be "Welcome, [username]!".

If isLoggedIn is false, the message should be "Please log in.".

Log message to the console.
_________________________ Answer ____________________________*/ 
// let isLoggedIn = true;
// let username = 'Aziz';
// let condition = (isLoggedIn)?(`Welcome, ${username}`): (`Plz log in`);
// console.log(condition)
/*_______________________ Question no 8 ______________________

Create a function that takes any number of words and joins them into a sentence.

📌 Example:

makeSentence("JavaScript", "is", "awesome"); // Output: "JavaScript is awesome"

_________________________ Answer ____________________________*/
// let resting = (...restParameter)=>{let sentence = '';
//     for(let key of restParameter){ sentence = sentence + ' ' +key}
//     console.log(sentence)
  
// }
// resting('Javascript','is','awesome')

/*_______________________ Question no 9 ______________________
Filter Numbers Greater Than 10
Create a function that takes multiple numbers and returns only those greater than 10.

📌 Example:
filterGreaterThan10(5, 12, 8, 20, 3); // Output: [12, 20]
_________________________ Answer ____________________________*/
// let num = (...restParameter) =>{let requirement = [];
//     for(let key of restParameter){if(key > 10){requirement.push(key)}
// }
// return requirement;
// }
// console.log(num(5,12,8,20,30));
// console.log(num(2,3,4))
/*_______________________ Question no 10 ______________________
 Multiply All Numbers
Create a function that multiplies all given numbers and returns the product.
📌 Example:
multiplyAll(2, 3, 4); // Output: 24
_________________________ Answer ____________________________*/
// const multiplication = (...restPractice) =>{let output = 1;
//     for(let key of restPractice){ output = output * key;}
//     return output;
// }

// let ans = multiplication(2,3,4);
// console.log(ans)
/*_______________________ Question no 11 ______________________
 Separate Even and Odd Numbers
Create a function that takes multiple numbers and returns two arrays: one for even numbers, 
one for odd numbers.

📌 Example:
separateEvenOdd(1, 2, 3, 4, 5, 6);
// Output: { even: [2, 4, 6], odd: [1, 3, 5] }
_________________________ Answer ____________________________*/
// let seperating = (...resting ) => {let a = [];
//     let b = [];
//     for(let key of resting){if(key % 2 == 0){a.push(key)}
// else{b.push(key)}}
// console.log(a);
// console.log(b);
// };
// seperating(1,2,3,4,5,6)

/*_______________________ Question no 12 ______________________
 Show First Argument and Count of Rest
Create a function where the first argument is a title, and the rest are names. Return the title and
 how many names were given.

📌 Example:
showTitleAndCount("Teacher", "Ali", "Sara", "John");
// Output: "Teacher has 3 students"

_________________________ Answer ____________________________*/
// const showTitleAndCount = (...rest) =>{let len = rest.length;
//     let result = len - 1;
//     console.log(rest);
//     console.log(`Teacher has ${result} students`)
// };
// showTitleAndCount('Teacher','Ali','Sara','John');
// showTitleAndCount('Sandleeb','knvl','klsoom','zrnab','gulnaz','zrgheen')
/*_______________________ Question no 13 ______________________
 Check Temperature
If temperature is more than 30, show "Hot", otherwise "Cool".
_________________________ Answer ____________________________*/
// let temperature = prompt('enter temperature');
// let condition = (temperature > 30)?('Hot'):('cool');
// console.log(condition)
/*_______________________ Question no 14 ______________________
Check Character Length
If a word has more than 5 letters, show "Long", else show "Short".
_________________________ Answer ____________________________*/
// let word = prompt('enter word');
// let leng = word.length;
// let ternary = (leng > 5)?('Long'):('short');
// console.log(ternary);

/*_______________________ Question no 15 ______________________
 Check Divisibility
Check if a number is divisible by 5. If yes, show "Yes", else "No".
_________________________ Answer ____________________________*/ 
// let num  = Number(prompt('enter number'));
// let ternary = (num % 5 == 0)?('yes'):('no');
// console.log(ternary);
/*_______________________ Question no 16 ______________________
default parameter 
_________________________ Answer ____________________________*/
// const calculating = (a,b = 5) =>{let ans = a + b;
//     return ans;
// };
// let final = calculating(2);
// console.log(final);

/*_______________________ Question no 17 ______________________
enhanced object literals
_________________________ Answer ____________________________*/
// let name = "Aziz";
// let age = 23;
// let course = 'web development';
// let studentDetails = {name,
//     age,
//     course,
// }
// console.log(studentDetails);

/*_______________________ Question no 18 ______________________
object destructuring 
_________________________ Answer ____________________________*/
// const student = {name :'Aziz',
//     age : 23,
//     course : 'web development'
// }
// const {name,age,course} = student;
// console.log(name);
// console.log(age);
// console.log(course)

/*_______________________ Question no 19 ______________________
array destructuring
_________________________ Answer ____________________________*/
// let [name,age,course] = ['aziz',23,'web development'];
// console.log(name);
// console.log(age);
// console.log(course);
/*_______________________ Question no 20 ______________________
itrators of and in 
_________________________ Answer ____________________________*/
// let fruits = ['apple','banana','mango'];
// console.log(fruits)
// for(let identity of fruits){console.log(identity);
// }

// for(let identity in fruits){console.log(identity)}

/*_______________________ Question no 21 ______________________
get the data of object by for loop
_________________________ Answer ____________________________*/
// const student = {name :'Aziz',
//     class :'Matric',
//     age : 20
// }
// for(let key in student){console.log(`${key} : ${student[key]}`)};
// let len =Object.keys(student).length;
// console.log(len)

// const shop = {soap : 20,
//     sugar : 3900,
//     tea : 45
// }
// const newObjtect = {...student,...shop};
// console.log(newObjtect)
// let fruits = ['apple','banana'];
// let moreFruits = ['orange','guava'];
// let merging = [...fruits,...moreFruits];
// console.log(merging)
/*_______________________ Question no 22 ______________________
date()
_________________________ Answer ____________________________*/
// let current =  new Date();
// console.log(current,typeof current);
// current.setFullYear(2005);
// current.setMonth(2-1);
// current.setHours(5);
// current.setMinutes(32);
// current.setSeconds(2);
// current.setMilliseconds(434);
// console.log(current)

/*_______________________ Question no 23 ______________________
leap year 
_________________________ Answer ____________________________*/
// let year = 2000
// if((year % 4 == 0 && year % 100 !== 0)||(year % 400 == 0)){console.log('leap year')}
// else{console.log('not leap year')}
/*_______________________ Question no 24 ______________________
array method
_________________________ Answer ____________________________*/
// let fruits = ['apple','mango','carrot','raddish'];
// // push
// let pus = fruits.push('guava');
// console.log(fruits);
// console.log(pus);
// // unshift()
// let un = fruits.unshift('malta');
// console.log(fruits);
// console.log(un);
// // pop()
// let pop = fruits.pop();
// console.log(pop);
// console.log(fruits);
// // shift()
// let shift = fruits.shift();
// console.log(fruits);
// console.log(shift);
// // slice();
// let slice = fruits.slice(0,3);
// console.log(slice)
// // splice()
// let spl = fruits.splice(2,1,'banana');
// console.log(fruits);
// console.log(spl);

/*_______________________ Question no 25 ______________________
reverse array by for loop
_________________________ Answer ____________________________*/
// let fruits = ['apple','banana','mango','grapes'];
// console.log(fruits)
// let newArray= [];
// for(let i = fruits.length-1 ; i >=0;i--){newArray.push(fruits[i])}
// console.log(newArray);


// let fruits = ['apple','banana','mango','grapes'];
// let newArray = fruits.reverse();
// console.log(newArray)


/*_______________________ Question no 26 ______________________
reverse string 
_________________________ Answer ____________________________*/
//  let string = 'zamir is her friend';
//  let srt = '';
// for(i = string.length-1;i >= 0;i--){srt = srt + string[i]}
// console.log(srt)
/*_______________________ Question no 27 ______________________
reverse array of number
_________________________ Answer ____________________________*/
// let num = [50,70,80,90];
// let newArray= [];
// for(let i = num.length-1; i >=0; i--){newArray.push(num[i])}
// console.log(newArray);
/*_______________________ Question no 28 ______________________
slice
_________________________ Answer ____________________________*/
// let fruits = ['apple','banana','mango','carrot','guvava'];
// let newArray = fruits.slice(fruits.length-2);
// console.log(newArray);

/*_______________________ Question no 29 ______________________
loose and strict not equal to 
_________________________ Answer ____________________________*/ 
// let num = prompt('enter number');
// let condition = (num !== 2)?('ok'):('not ok');
// console.log(condition);
/*_______________________ Question no 31 ______________________
stop programm when condition false and reply
_________________________ Answer ____________________________*/
// let name = prompt('enter your name');
// name = name.toLowerCase();
// if(name === 'aziz'){let password = prompt('enter password');
//     if(password === '1234'){let balance = prompt('enter your balance');
//         if(balance >= 200){console.log('you can withdraw')}
//         else(console.log('your balance is low'))
//     }
//     else{console.log('wrong password')}
// }
// else{console.log('name is wrong')}
/*_______________________ Question no 1 ______________________

_________________________ Answer ____________________________*/





/*_______________________ Question no 1 ______________________

_________________________ Answer ____________________________*/





/*_______________________ Question no 1 ______________________

_________________________ Answer ____________________________*/





/*_______________________ Question no 1 ______________________

_________________________ Answer ____________________________*/




/*_______________________ Question no 1 ______________________

_________________________ Answer ____________________________*/




/*_______________________ Question no 1 ______________________

_________________________ Answer ____________________________*/


/*_______________________ Question no 1 ______________________

_________________________ Answer ____________________________*/ 



/*_______________________ Question no 1 ______________________

_________________________ Answer ____________________________*/



/*_______________________ Question no 1 ______________________

_________________________ Answer ____________________________*/





/*_______________________ Question no 1 ______________________

_________________________ Answer ____________________________*/





/*_______________________ Question no 1 ______________________

_________________________ Answer ____________________________*/





/*_______________________ Question no 1 ______________________

_________________________ Answer ____________________________*/




/*_______________________ Question no 1 ______________________

_________________________ Answer ____________________________*/




/*_______________________ Question no 1 ______________________

_________________________ Answer ____________________________*/


