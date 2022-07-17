import '../styles/global.css';
import React from 'react';
import UserContext from '../components/context/UserContext';
import { Fragment, useEffect, useState } from 'react';
import { getCookie } from 'cookies-next';


function MyApp(this: any, { Component, pageProps }) {

  

  let cookies = getCookie("authToken_abc");
   
  let cookieFlag = false; 

  if(cookies && cookies !== "00"){ //valid session
    cookieFlag = true;
  }else{ //first time
    cookieFlag = false;
  }
  
  const [authFlag] = useState(cookieFlag);


  return (
    <React.Fragment>
      <UserContext.Provider value={{ state:{authFlag: cookieFlag} }} >
        <Component {...pageProps} />
      </UserContext.Provider>
      
    </React.Fragment>
  );
}

export default MyApp;
