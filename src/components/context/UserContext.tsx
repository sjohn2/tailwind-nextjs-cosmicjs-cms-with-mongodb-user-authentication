import { createContext, useState, useContext, useMemo } from "react";


const UserContext = createContext(
    {
        authFlag: false,
        setAuthFlag: ()=>{}
    }
);

export default UserContext;