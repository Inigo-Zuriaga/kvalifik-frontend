import { Navigate, Route, Routes } from "react-router-dom";

export const ProtectedRoute = ({ tokenTrue }) => {
    if(tokenTrue && tokenTrue!="undefined")
    return <Navigate to={"/"}/>;
    else null
    
}