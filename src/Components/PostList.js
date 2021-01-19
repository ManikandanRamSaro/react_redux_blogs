import React from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../Actions';

import UserHeader from './UserHeader';
class PostList extends React.Component{

    componentDidMount()
    {
        this.props.fetchPost();
    }

    renderLists()
    {
        return this.props.ptext.map(po =>{
            return ( <div className="item" key={po.id}>
                        <i className="large middle aligned icon user"/>
                        <div className="content">
                            <div className="description">
                                <h2>{po.title}</h2>
                                <p>{po.body}</p>
                            </div>
                            <UserHeader userId={po.userId}/>
                        </div>
                    </div>);
        });
    }

    render(){
        
        return (
            <div className="ui relaxed divided list">
               {this.renderLists()}
            </div>
        );
    }
}
 
const mapStateToProps = state => {
    return { ptext : state.ptext } // ptext is the key -> which was defined in reducer declareation part, using that only api will be called
}

export default connect(mapStateToProps,{fetchPost})(PostList);