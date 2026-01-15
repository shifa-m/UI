import React from 'react'
import Card from './assets/component/Card'




const App = () => {
  const players = [
  {
    name: "Rahul",
    age: 20,
    level: 5,
    rank: 120,
    points: 1500,
    friends: ["Amit", "Rohit"]
  },
  {
    name: "Sneha",
    age: 22,
    level: 6,
    rank: 98,
    points: 1700,
    friends: ["Pooja", "Neha"]
  },
  {
    name: "Aman",
    age: 19,
    level: 4,
    rank: 200,
    points: 1100,
    friends: ["Rahul", "Kunal"]
  },
  {
    name: "Priya",
    age: 21,
    level: 7,
    rank: 75,
    points: 1900,
    friends: ["Sneha", "Anjali"]
  },
  {
    name: "Karan",
    age: 23,
    level: 8,
    rank: 50,
    points: 2200,
    friends: ["Aman", "Rahul"]
  },{
    name: "Shifa",
    age: 21,
    level: 8,
    rank: 50,
    points: 2200,
    friends: ["Aman", "Rahul"]
  }
];

return(
  <div className="parent">
    {players.map(function(elem){
   console.log(elem);
   return(
    <Card names={elem.name} ages={elem.age} levels={elem.level} ranks={elem.rank} point={elem.points} friends={elem.friends}/>

   )})}
    
  </div>

  )}



 


export default App
