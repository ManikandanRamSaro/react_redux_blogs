import React from 'react';
import {connect} from 'react-redux';

import { fetchUser } from '../Actions';

class UserHeader extends React.Component{

    componentDidMount()
    {
        this.props.fetchUser(this.props.userId);
    }

    render(){

        const user = this.props.userName.find(us => us.id===this.props.userId);

        if(!user)
        {
            return null;
        }
        return (
            <div className="header">{user.name}</div>
        );
    }
};

const mapStateToProps = (state) =>{
    return { userName : state.userName }
}
export default connect(mapStateToProps,{fetchUser})(UserHeader);