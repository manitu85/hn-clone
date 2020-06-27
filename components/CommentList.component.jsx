import Comment from './Comment.component'
import { CircleArrow as ScrollUpButton } from 'react-scroll-up-button'

 const CommentList = ({ comments }) => (
  <>
    {comments.map(comment => (
      <Comment key={comment.id} comment={comment} />
    ))}
     <ScrollUpButton
       ContainerClassName='buttonContainer'
       TransitionClassName='buttonTransition'
       EasingType='easeOutExpo'
       ShowAtPosition={200}
       AnimationDuration={600}
     />
  </>
 ) 

export default CommentList