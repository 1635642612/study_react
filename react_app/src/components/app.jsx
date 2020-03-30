import React,{Component} from 'react'
import Add from "./add/add";
import Comment from "./comment/comment";

export default class App extends Component{

    state = {
        comments:[{username:'tom',content:'react太难'},{username:'jack',content:'react好玩'}]
    }

    addComment=(comment)=>{
        const {comments} = this.state;
        comments.unshift(comment);
        this.setState({comments})
    }

    delComment =(index)=>{
        const {comments} = this.state;
        comments.splice(index,1);
        this.setState({comments})
    }

    render(){
        const {comments} = this.state;
        return (
            <div id="app">
                <div>
                    <header className="site-header jumbotron">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-12">
                                    <h1>请发表对React的评论</h1>
                                </div>
                            </div>
                        </div>
                    </header>
                    <div className="container">

                       <Add addComment={this.addComment}/>

                       <Comment comments={comments} delComment={this.delComment}/>

                    </div>
                </div>
            </div>
        )
    }
}

