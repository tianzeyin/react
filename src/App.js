import logo from "./logo.svg";
import "./App.css";
import React from "react";

//我是马+1

// function App() {
//   const [show, setShow] = React.useState(true);

//   let message;
//   let buttonText;

//   if (show === true) {
//     message = <p>hello</p>;
//   } else {
//     message = null;
//   }

//   if (show === true) {
//     buttonText = "hide";
//   } else {
//     buttonText = "show";
//   }

//   return (
//     <div>
//       {message}

//       <button onClick={() => setShow(!show)}>
//         {buttonText}
//       </button>
//     </div>
//   );
// }

// export default App;


// function Text() {
//   const [isOn, setIsOn] = React.useState(false);

//   let text;
//   let buttonText;

//   if (isOn === true) {
//     text = <p>on</p>;
//     buttonText = "Turn Off";
//   } else {
//     text = <p>off</p>;
//     buttonText = "Turn On";
//   }

//   return (
//     <div>
//       {text}

//       <button onClick={() => setIsOn(!isOn)}>
//         {buttonText}
//       </button>
//     </div>
//   );
// }

// function Count (){
//   const [count, setCount] = React.useState(0);
//   let text = <p>you hit me {count} times, Ouch</p>;
//   return(
//     <div>
//       {text}
//       <button onClick = {() => setCount(count+1)}>
//         hit me hard
//       </button>
//     </div>
//   );
// }

// function DecreaseAndIncrease(){
//   const [num, setNum] = React.useState(0);
//   return (
//     <div>
//       <p>{num}</p>
//       <button onClick = {() => setNum (num + 1)}>
//         +1
//       </button>
//       <button onClick = {() => setNum(num - 1)}>
//         -1
//       </button>
//     </div>
//   );
// }

// function SetFive(){
//   const[num, setNum] = React.useState(5);
//   return(
//     <div>
//       <p>{num}</p>
//       <button onClick = {() => setNum(num+1)}>
//         +1
//       </button>
//       <button onClick = {() => setNum(num-1)}>
//         -1
//       </button>
//       <button onClick = {() => setNum(5)}>
//         to 5
//       </button>
//     </div>
//   )
// }

// function FuckTimes() {
//   const [times, setTimes] = React.useState(0);
//   let status;
//   if (times === 5) {
//     status = "max times reached";
//   } else {
//     status = "keep going";
//   }
//   return (
//     <div>
//       <p>{times}</p>
//       <p>{status}</p>
//       <button
//         onClick={() => {if (times < 5) {setTimes(times + 1);}}}
//       >
//         +1
//       </button>
//       <button
//         onClick={() => {if (times > 0) {setTimes(times - 1);}}}
//       >
//         -1
//       </button>
//     </div>
//   );
// }


// function Age() {
//   const [age, setAge] = React.useState(0);
//   let current;
//   if (age < 18) {
//     current = "still a minor";
//   } else if (age >= 18 && age < 30) {
//     current = "adult";
//   } else {
//     current = "too older";
//   }
//   return (
//     <div>
//       <p>
//         {age} is {current}
//       </p>
//       <button
//         onClick={() => {
//           if (age > 0) {
//             setAge(age - 1);
//           }
//         }}
//       >
//         -1
//       </button>
//       <button
//         onClick={() => {
//           setAge(age + 1);
//         }}
//       >
//         +1
//       </button>
//     </div>
//   );
// }

// function Temperature() {
//   const [temp, setTemp] = React.useState(0);
//   let status;
//   if (temp < 10){
//     status = <p>too cold</p>;
//   }else if (temp >= 10&& temp <= 24){
//     status = <p> normal </p>;
//   }else if (temp >= 25){
//     status = <p>too hold</p>;
//   }
//   return(
//     <div>
//       <p>{temp}</p>
//       <p>{status}</p>
//       <button onClick = {() => {
//         setTemp(temp + 1)
//       }}>
//         +1
//       </button>
//       <button onClick = {() =>{
//         if(temp > -10){
//           setTemp(temp-1)
//         }
//       }}>
//         -1
//       </button>
//     </div>
//   )
// }

// function Array(){
//   const products = [
//     { name: "Apple", price: 2 },
//     { name: "Banana", price: 1 },
//     { name: "Mango", price: 3 }
//   ];
//   return(
//     <div>
//       {products.map((product) =>(
//         <p>{product.name} - ${product.price}</p>
//       ))}
//     </div>
//   )
// }

// function PassOrFail() {
//   const students = [
//     { name: "Alice", grade: 85 },
//     { name: "Bob", grade: 62 },
//     { name: "Charlie", grade: 45 }
//   ];
//   return (
//     <div>
//       {students.map((student) => {
//         let pass;
//         if (student.grade < 50) {
//           pass = "Failed";
//         } else {
//           pass = "Passed";
//         }
//         return (
//           <p>
//             {student.name} - {pass}
//           </p>
//         );
//       })}
//     </div>
//   );
// }

// function Price(){
//   const products = [
//     { name: "Pen", price: 2 },
//     { name: "Notebook", price: 8 },
//     { name: "Backpack", price: 40 }
//   ];
//   return(
//     <div>
//       {products.map((product) =>{
//         let priceStatus;
//         if(product.price >10){
//           priceStatus = "Expensive";
//         }
//         else{
//           priceStatus = "Affordable";
//         }
//         return(
//           <p>
//             {product.name} - {priceStatus};
//           </p>
//         )
//       })}
//     </div>
//   )
// }

// function Numbers() {
//   const [numbers, setNumbers] = React.useState([1, 2, 3]);

//   return (
//     <div>
//       {numbers.map((num) => (
//         <p>{num}</p>
//       ))}

//       <button
//         onClick={() => {
//           setNumbers([...numbers, numbers.length + 1]);
//         }}
//       >
//         add num
//       </button>
//     </div>
//   );
// }

// function Numbers(){
//   const[numbers, setNumbers] = React.useState([4, 5, 6]);
//   return (
//     <div>
//       {numbers.map((num) => (
//         <p>{num}</p>
//       ))}
//       <button onClick = {()=>{
//         setNumbers([...numbers, numbers[numbers.length - 1]+1])
//       }}> add number </button>
//     </div>
//   )
// }

// function NumberList(){
//   const [numbers, setNumbers] = React.useState([2, 4, 6]);
//   return (
//     <div>
//       {numbers.map((num, index) =>(
//         <p>{index+1}. {num}</p>
//       ))}
//       <button onClick = {() => {
//         setNumbers([...numbers, numbers[numbers.length-1]+2])
//       }}>+2</button>
//     </div>
//   )
// }

// function Display(){
//   const [name, setName] = React.useState("");
//   return(
//     <div>
//       <input
//       type = "text"
//       value = {name}
//       onChange = {(e) => setName(e.target.value)}/>
//       <p>sb {name}</p>
//     </div>
//   )
// }
function CharacterCounter(){
  const [character, setCharacter] = React.useState("");
  let count;
  for (x in character){
    count += 1;
  }
  return(
    <div>
      <input
      type = "text"
      value = {character}
      onChange = {(e) => setCharacter(e.target.value)}/>
      <p>{count}</p>
    </div>
  )
}

export default CharacterCounter;

