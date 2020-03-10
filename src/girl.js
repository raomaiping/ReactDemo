import React,{Component,Fragment} from 'react'
import axios from 'axios'
import './style.css'
import GirlItem from './girlItem'
class Girl extends Component{
    constructor(props){
        super(props);
        this.state = {
            inputValue:"",
            list:['基础按摩','精油推背']
        }
    }

    componentDidMount(){
        axios.post('https://web-api.juejin.im/v3/web/wbbr/bgeda')
             .then((res) =>{
                 console.log('axios 获取数据成功:' + JSON.stringify(res))
             })
             .catch((err) =>{
                console.log('axios 获取数据失败:' + err)
             })
    }

    render(){
        // console.log('3-render-----------组件挂载中')
        return (
            <Fragment>
                {/* 第一次写注释 */}
                <div>
                    <label htmlFor="rmp">增加服务:</label>
                    <input 
                        id="rmp" 
                        className="input" 
                        value={this.state.inputValue} 
                        onChange={this.inputChange.bind(this)}
                        ref = {(input) =>{this.input = input}}
                    />
                    <button onClick={this.addList.bind(this)}>增加服务</button>
                </div>
                <ul ref={(ul) =>{this.ul = ul}}>
                    {
                        this.state.list.map((item,index) =>{
                            return (
                                    <GirlItem
                                        content={item}
                                        key={index+item}
                                        index={index}
                                        deleteItem={this.deleteItem.bind(this)}
                                    />
                            )
                        })
                    }
                </ul>
            </Fragment>

        )
    }

    inputChange(e){
        // console.log(e.target.value)
        // console.log(this)
        this.setState({
            inputValue:this.input.value
        })

    }

    // 增加列表
    addList(){
        this.setState({
            list:[...this.state.list,this.state.inputValue],
            inputValue:''
        },()=>{
            console.log(this.ul.querySelectorAll('li').length)
        })

        // console.log(this.ul.querySelectorAll('li').length)
    }

    // 删除列表项
    deleteItem(index){
       let list = this.state.list;
       list.splice(index,1);
       this.setState({
           list
       })
    }
} 

export default Girl