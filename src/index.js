import React from "react"
import ReactDOM from "react-dom"
import App from "./components/App"
import "bootstrap/dist/css/bootstrap.min.css"
import Appstorage from "./Appstorage"
import AppDatabase from "./AppDatabase"

ReactDOM.render(
  <React.StrictMode>
    <App />
    <hr />
    <Appstorage></Appstorage>
    <AppDatabase></AppDatabase>
  </React.StrictMode>,
  document.getElementById("root")
)
