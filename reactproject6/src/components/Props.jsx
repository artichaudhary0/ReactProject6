/*
  1 : Props :  Properties.
  2 : Props : js Object.
  3 : Read - only
  4 : Immutable
  5 : connection : parent(data pass) , child(access use)
*/

function Props({ name = "", education = "", colors = [] }) {
  /*
  default values :
  name = '' 
  eduaction = ""
  colors = []
  userName = {}

  override
  */

  console.log(name);
  console.log(education);
  console.log(colors);

  return (
    <div>
      <h1>Name : {name}</h1>
      <h1>Education : {education}</h1>
      <h1>Colors : {colors}</h1>
    </div>
  );
}

export default Props;

// function Props({ name, education, colors, userName }) {
//   // console.log(userName);
//   // {firstName: 'Arti', middleName: 'Singh', lastName: 'Chaudhary'}

//   const { firstName, middleName, lastName } = userName;
//   console.log(firstName);
//   return (
//     <div>
//       <h1>
//         Name : {firstName} {middleName} {lastName}
//       </h1>
//       <h1>{education}</h1>
//       <h1>{name}</h1>
//       <ul>
//         {colors.map((data, index) => (
//           <li key={index}> {data} </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Props;

// function Props(props) {
//   //props = {name: 'kuch bhi', education: 'Pata nai'}

//   const { name, education } = props;

//   return (
//     <div>
//       <h1>{education}</h1>
//       <h1>{name}</h1>
//       {/* <h1>{props.education}</h1>
//       <h1>{props.name}</h1> */}
//     </div>
//   );
// }

// export default Props;

// import React, { useState } from "react";

// function Props(props) {
//   // const [value, setValue] = useState(props.name);

//   // const handleValue = () => {
//   //   setValue("Changed value");
//   // };

//   // console.log(value);

//   return (
//     <div>
//       <h1>{value}</h1>
//       <button onClick={handleValue}>Change</button>
//     </div>
//   );
// }

// export default Props;
