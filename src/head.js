import React, { Component } from 'react'
import './head.css'


export class head extends Component {
    static propTypes = {

    }
    render() {
        return (
            <div className="head">
                <h1>NoContext Quiz</h1>
                <h2>Bunu kim söylemiştir?</h2>
            </div>
        )
    }
}

export default head
