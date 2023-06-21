import React from 'react'

const Button = ({title,className, onClick}) => {
  var isActive = (className === "active") ? true : false;
  return (
    <div>
      <button
        style={{
          backgroundColor: isActive ? "#111" : undefined,
          color: isActive ? "white" : "#111",
          borderRadius: "5px",
          maxWidth: "140px",
          minWidth: "80px",
          height: "30px",
          marginRight: "5px"
        }} 
        onClick={onClick}
      >
        {title}
      </button>
    </div>
  )
}

export default Button
