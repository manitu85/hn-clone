import Link from 'next/link'
import {
  StoryList,
  Story,
  StoryTitle,
  StoryDetails 
} from '@/components/StoryLists.styles'

const StoryLists = ({ stories }) => {
  
  return (
    <StoryList>
      {
        stories.map(story => {
          return (
            <Story key={story.id} >
              <StoryTitle>
                <a href={story.url}>{story.title}</a>
              </StoryTitle>
              <StoryDetails>
                <span>{story.points || 0} points</span>
                <Link href={`/story/${story.id}`}>
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

export default StoryLists