import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './head.css'
import CardHeader from '@material-ui/core/CardHeader';

export class head extends Component {
    static propTypes = {

    }
    render() {
        return (
            <div className="head">
                <h1>NoContext Quiz</h1>
                <h2>Bunu kim söylemiştir?</h2>
                <h4>(Aşağıda isimleri geçen kişiler tamamen hayal ürünüdür. Herhangi bir kişi ya da kişilerle bir ilişki yoktur)</h4>
            </div>
        )
    }
}

export default head
