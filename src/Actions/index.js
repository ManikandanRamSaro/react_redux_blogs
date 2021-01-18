import jsonplaceholder from '../APIs/JsonPlaceholder';


export const fetchPost = () =>  async (dispatch) => {
    
        const response = await jsonplaceholder.get('/posts');

        dispatch({ type : 'FETCH_POST' , payload : response})
    };
