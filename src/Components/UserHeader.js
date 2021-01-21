import React from 'react';
import {connect} from 'react-redux';

//import { fetchUser } from '../Actions';

class UserHeader extends React.Component{

    // componentDidMount() // it was avaided using combained method in action method
    // {
    //     this.props.fetchUser(this.props.userId);
    // }

    render(){

        const {userName} = this.props;

        if(!userName)
        {
            return null;
        }
        return (
            <div className="header">{userName.name}</div>
        );
    }
};

const mapStateToProps = (state,ownProps) =>{
    return { userName : state.userName.find(us => us.id === ownProps.userId) }
}
//export default connect(mapStateToProps,{fetchUser})(UserHeader);
export default connect(mapStateToProps)(UserHeader);