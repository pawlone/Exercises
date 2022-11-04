import Card from 'react-bootstrap/Card';
import CommentsList from '../CommentsList/CommentsList';
import PostHeader from '../PostHeader/PostHeader';
import "./Post.scss"

const Post = ({ data: { userId = 0, id = 0, title = "", body = "" } }) => {
  return (
    <Card className='my-2'>
      <Card.Header className='bg-white text-bold border-bottom-0'>
        <PostHeader userId={userId} /></Card.Header>
      <Card.Body className='pt-1 pb-2'>
        <div className="row">
          <div className="col-2 col-md-1"></div>
          <div className="col-10 col-md-11">
            <Card.Title className='post-title'>{title}</Card.Title>
            <Card.Text className='post-body'>
              {body}
            </Card.Text>
          </div>
        </div>
      </Card.Body>
      <Card.Footer className="text-muted">
        <div className="row">
          <div className="col-2 col-md-1"></div>
          <div className="col-10 col-md-11">
            <CommentsList postId={id} />

          </div>
        </div>
      </Card.Footer>
    </Card>
  );
}

export default Post;