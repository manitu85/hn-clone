import Link from 'next/link'
import { AiOutlineLike, AiOutlineComment } from 'react-icons/ai'
import { RiUserStarLine } from 'react-icons/ri'
import {
  Story,
  StoryList,
  StoryListTitle,
  StoryTitle,
  StoryUser,
  StoryDetails,
  userIcon,
  commentIcon
} from '@/components/StoryList.styles'


const StoryListComponent = ({ stories, description }) => (
  <StoryList>
    <StoryListTitle>{description}</StoryListTitle>
    {
      stories.map(story => {
        return (
          <Story key={story.id} >
            <StoryUser> 
              <RiUserStarLine style={userIcon} />
              <span>{story.user}</span>
              <span>•</span>
              <span>{story.time_ago}</span>
            </StoryUser>
            <StoryTitle>
              <a href={story.url}>{story.title}{' '}[{story.domain}]</a>
            </StoryTitle>
            <StoryDetails>
              <AiOutlineLike style={commentIcon} />
              <span> {story.points || 0} points</span>
              <AiOutlineComment style={commentIcon} />
              <Link href={`/story?id=${story.id}`}>
                <a>{story.comments_count || 0} comments</a>
              </Link>
            </StoryDetails>
          </Story>
        )
      })
    }
  </StoryList>
)


export default StoryListComponent




