import React from "react"
import { Route, Redirect } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"

export default function PrivateRoute({ ...props }) {
  const { currentUser } = useAuth()
  if (!currentUser) {
    return <Redirect to="/login" />
  }
  return (
    // <Route
    //   {...rest}
    //   component={props => {
    //     return currentUser ? <Component {...props} /> : <Redirect to="/login" />
    //   }}
    // ></Route>

    <Route {...props}></Route>
  )
}
