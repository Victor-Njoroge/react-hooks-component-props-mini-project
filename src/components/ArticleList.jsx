import React from 'react'
import Article from './Article'
function ArticleList({data}) {
  return (
    <>
      <Article blog={data}/>
    </>
  )
}

export default ArticleList
