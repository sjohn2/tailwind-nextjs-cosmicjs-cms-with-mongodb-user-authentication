import { useRouter } from "next/router";
import { setCookie } from "nookies";
import { useContext } from "react";


import UserContext from '../../components/context/UserContext';
import { Fragment, useEffect, useState } from 'react';

import { Signin } from "../../components/auth/Signin";





export default function Login() {
  const router = useRouter();
  const { exit } = router.query;
  const exitParser = JSON.stringify({ exit });
  // 

  if (exitParser.length >= 3) {

    setCookie(null, "authToken_abc", "00", {
      maxAge: 30 * 24 * 60 * 60,
      path: "/",
    });

 

  
  }

  return (

    <>
      <Signin ></Signin>
    </>
  );
}
