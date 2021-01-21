import jsonplaceholder from '../APIs/JsonPlaceholder';

import _ from 'lodash';


export const fetchAllPostByOne = () => async (dispatch,getState) =>{
    await dispatch(fetchPost()); 

    // const uniUser= _.uniq(_.map(getState().ptext,'userId'));
    // uniUser.forEach(id => dispatch(fetchUser(id)));  //-> these 2 lines are avoided using below line 

    _.chain(getState().ptext).map('userId').uniq().forEach(id=> dispatch(fetchUser(id))).value();

}

export const fetchPost = () =>  async (dispatch) => {
    
        const response = await jsonplaceholder.get('/posts');

        dispatch({ type : 'FETCH_POST' , payload : response.data})
    };

export const fetchUser = (userid) => async dispatch => {
    const response = await jsonplaceholder.get(`/users/${userid}`);

    dispatch({ type : 'FETCH_USER',payload : response.data })
};



// export const fetchUser = (userid) => dispatch => {
//     _fetchUser(userid,dispatch);
    
// };

// const _fetchUser = _.memoize( async (userid,dispatch)=>{
//     const response = await jsonplaceholder.get(`/users/${userid}`);

//     dispatch({ type : 'FETCH_USER',payload : response.data })
// });

