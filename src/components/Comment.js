import React from 'react'
import PostMetaInfo from './PostMetaInfo'

const htmlDecode = (input) => {
  var e = document.createElement('textarea');
  e.innerHTML = input;
  // handle case of empty input
  return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
}

const Comment = ({ comment }) => {
  return (
    <div className='comment'>
      <PostMetaInfo
        comment={true}
        by={comment.by}
        time={comment.time}
        id={comment.id}
      />
      {htmlDecode(comment.text)}
    </div>
  )
}

export default Comment;