import React from "react"
import "./Loader.scss"
{
  /*Лоадер был взят с сайта https://loading.io/css/*/
}

export const Loader = () => {
  return (
    <div className="loader">
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}
