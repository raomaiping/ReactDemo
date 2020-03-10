import React, { Component } from 'react';
import PropTypes from 'prop-types'
class GirlItem extends Component {

    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this);
    }

    //组件第一次存在于dom中，函数是不会被执行
    //如果已经存在于dom中，函数才会被执行
    componentWillReceiveProps(){
        console.log('child-componentWillReceiveProps')
    }

    render() { 
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