import React from 'react'

function Article({blog}) {
const post=blog.map((item)=>{
     return (
    <div>
      <h3 key={item.id}>{item.title}</h3>
      <p key={item.id}>{item.date}</p>
      <p key={item.id}>{item.preview}</p>
      <p key={item.id}>{item.minutes} minutes</p>
    </div>
  )
})
 return(
    <div>{post}</div>
 )
}

export default Article
