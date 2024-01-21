import React,{useState} from 'react'
import {useParams,Link,useNavigate} from 'react-router-dom'
import upVotes from '../../assets/sort-up.svg'
import downVotes from '../../assets/sort-down.svg'
import './Questions.css'
import Avatar from '../../components/Avatar/Avatar' 
import DisplayAnswers from './DisplayAnswers'
import {useSelector,useDispatch} from 'react-redux'
import {postAnswer} from '../../actions/question'
const QuestionsDetails = () => {
    const {id}=useParams();

    const questionsList= useSelector(state=>state.questionsReducer)

    // var questionsList=[
    //     {
    //     _id: '1',
    //     upVotes: 3,
    //     downVotes:2,
    //     noOfAnswers: 2,
    //     questionTitle: "What is a function?",
    //     questionBody: "it meant to be",
    //     questionTags: ["java","node js","react js","mangodb"],
    //     userPosted: "mano",
    //     userId: 1,
    //     askedOn: "jan 1",
    //     answer: [{
    //       answerBody: "Answer",
    //       userAnswered: 'kumar',
    //       answeredOn: "jan 2",
    //       userId: 2
    //     }]
    //    },{
    //     _id: '2',
    //     upVotes: 3,
    //     downVotes: 2,
    //     noOfAnswers: 0,
    //     questionTitle: "What is a function?",
    //     questionBody: "it meant to be",
    //     questionTags: ["java","R","Python"],
    //     userPosted: "mano",
    //     userId: 1,
    //     askedOn: "jan 1",
    //     answer: [{
    //       answerBody: "Answer",
    //       userAnswered: 'kumar',
    //       answeredOn: "jan 2",
    //       userId: 2
    //     }]
    //    },{
    //     _id: '3',
    //     upVotes: 3,
    //     downVotes: 2,
    //     noOfAnswers: 0,
    //     questionTitle: "What is a function?",
    //     questionBody: "it meant to be",
    //     questionTags: ["java","R","python"],
    //     userPosted: "mano",
    //     userId: 1,
    //     askedOn: "jan 1",
    //     answer: [{
    //       answerBody: "Answer",
    //       userAnswered: 'kumar',
    //       answeredOn: "jan 2",
    //       userId: 2
    //     }]
    //   }]   
  
    const [Answer,setAnswer]=useState("");
    const Navigate=useNavigate();
    const dispatch=useDispatch();
    const User=useSelector((state)=>state.currentUserReducer);
    const handlePostAns=(e,answerLength)=>{
         e.preventDefault();
         if(User===null){
            alert("login or signup to answer a question")
            Navigate('/');
         }
         else{
             if(Answer === ''){
                alert("enter an answer before submitting")
             }
             else{
                dispatch(postAnswer({id,noOfAnswers: answerLength+1,answerBody: Answer,userAnswered: User.result.name}))
             }
         }   
    }
    
  return (
    <div className="question-details-page">
       {
        questionsList.data==null?
        <h1>Loading...</h1>:
        <>
            {
                questionsList.data.filter(question=>question._id===id).map(question=>(
                    <div key={question._id}>
                       <section className="question-details-container">
                            <h1>{question.questionTitle}</h1>
                            <div className="question-details-container-2">
                                <div className="question-votes">
                                    <img src={upVotes} width="18" alt="img" className="votes-icon"/>
                                    <p>{question.upVotes-question.downVotes}</p>
                                    <img src={downVotes} width="18" alt="img" className="votes-icon"/>
                                </div>
                                <div style={{width:"100%"}}> 
                                    <p className="question-body">{question.questionBody}</p>
                                </div>
                                <div className='question-details-tags'>
                                      {question.questionTags.map((tag)=>(
                                         <p key={tag}>{tag}</p>
                                     ))}
                                </div>
                                <div className="question-actions-user">
                                    <div>
                                        <button type="button" >Share</button>
                                        <button type="button" >Delete</button>
                                    </div>
                                    <div>
                                        <p>asked {question.askedOn}</p>
                                        <Link to={`/User/${question.userId}`} className="user-link" style={{color: '#008638'}}>
                                            <Avatar backgroundColor="orange" px='8px' py='5px'>{question.userPosted.charAt(0).toUpperCase()}</Avatar>
                                            <div>
                                                {question.userPosted}
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div> 
                       </section>
                       {question.noOfAnswers!==0 && (
                            <section>
                                <h3>{question.noOfAnswers}</h3>
                                <DisplayAnswers key={question._id} question={question}/>
                            </section>  
                        )}
                        <section className="post-ans-container">
                            <h3>Your Answer</h3>
                            <form onSubmit={(e)=>{handlePostAns(e,question.answer.length)}}>
                                <textarea name="" id="" cols="30" rows="10" onChange={e=>setAnswer(e.target.value)}></textarea><br/>
                                <input type="submit" className="post-ans-btn" value="post your answer"/>
                            </form>
                            <p>Browse other question tagged 
                            {question.questionTags.map((tag)=>(
                               <Link to="/Tags" key={tag} className="ans-tags">{tag}</Link>
                            ))}
                            or 
                            <Link to="/AskQuestion" style={{textDecoration: 'none',color: '#009dff'}}> ask your own question.</Link>
                            </p>
                        </section>
                    </div>
                )) 
            }
        </>
       }
    </div>
  )
}

export default QuestionsDetails