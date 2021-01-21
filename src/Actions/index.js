import jsonplaceholder from '../APIs/JsonPlaceholder';

import _ from 'lodash';


export const fetchPost = () =>  async (dispatch) => {
    
        const response = await jsonplaceholder.get('/posts');

        dispatch({ type : 'FETCH_POST' , payload : response.data})
    };

export const fetchUser = (userid) => dispatch => {
    _fetchUser(userid,dispatch);
    
};

const _fetchUser = _.memoize( async (userid,dispatch)=>{
    const response = await jsonplaceholder.get(`/users/${userid}`);

    dispatch({ type : 'FETCH_USER',payload : response.data })
});
