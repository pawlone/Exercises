import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import "./CommentsList.scss"
import { useState } from 'react';
import { useRest } from '../Hooks/Hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment } from '@fortawesome/free-regular-svg-icons'
const url = 'https://jsonplaceholder.typicode.com/posts/';


const CommentsList = ({postId = 0}) => {
    const [isVisible, setIsVisible] = useState(false);
    const {resultData : comments, isLoading, error} = useRest(url + postId + "/comments");
    const handleClick = () => {
        if (isVisible) {
            setIsVisible(false);
        } else {
            setIsVisible(true);
        }
    }



    if (!isVisible) {
        return (
            <Button onClick={handleClick} variant="border-radius-none" className='px-0'>
                <FontAwesomeIcon icon={faComment} />
            </Button>
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
                    <Button onClick={handleClick} variant="border-radius-none" className='px-0'>
                    <FontAwesomeIcon icon={faComment} /></Button>
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