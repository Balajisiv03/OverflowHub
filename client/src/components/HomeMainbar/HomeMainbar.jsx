import React from 'react'
import './HomeMainbar.css'
import {useLocation,useNavigate} from 'react-router-dom'
import QuestionsList from './QuestionsList'

const HomeMainbar = () => {

  var user=1;
  const navigate=useNavigate();
  const location=useLocation()

  var questionsList=[
    {
    _id: 1,
    upVotes: 3,
    downVotes:2,
    noOfAnswers: 2,
    questionTitle: "What is a function?",
    questionBody: "it meant to be",
    questionTags: ["java","node js","react js","mangodb"],
    userPosted: "mano",
    userId: 1,
    askedOn: "jan 1",
    answer: [{
      answerBody: "Answer",
      userAnswered: 'kumar',
      answeredOn: "jan 2",
      userId: 2
    }]
   },{
    _id: 2,
    upVotes: 3,
    downVotes: 2,
    noOfAnswers: 0,
    questionTitle: "What is a function?",
    questionBody: "it meant to be",
    questionTags: ["java","R","Python"],
    userPosted: "mano",
    userId: 1,
    askedOn: "jan 1",
    answer: [{
      answerBody: "Answer",
      userAnswered: 'kumar',
      answeredOn: "jan 2",
      userId: 2
    }]
   },{
    _id: 3,
    upVotes: 3,
    downVotes: 2,
    noOfAnswers: 0,
    questionTitle: "What is a function?",
    questionBody: "it meant to be",
    questionTags: ["java","R","python"],
    userPosted: "mano",
    userId: 1,
    askedOn: "jan 1",
    answer: [{
      answerBody: "Answer",
      userAnswered: 'kumar',
      answeredOn: "jan 2",
      userId: 2
    }]
  }]

    const checkAuth=()=>{
       if(user===null){
          alert("Login or Signup to ask a question");
          navigate('Auth')
       }
       else{
         navigate('AskQuestion')
       } 
    }

  return (
    <div className="main-bar">
       <div className="main-bar-header">
           {
             location.pathname==='/'? <h1>"Top Questions"</h1> :  <h1>"All Questions"</h1> 
           }
           <button onClick={checkAuth} className="ask-btn">Ask Question</button>
       </div>
       <div>
        {
          questionsList===null ?
          <h1>Loading...</h1> :
          <>
            <p>{questionsList.length} Questions</p>
            <QuestionsList questionsList={questionsList}/>
          </>
        }
       </div>
    </div>
  )
}

export default HomeMainbar
