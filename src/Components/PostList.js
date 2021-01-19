import React from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../Actions';

class PostList extends React.Component{

    componentDidMount()
    {
        this.props.fetchPost();
    }
    render(){
        console.log(this.props.ptext)
        return (
            <div>
                Post List
            </div>
        );
    }
}
 
const mapStateToProps = state => {
    return { ptext : state.ptext } // ptext is the key -> which was defined in reducer declareation part, using that only api will be called
}

export default connect(mapStateToProps,{fetchPost})(PostList);