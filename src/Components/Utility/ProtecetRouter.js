import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export default function ProtecetRouter({auth,children}) {

     if(auth===false){
        return <Navigate to="/login" replace/>
     }else{
      return children? children:<Outlet/>
     }
}
