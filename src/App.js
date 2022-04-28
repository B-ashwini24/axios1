
import { Routes, Route } from "react-router-dom";
import React_axiosadd from "./components/React_axiosadd";



export default function App() {
  return (
    <div className="App">
 
     <React_axiosadd/>

       {
         /**
          *  <Route path="/googlebooks" element={<GoogleBooks />} />
          * 
          * 
        <Route path="/login" element={<Login/>} />
        
      <Router/>
<Routes>
 
           <Route
            exact
            path="/mount"
            element={
              <PrivateRoute>
               <Mounting/>
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="/show"
            element={
              <PrivateRoute>
               <Show/>
              </PrivateRoute>
            }
          />
  <Route path="/login" element={<Login/>} />
  <Route path="/mount" element={<Mounting/>} />
</Routes>
         <Route
            exact
            path="/mount"
            element={
              <PrivateRoute>
               <Mounting/>
              </PrivateRoute>
            }
          />
          
           
           <Route
            exact
            path="/unmount"
            element={
              <PrivateRoute>
               <Unmounting/>
              </PrivateRoute>
            }
          />
        <Route path="/show" element={<Show/>} />
        <Route path="/mount" element={<Mounting/>} />
      <Route path="/unmount" element={<Unmounting/>} />
        <Route path="/update" element={<Updating/>} />
         <Route path="/login" element={<Login/>} />
        
          */
       }
       
     
    </div>
  );
}
