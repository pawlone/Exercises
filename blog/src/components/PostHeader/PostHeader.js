import { useRest } from "../Hooks/Hooks";
import "./PostHeader.scss";

const url = "https://jsonplaceholder.typicode.com/users/";

const PostHeader = ({ userId = 0 }) => {

    const { resultData: user, isLoading, error } = useRest(url + userId)

    if (error) {
        return <div>Error: {error.message}</div>
    }
    if (isLoading) {
        return <div>Loading...</div>
    } else {
        return (
            <div className="row post-header">
                <div className="col-2 col-md-1 text-center">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" alt="" className="rounded-circle" />
                </div>
                <div className="col-10 col-md-11">
                    <span className="align-middle">{user.name}</span>
                </div>
            </div>
        );
    }
}

export default PostHeader;