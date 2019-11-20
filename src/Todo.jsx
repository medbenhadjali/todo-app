import React, { Component } from 'react'
import './Todo.css'
export default class Todo extends Component {
     
    state = {
        myInputValue : "",
        tab:[]   
        // check:false 
      }
    recup = (e)=>{
        e.preventDefault()
        this.setState({
            // tab: this.state.tab.concat(this.state.myInputValue),
            tab: [...this.state.tab, {text: this.state.myInputValue, check: false}],
            myInputValue : ""
        });
        
    };
    modif = (i)=>{
        let newState = this.state.tab
        newState[i].check=true
        this.setState({
          tab:newState
        });
        
    };
    del = (i)=>{
        let newState = this.state.tab
    
        this.setState({
          tab:newState.filter((el,id)=> i !== id)
        });
        
    };
                                          
    render() {
        return (
            <div>
                 
                <div className="todo-contener">
                <h1>To-Do App!</h1>
                <h6>Add New To-Do </h6>
                <form onSubmit={this.recup}>
                    <input className="taper-text" type="text" value={this.state.myInputValue} onChange={e => this.setState({myInputValue: e.target.value})}/> <br/>
                <button className="add" >Add</button>
                </form>
                
                </div>
                <div>
                {this.state.tab.map((el, i)=><div key={i}><button key={i} onClick={()=>this.modif(i)} >complet</button><button onClick={()=>this.del(i)}  key={i}>delete</button> <span className={(el.check)?'check':''} key={i}>{el.text}</span></div>)}
                </div>
            </div>
        )
    }

}

