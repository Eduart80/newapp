
// const counter = {
//      cnt: 0,
//     inc: function(){
//         counter.cnt++
//         document.getElementById('number').innerHTML = counter.cnt
//     }
// }
// const button = document.getElementById('button')
// button.addEventListener('click', counter.inc,false)

const counter = {
    cnt: 0,
   inc: function(){
       counter.cnt++
       document.getElementById('number').innerHTML = counter.cnt
   }
}
const button = document.getElementById('button')
button.addEventListener('click', counter.inc,false)

const person ={
    name: 'John',
    last: "Zelle",
    age: 12,
    greeting(){
        console.log("Hello "+ this.name);
    }
}
person.city = 'Berlin'
console.log(person);

console.log(person.greeting());