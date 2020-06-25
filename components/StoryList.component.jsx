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
import { RiUser5Line, RiUserStarLine } from 'react-icons/ri'


const StoryListComponent = ({ stories, description }) => {
  
  return (
    <StoryList>
      <StoryListTitle>{description}</StoryListTitle>
      {
        stories.map(story => {
          return (
            <Story key={story.id} >
              <StoryUser> 
                <RiUserStarLine size={16} color='#9f9f9f' />
                <span>{story.user}</span>
                <span>•</span>
                <span>{story.time_ago}</span>
              </StoryUser>
              <StoryTitle>
                <a href={story.url}>{story.title}{' '}[ {story.domain} ]</a>
              </StoryTitle>
              <StoryDetails>
                <AiOutlineLike size={16} color='#9f9f9f'/>
                <span> {story.points || 0} points</span>
                <AiOutlineComment size={16} color='#9f9f9f'/>
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

export default StoryListComponent




