import Authentication from "./components/Authentication"
import Slider from "./components/Slider";
export function Form() {
    return (
      <div style={{ display: "flex", width: "100%", minHeight: "100vh" }}>
       <div style={{ backgroundColor: "lightgrey", width: "40%"  }}>
       <Slider/>
       </div>
       <div
         style={{
           backgroundColor: "white",
           justifyContent: "center",
           alignItems: "center",
           display: "flex",
           width: "60%",
           position:'relative'
         }}
       >
        <Authentication/>
       </div>
     </div>
    );
  }
  export default Form;
  