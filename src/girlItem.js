import React, { Component } from 'react';
import PropTypes from 'prop-types'
class GirlItem extends Component {

    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this);
    }

    shouldComponentUpdate(nextProps,nextState){
        if(nextProps.content !== this.props.content){
            return true
        }else{
            return false
        }
       
    }
    render() { 
        console.log('child-render')
        return ( 
            <li onClick={this.handleClick}>
            {this.props.avname}为你服务~{this.props.content}
            </li>
         );
    }

    handleClick(){
       this.props.deleteItem(this.props.index)
        
    }
}
 
GirlItem.propTypes = {
    avname:PropTypes.string.isRequired,
    content:PropTypes.string,
    index:PropTypes.number,
    deleteItem:PropTypes.func
}

GirlItem.defaultProps = {
    avname:'波多野结衣'
}
export default GirlItem;