import { 
  CommentWrapper, 
  CommentUser, 
  NestedComment,
  CommentContent
} from '@/components/Comment.styles'

const Comment = ({ comment }) => (
  <CommentWrapper>
    <CommentUser>{comment.user}</CommentUser>
    <CommentContent dangerouslySetInnerHTML={{ __html: comment.content }} />
    {
      comment.comments && (
      <NestedComment>
        {comment.comments.map(nestedComment => (
          <Comment key={nestedComment.id} comment={nestedComment} />
        ))}
      </NestedComment>)
    }
  </CommentWrapper>
)

export default Comment
