import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import "./CommentsList.scss"
import axios from 'axios';
import { useState } from 'react';
import { useRest } from '../Hooks/Hooks';

const url = 'https://jsonplaceholder.typicode.com/posts/';
const fetcher = (url) => {
    return axios.get(url).then(result => result.data);
}


const CommentsList = ({postId = 0}) => {
    const [isVisible, setIsVisible] = useState(false);
    const {resultData : comments, isLoading, error} = useRest(url + postId + "/comments", fetcher);
    const handleClick = () => {
        if (isVisible) {
            setIsVisible(false);
        } else {
            setIsVisible(true);
        }
    }



    if (!isVisible) {
        return (
            <Button onClick={handleClick} variant="text-small border-radius-none">Mostra Commenti</Button>
        );
    } else {
        if(error) {
            return (<div>Error: {error.message}</div>)
        }
        if(isLoading) {
            return (<div>Loading...</div>)
        } else {
            return (
                <>
                    <Button onClick={handleClick} variant="text-small border-radius-none">Nascondi Commenti</Button>
                    <ListGroup variant="flush">
                        {comments.map (c => {
                            return (
                                <ListGroup.Item key={c.id} className='comment-text'>
                                <h4>{c.email}</h4>
                                <p>{c.name}</p>
                            </ListGroup.Item>
                            );
                        })}
                    </ListGroup>
                </>
    
            );
        }
    }

}

export default CommentsList;