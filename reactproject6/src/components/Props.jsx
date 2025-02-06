/*
Props : Properties. read only
Js object
*/

function Props({ name = "", age = 0 }) {
  /*
    initial value
    name = ''
    age : 0

    After passing props :
    name : "Arti chaudhary"
    age : 10
  */

  return (
    <div>
      <h1>Name : {name}</h1>
      <h1>Age : {age}</h1>
    </div>
  );
}

export default Props;

// function Props({ name, age }) {
//   return (
//     <div>
//       <h1>Name : {name}</h1>
//       <h1>Age : {age}</h1>
//     </div>
//   );
// }

// export default Props;

// function Props(props) {
//   const { name, age } = props;

//   //   console.log(props); // {name: 'Arti Chaudhary', age: 56473}

//   // {name: 'vsdvfsduv'}
//   return (
//     <div>
//       <h1>Name : {name}</h1>
//       <h1>Age : {age}</h1>
//       {/* <h1>Name : {props["name"]} </h1>
//       <h1>Age : {props["age"]} </h1> */}

//       {/* <h1>{name["name"]}</h1> */}
//     </div>
//   );
// }

// export default Props;
