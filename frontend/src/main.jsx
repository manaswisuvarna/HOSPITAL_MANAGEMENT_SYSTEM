import React, { createContext, useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//statemangement is need for the authentication 


//create use context

export const Context = createContext({isAuthenticated: false}); // intialization


const AppWrapper = ()=>{  //arrow function 
  const [isAuthenticated,setIsAuthenticated] = useState(false);
  const [user,setUser]=useState({}); 


return(
  <Context.Provider value={{isAuthenticated,setIsAuthenticated,user,setUser}}>
   <App/>
   </Context.Provider>



)
};


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>,
)
