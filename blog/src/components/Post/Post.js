import Card from 'react-bootstrap/Card';
import CommentsList from '../CommentsList/CommentsList';
import "./Post.scss"

const Post = ({data: {userId = 0, id = 0, title = "", body = ""}}) => {
    return (
        <Card className='my-2'>
        <Card.Header className='bg-white text-bold border-bottom-0'>{userId}</Card.Header>
        <Card.Body className='pt-1 pb-2'>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {body}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">
          <CommentsList postId={id} />
        </Card.Footer>
      </Card>
    );
}

export default Post;