import React from 'react'
import Comment from '../../assets/comment-alt.svg'
import pen from '../../assets/penicon.jpeg'
import stackicon from '../../assets/stack icon.png'

const Widget = () => {
  return (
    <div className="widget">
        <h4>The Overflow Blog</h4>
        <div className="right-sidebar-div-1">
           <div className="right-sidebar-div-2">
             <img src={pen} width="18px" alt="pen" />
             <p>Observability is the key to the feature of software(and your DevOps career)</p>
           </div>
           <div className="right-sidebar-div-2">
             <img src={pen} width="18px" alt="pen" />
             <p>Podcast 374: How valuable is your screen name?</p>
           </div>
        </div>
        <h4>Featured on Meta</h4>
        <div className="right-sidebar-div-1">
           <div className="right-sidebar-div-2">
             <img src={Comment} width="18px" alt="comment" />
             <p>Review queue workflows- Final release....</p>
           </div>
           <div className="right-sidebar-div-2">
             <img src={Comment} width="18px" alt="comment" />
             <p>Please welcome valued associates: #958 - V2Blast959 -SpencerG</p>
           </div>
           <div className="right-sidebar-div-2">
             <img src={stackicon} width="18px" alt="Stackicon" />
             <p>Outdated Answers: accepted answers is now unpinned on Stack Overflow</p>
           </div>
        </div>
        <h4>Hot Meta Posts</h4>
        <div className="right-sidebar-div-1">
           <div className="right-sidebar-div-2">
             <p>38</p>
             <p>Why was this scam flag declined,yet the question marked as spam?</p>
           </div>
           <div className="right-sidebar-div-2">
             <p>20</p>
             <p>What is the best course of action when a user has high enough rep to.....</p>
           </div>
           <div className="right-sidebar-div-2">
             <p>14</p>
             <p>is a link to the "how to ask" help page a useful comment?</p>
           </div>
        </div>
    </div>
  )
}

export default Widget