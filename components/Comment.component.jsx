import { 
  CommentWrapper, 
  CommentUser, 
  NestedComment 
} from '@/components/Comment.styles'

const Comment = ({ comment }) => (
  
  <CommentWrapper>
    <CommentUser>{comment.user}</CommentUser>
    <div
      className="comment-content"
      dangerouslySetInnerHTML={{ __html: comment.content }}
    />
    {
      comment.comments && (
      <NestedComment>
        {comment.comments.map(nestedComment => (
          <Comment key={nestedComment.id} comment={nestedComment} />
        ))}
      </NestedComment>)
    }

    <style jsx>{`
      .comment-content {
        font-size: 0.9rem;
      }
      .comment-content :global(p) {
        margin: 0;
        margin-bottom: 0.5em;
        word-wrap: break-word;
      }
      .comment-content :global(a) {
        color: #f60;
        text-decoration: underline;
      }
      .comment-content :global(pre) {
        max-width: 100%;
        overflow: scroll;
      }
    `}</style>
  </CommentWrapper>
);

export default Comment
