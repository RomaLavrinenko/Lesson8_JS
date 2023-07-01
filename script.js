// let str = 'Hello';
// console.log(str);
// //property
// console.log('String.length', str.length);


// // //method

// console.log('String.CharAt(position:number)', str.charAt(0));
// //or
// console.log('String[position]',str[1]);

// console.log('String.toUpperCase', str.toUpperCase())
// console.log('String.toLowerCase', str.toLowerCase())

// let str = prompt("write your name");
// let newStr = str[0].toUpperCase();
// for(let i = 1;i<str.length;i++){
//     newStr += str[i].toLocaleLowerCase();
// }
// console.log(newStr);

// console.log('String.indexOf', str.indexOf('l'));
// let myStr = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae, nam?';
// for(let i = 0;i<myStr.length;i++){
//     if(myStr[i]=='e'){
//         console.log(i);
//     }
// }


// let start = 0;
// let find = '';
// while(true){
//     let position = myStr.indexOf('e',start);
//     if(position === -1) break;
//     find += position + ' ';
//     start = position + 1;
// }
// console.log(find);


// console.log('String.indexOf', str.indexOf('l'));
// console.log('String.lastIndexOf', str.lastIndexOf('l'));
// console.log('String.includes', str.includes('l'));

// let str = 'Javascript';
// console.log(str);

// console.log('String.substring(4)',str.substring(4,0))
// console.log('String.slice(4,-2)',str.slice(4,-2))

// let str = 'HTML CSS JS';
// console.log(str);

// console.log('String.split(" ")' ,str.split(" "));
// console.log('String.split("CSS")' ,str.split("CSS"));
// console.log('String.split(" ",2)' ,str.split(" ",2));

// let str = 'HTML CSS JS';
// console.log(str);
// console.log(str.replace('CSS',"Typescript"));

// let str1 = "Hello ";
// let str2 = "World ";
// let res = str1.concat(str2, str2);
// console.log(res);

let str = " Javascript ";
console.log(str , str.length);
str = str.trim();
console.log(str , str.length);
