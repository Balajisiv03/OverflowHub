import React from 'react'
import { Link,useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {deleteAnswer} from  '../../actions/question'

import moment from 'moment'
import Avatar from '../../components/Avatar/Avatar'

const DisplayAnswers = ({question,handleShare}) => {

 const User=useSelector((state)=>state.currentUserReducer);
 const {id}=useParams();
 const dispatch=useDispatch();
 const handleDelete=(answerId,noOfAnswers)=>{
    dispatch(deleteAnswer(id,answerId,noOfAnswers-1));
 }

  return (
    <div>
        {question.answer.map((ans)=>(
            <div className="display-ans" key={ans._id}>
                 <p>{ans.answerBody}</p>
                 <div className="question-actions-user">
                     <div>
                        <button type="button" onclick={handleShare}>Share</button>
                        {
                            User.result._id===question.userId && (
                                <button type="button" onClick={()=>handleDelete(ans._id,question.noOfAnswers)}>Delete</button>
                            )
                         }
                     </div>
                     <div>
                        <p>answered {moment(ans.answeredOn).fromNow()}</p>
                        <Link to={`/Users/${ans.userId}`} className="user-link" style={{color: '#008638'}}>
                            <Avatar backgroundColor="green" px='8px' py='5px'>{ans.userAnswered.charAt(0).toUpperCase()}</Avatar>
                            <div>
                                {ans.userAnswered}
                            </div>
                        </Link>
                     </div>
                 </div>
            </div>
        ))}
    </div>
  )
}

export default DisplayAnswers