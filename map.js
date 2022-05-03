let map = new Map();

map.set('name', "Vincent");
map.set('lname', "Kashaka");
map.set('email', "vincekayz@gmail.com");
 
console.log(map.get('name'));
console.log(map.get('lname'));
console.log(map.get('email'));

console.log(map.has('name'));
console.log(map.size);

for (let element of map){
    console.log(element);
    console.log(element[0]);
    console.log(element[1]);

   
    }