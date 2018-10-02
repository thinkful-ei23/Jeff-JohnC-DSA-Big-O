
//recursive solutions-big-O


//sheep count
function countSheep(num){
    //stopping condition of base case
    if(num === 0){
        console.log(`All sheep jumped over the fence`);
    } 
    //this is the recursive case
    //this will be executed until it reaches base case
    else{
        console.log(`${num}: Another sheep jump over the fence`);
        countSheep(num-1);
    }
}

// 0(n)-linear; number of recursions is purportional to the input


// doubling the numbers in an array
function double_all(arr) {
    if (!arr.length) {
        return []; 
    }
    return [arr[0] * 2, ...double_all(arr.slice(1))]; 
}

// 0(n) -linear; number of recursions is purportional to the input


//reversing the string that is put in
function reverseString(str) {
    if (str.length < 2) {
        return str;
    }
    return reverseString(str.slice(1)) + str[0];
}

//0(n)-linear; number of recursions is purportional to the input


//calculates the nth triangle number
function triangle(n) {
    if (n < 2) 
        return n;
    return n + triangle(n - 1);
}

//0(n)-linear; number of recursions is purportional to the input

//splits string depending on provided seperator
function split(str, sep) {
    var idx = str.indexOf(sep);
    if (idx == -1) 
        return [str];
		//you don't have to return an array, you can return a string as an array of 
		//character 
		//return str;
    return [str.slice(0, idx)].concat(split(str.slice(idx + sep.length), sep))
	//all these are valid syntax
	//return (str.slice(0,idx) + (split(str.slice(idx + sep.length), sep)))
	//return str.slice(0,idx).concat(split(str.slice(idx + sep.length), sep))
}

//0(n)-linear; number of recursions is purportional to the input

//returns binary number of input

function convertToBinary(num){
    if(num>0){
        let binary = Math.floor(num%2); //save the reminder in binary
		//divide the number by 2 and send that to the function again
		//carry the reminder to the next recursion call
        return (convertToBinary(Math.floor(num/2))+ binary);
    }else{
        return ''; //base case - at some point the divisions will lead to 0
    }
}

//0(log(n)) logarithmic; as number input increases the number of operations increases at a slower rate than linear


//finds the factortial by mutlipling the number by all the numbers that come before it til 1
function factorial(n) {  
    // Base Case - when n is equal to 0, we stop the recursion
    if (n === 0) {
        return 1;
    }
    // This is our Recursive Case
    // It will run for all other conditions except when n is equal to 0
    return n * factorial(n - 1);
}

//0(n)-linear; number of recursions is purportional to the input

//writes out fibonacci sequence until the sequence number of the input
function fibonacci(n) {
    // Base case
    if (n <= 0) {
        return 0;
    }
    // Base case
    if (n <= 2) {
        return 1;
    }	
    // Recursive case
    return fibonacci(n - 1) + fibonacci(n - 2);	
}

//0(n)-linear; number of recursions is purportional to the input


// creates all possible combinations for the word input

function anagrams(prefix, str){
    if(str.length <= 1){
        console.log(`The anagram is ${prefix}${str}`);
    } else {
        for(let i=0; i<str.length; i++){
            let currentLetter = str.substring(i, i+1); 
            let previousLetters = str.substring(0,i);
            let afterLetters = str.substring(i+1);
            anagrams(prefix+currentLetter, previousLetters+afterLetters);
        }
    }
}
function printAnagram(word){
    //console.log(`The word for which we will find an anagram is ${word}`);
    anagrams(' ', word);

}

// 0(n^2)-polynomial; the recursion within the for loop creates a polynomial growth

//goes through array and lists out hierarchy

function traverse(animalHierarchy, parent) {
    let node = {};
    animalHierarchy.filter(item => item.parent === parent)
                    .forEach(item => node[item.id] = traverse(animalHierarchy, item.id));
    return node;  
}

//0(2^n)-exponential; the more parents it has the go through the longer the function will take

//Write a recursive function that prints the following organization chart. 
function traverseA(data, depth = 0) {
	let indent = " ".repeat(depth * 4);
	Object.keys(data).forEach(key => {
		console.log(indent + key);
		traverseA(data[key], depth + 1)
	});
}

function traverseB(node, indent=0) {
	for (var key in node) {
		console.log(" ".repeat(indent), key);
		traverseB(node[key], indent + 4);
	}
}

//0(n^2)-polynomial; the traversal through the repeats creates a nested loop thus taking a polynomial amount of time