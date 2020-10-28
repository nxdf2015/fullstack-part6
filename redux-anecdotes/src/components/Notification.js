import React from 'react'
import { useSelector } from 'react-redux'

const Notification = () => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
  }
  const { content, visible } = useSelector((state) => state.notification)
  console.log(content)
  return <>{visible && <div style={style}>{content}</div>}</>
}

export default Notification
