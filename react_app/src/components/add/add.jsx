import React,{Component} from 'react'



export default class Add extends Component{
    //思路： 1：收集数据   更新状态
    state = {
        username:'',
        content:''
    }
    getUsername =(event)=>{
        let username = event.target.value;
        this.setState({username})
    }
    getContent =(event)=>{
        let content = event.target.value;
        this.setState({content})
    }

    handleSub = () => {
        const {addComment}=this.props;
        addComment(this.state);
        this.setState({username:'',content:''})
    }


    render(){
        const  {username}= this.state;
        const  {content}= this.state;
        return (
            <div className="col-md-4">
                <form className="form-horizontal">
                    <div className="form-group">
                        <label>用户名</label>
                        <input type="text" value={username} onChange={this.getUsername} className="form-control" placeholder="用户名"/>
                    </div>
                    <div className="form-group">
                        <label>评论内容</label>
                        <textarea className="form-control" rows="6" value={content} onChange={this.getContent} placeholder="评论内容"></textarea>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="button" className="btn btn-default pull-right" onClick={this.handleSub}>提交</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

