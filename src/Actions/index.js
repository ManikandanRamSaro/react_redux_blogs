import jsonplaceholder from '../APIs/JsonPlaceholder';


export const fetchPost = () =>{

    const promise = jsonplaceholder.get('/posts');

    return {
        type : 'FETCH_POST',
        payload : promise
    };
}