import React from "react"
import "./Messages.css"

export default function Messages(props) {
  const { login, messages } = props

  function hightlightSameUser(text) {
    if (text.includes(login)) {
      return <span className="MessageSameUser">{text}</span>
    }
    return text
  }

  return (
    login && (
      <div className="Messages">
        {messages
          .sort(({ timestamp: ts1 }, { timestamp: ts2 }) => ts2 - ts1)
          .map(({ uuid, timestamp, user, message, validated }) => {
            const statusClassName = validated
              ? "MessagesCheck"
              : "MessagesPending"
            const statusSign = validated ? "✔" : "~"
            return (
              <div key={uuid} className="MessagesRow">
                <span className="MessagesTime">
                  {new Date(timestamp).toLocaleTimeString()}
                </span>
                <span className="MessagesUser">
                  {hightlightSameUser(user)} :
                </span>
                <span className="MessagesText">
                  {hightlightSameUser(message)}
                </span>
                <span className={`MessagesStatus ${statusClassName}`}>
                  {statusSign}
                </span>
                <span className="MessagesUuid">{uuid}</span>
              </div>
            )
          })}
      </div>
    )
  )
}
