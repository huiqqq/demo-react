import React, { Component } from 'react';
import './App.css';
import {Button,Input} from "antd";

let isOnComposition=false;

class Fa extends Component {
    constructor(props){
        super(props)
        this.state={
            value:'',
            value2:'',
        }

    }
    handleComposition=(e)=>{
        console.log(this)
        const userAgent = navigator.userAgent;
        console.log(e.type,"发放",userAgent)
        if (e.type === 'compositionend') {
            // composition is end
            isOnComposition = false
            this.changeEvent(e)
            // if (!isOnComposition && userAgent.indexOf("Chrome") > -1) {
            //     // fire onChange
            //     this.changeEvent(e);
            // }
        } else {
            // in composition
            isOnComposition = true
        }
    }

    changeEvent=(e)=> {
        console.log("af",isOnComposition);
        let trueValue=e.target.value
        if (!isOnComposition) {
            trueValue=e.target.value.replace(/^[^\u4E00-\u9FA5]|[^\-\u4E00-\u9FA5]+/g,'')
        }
        console.log(trueValue)
        this.setState({value:trueValue})
    }

    handleComposition1=(e)=>{
        console.log(this)
        const userAgent = navigator.userAgent;
        console.log(e.type,userAgent)
        if (e.type === 'compositionend') {
            // composition is end
            isOnComposition = false
            if (!isOnComposition && userAgent.indexOf("Chrome") > -1) {
                // fire onChange
                this.changeHandle(e);
            }
        } else {
            // in composition
            isOnComposition = true
        }
    }
    changeHandle=(e)=>{
        console.log(isOnComposition);
        let trueValue=e.target.value
        console.log(trueValue)
        if (!isOnComposition) {
            trueValue=e.target.value.replace(/[^0-9a-zA-Z\u4E00-\u9FA5]+/g,'')
        }
        console.log(trueValue)
        this.setState({value2:trueValue})
    }
    render() {
        return (
            <div className="App">
                <Button type='primary'>button</Button>
                <Input type='text' onChange={this.changeEvent}
                       onCompositionStart={this.handleComposition}
                       onCompositionUpdate={this.handleComposition}
                       onCompositionEnd={this.handleComposition}
                       value={this.state.value}
                       placeholder='汉字/-/ 且以汉字开头'
                />
                <Input type='text' onChange={this.changeHandle}
                       onCompositionStart={this.handleComposition1}
                       onCompositionUpdate={this.handleComposition1}
                       onCompositionEnd={this.handleComposition1}
                       value={this.state.value2}
                       placeholder='汉字/数字/字母'/>
            </div>
        );
    }
}

export default Fa;