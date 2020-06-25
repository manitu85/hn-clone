import Link from 'next/link'
import Error from 'next/error'
import fetch from 'isomorphic-fetch'
import Layout from '@/components/Layout.component'
import CommentList from '@/components/CommentList.component'
import { Main, StoryTitle, StoryDetails } from '@/components/Story.styles'

const Story = ({ story }) =>  {
 
    if (!story) return <Error statusCode={503} />
    
    return (
      <Layout title={story.title} >
        <Main>
          <StoryTitle>
            <a href={story.url} >{story.title}<span>•</span>({story.domain})</a>
            <Link href='/' >
              <a style={{ float: 'right' }}><span>&larr; back</span></a>
            </Link>{' '}
          </StoryTitle>
          <StoryDetails>
            <strong>{story.points} points</strong>
            <strong>{story.comments_count} comments</strong>
            <strong>{story.time_ago}</strong>
          </StoryDetails>
          {
            story.comments.length > 0 
            ? ( <CommentList comments={story.comments} /> ) 
            : ( <div>No comments for this story</div> )
          }
        </Main>
      </Layout>
    );
}

  export const getServerSideProps = async ({ req, res, query }) => {

  let data
  
  try {
    const storyId = query.id
    const res = await fetch(`https://node-hnapi.herokuapp.com/item/${storyId}`)
    data = await res.json()
  } catch (err) {
    console.error(err)
    data = null
  }

  return {
    props: {
      story: data
    }
  }
}


export default Story

