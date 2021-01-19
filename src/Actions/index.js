import jsonplaceholder from '../APIs/JsonPlaceholder';


export const fetchPost = () =>  async (dispatch) => {
    
        const response = await jsonplaceholder.get('/posts');

        dispatch({ type : 'FETCH_POST' , payload : response.data})
    };

export const fetchUser = (userid) => async dispatch => {
    const response = await jsonplaceholder.get(`/users/${userid}`);

    dispatch({ type : 'FETCH_USER',payload : response.data })
};
