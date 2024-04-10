import "./App.css";
import { Outlet } from "react-router-dom";


function App() {
  
  return (
    <>
      {/* <h5 className="flex justify-center items-center uppercase text-red-600 text-5xl">This is  the HOME PAGE </h5> */}
      <Outlet> </Outlet>
    </>
  );
}

export default App;
