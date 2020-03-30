import React,{Component} from 'react'


export default class Item extends Component{

    removeContents=()=>{
        const {delComment,index}=this.props;
        if(window.confirm("确认删除吗?")){
            delComment(index);
        }

    }

    render(){
        const {comment,index}=this.props;

        return (
                <li className="list-group-item">
                    <div className="handle">
                        <a href="javascript:void(0)" onClick={this.removeContents}>删除</a>
                    </div>
                    <p className="user"><span>{comment.username}</span><span>说:</span></p>
                    <p className="centence">{comment.content}</p>
                </li>
        )
    }
}

