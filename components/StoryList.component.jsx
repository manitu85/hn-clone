import Link from 'next/link'
import {
  Story,
  StoryList,
  StoryListTitle,
  StoryTitle,
  StoryUser,
  StoryDetails,
  Dot 
} from '@/components/StoryList.styles'
import { AiOutlineLike, AiOutlineComment } from 'react-icons/ai'
import { RiUserStarLine } from 'react-icons/ri'


const StoryListComponent = ({ stories, description }) => {
  
  return (
    <StoryList>
      <StoryListTitle>{description}</StoryListTitle>
      {
        stories.map(story => {
          return (
            <Story key={story.id} >
              <StoryUser> 
                <RiUserStarLine style={UserIcon} />
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
}

const UserIcon = {
  fontSize: '12px',
  color: '#9f9f9f'
}

const commentIcon = {
  fontSize: '16px',
  color: '#9f9f9f'
}

export default StoryListComponent




