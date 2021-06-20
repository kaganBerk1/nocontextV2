import React, { Component } from 'react'
import PropTypes from 'prop-types'
import question from "./question.js"
import './QuestionPart.css'
import Stack from '@material-ui/core/Stack';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import CloseIcon from '@material-ui/icons/Close';
const getQuestion=()=>{
    let id=Math.floor(Math.random() * (34 - 1) ) + 1;
    const item=question.find(s=>s.id==id);
    return item;
}
    
export class QuestionPart extends Component {

    
    constructor(props) {
        super(props);
        this.state = {
            question: getQuestion(),
            score:1,
            isTrue:false,
            answe:"null",
        };
      }

    cheack=(q,e)=>{
        let score2=this.state.score;
        score2+=1;
        if(q.answer==e.target.innerText){
            this.setState({
                question:getQuestion(),
                score:score2,
                isTrue:true,
                answer:q.answer,
            })
        }else {
            this.setState({
                question:getQuestion(),
                answer:q.answer,
                isTrue:false,
            })
        }
    }
    render() {
        const {question,isTrue,answer}=this.state;
        const listNames=["CAN","MERT","TANCAN"];

        return (
            <div className="body">
                
                    <span className="question">{question.question}</span>
                
                    <div className="answer">
                       { listNames.map((name,i)=>{
                        return(<>{question.answer==name?<DoneOutlineIcon className={isTrue?"icon":"iconClicked"}></DoneOutlineIcon >:<CloseIcon className={isTrue?"icon":"iconClicked"}></CloseIcon>}
                        <Button onClick={(e)=>this.cheack(question,e)}  className="button" variant="contained" color={"secondary"} >
                        {name}
                    </Button></>)
                        })}
                    </div>   

                    <h2 style={{position:"relative",top:"20px"}}>Score = {this.state.score==1?0:this.state.score-1}</h2> 

                    <h2 className={isTrue?"showAnswer":"closeAnswer"}>Cevap Buydu = {answer}</h2>         
            </div>
        )
    }
}

export default QuestionPart
