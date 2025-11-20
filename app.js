const arr=['Raksa','Roza','Bopha','Kanha'];

const showname=arr.map((m,i)=>m.split(''));

const FlatMap=arr.flatMap((m,i)=>m.split(''))

console.log(showname);
console.log(FlatMap);