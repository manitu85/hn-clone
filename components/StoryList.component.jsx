import Link from 'next/link'
import {
  Story,
  StoryList,
  StoryListTitle,
  StoryTitle,
  StoryUser,
  StoryDetails 
} from '@/components/StoryList.styles'


const StoryListComponent = ({ stories, description }) => {
  
  return (
    <StoryList>
      <StoryListTitle>{description}</StoryListTitle>
      {
        stories.map(story => {
          return (
            <Story key={story.id} >
              <StoryUser>
                <span>{story.user}</span>{' '}
                <span>{story.time_ago}</span>
              </StoryUser>
              <StoryTitle>
                <a href={story.url}>{story.title}{' '}({story.domain})</a>
              </StoryTitle>
              <StoryDetails>
                <span>{story.points || 0} points</span>
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




