import React, { Component } from 'react';
class Rmp extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isShow:true
         }
         this.toToggole = this.toToggole.bind(this)
    }
    render() { 
        return ( 
            <div>
                <div className={this.state.isShow ? 'show' : 'hide'}>Rmp---前端小菜鸟吖</div>
                <div><button onClick={this.toToggole}>召唤菜鸟</button></div>
            </div>
         );
    }

    toToggole(){
        this.setState({
            isShow:!this.state.isShow
        })
    }
}
 
export default Rmp;