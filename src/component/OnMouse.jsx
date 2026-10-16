

function OnMouse() {

  function handleMouseLeave() {

    console.log("Mouse has left the box!");

  }

  return (
    <div  onMouseLeave={handleMouseLeave}
      style={{
        width:"200px",
        height:"100px",
        backgroundColor:"lightblue",
        padding:"20px",
      }}
      >
        Move your mouse here
    </div>
  );
}

export default OnMouse;