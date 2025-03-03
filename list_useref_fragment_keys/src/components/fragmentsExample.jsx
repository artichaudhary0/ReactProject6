import React from "react";

/*
Fragment <></> : allow to you to group elements or component in dom without using extra node(div) 
<React.Fragemnt></React.Fragemnt>

*/

const FragmentsExample = () => {
  return (
    <>
      <h1>Hello this fragment 1</h1>
      <h1>Hello this fragment 2</h1>
      <React.Fragment>
        <h1>Hello this fragment 1</h1>
        <h1>Hello this fragment 2</h1>
      </React.Fragment>
    </>
  );
};

export default FragmentsExample;
