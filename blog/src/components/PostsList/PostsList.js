import Post from "../Post/Post";
import axios from "axios"
import { useRest } from "../Hooks/Hooks";

const url = "https://jsonplaceholder.typicode.com/posts";

const fetcher = (url) => {
    return axios.get(url).then(result => {
        return result.data});
}
const PostsList = () => {
    const { resultData: posts, isLoading, error } = useRest(url, fetcher);

    if (error) {
        return <div>Error: {error.message}</div>
    }
    if(isLoading) {
        return <div>is loading...</div>
    }
    
    else {
        return (
            <div className="container my-2">
                {posts.map(p => {
                    return <Post key={p.id} data = {p} />
                })}

            </div>
        );
    }
}

export default PostsList;