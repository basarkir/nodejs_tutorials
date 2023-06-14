const person = {
    name: 'Max',
    age: 29,
    greet () {
        console.log('Hi, I am ' + this.name);
    }
};

const copiedPerson = {...person};
console.log(copiedPerson);

const hobbies = ['Sports', 'Cooking'];
// for (let hobby of hobbies){
//     console.log(hobby);
// }
// console.log(hobbies.map(hobby =>{
//     return 'Hobby: ' + hobby;
// }));
// console.log(hobbies);

// hobbies.push('Programming');

// const copiedArray = [hobbies];
const copiedArray = [...hobbies];
// const copiedArray = hobbies.slice();
console.log(copiedArray);


const toArray = (arg1, arg2, arg3) => {
    return [arg1, arg2, arg3];
};
console.log(toArray(1, 2, 3));

const toArrayNew = (... args) => {
    return args;
};
console.log(toArrayNew(1, 2, 3, 4));
