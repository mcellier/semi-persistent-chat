import React, { useState, useEffect } from "react"
import "./RefreshButton.css"

export default function RefreshButton(props) {
  const [turn, setTurn] = useState(false)

  function onClick() {
    if (!turn) {
      props.onRefresh && props.onRefresh()
      setTurn(true)
    }
  }

  useEffect(() => {
    if (turn) {
      setTimeout(() => {
        setTurn(false)
      }, 2000)
    }
  }, [turn, setTurn])

  return (
    <div
      className={`RefreshButton ${turn ? "turn" : ""}`}
      title="Refresh"
      onClick={onClick}
    >
      <svg version="1.1" viewBox="0 0 64 64">
        <g>
          <path
            d="M45,20c0,1.657,1.343,3,3,3h13c1.657,0,3-1.343,3-3V8c0-1.657-1.343-3-3-3s-3,1.343-3,3v5.39C52.199,5.288,42.725,0,32,0
				C14.327,0,0,14.327,0,32s14.327,32,32,32s32-14.327,32-32c0-1.657-1.343-3-3-3s-3,1.343-3,3c0,14.359-11.641,26-26,26
				C17.641,58,6,46.359,6,32C6,17.641,17.641,6,32,6c8.77,0,16.512,4.348,21.218,11H48C46.343,17,45,18.343,45,20z"
          />
        </g>
      </svg>
    </div>
  )
}
