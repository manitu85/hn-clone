import Link from 'next/link'
import Error from 'next/error'
import fetch from 'isomorphic-fetch'
import styled from 'styled-components'
import Layout from '@/components/Layout.component'
import CommentList from '@/components/CommentList.component'

const Story = ({ story }) =>  {

    console.log('STORY:', story)
    
    if (!story) return <Error statusCode={503} />
    
    return (
      <Layout title={story.title} >
        <Main>
          <StoryTitle>
            <a href={story.url} >{story.title}{' '}({story.domain})</a>
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
    console.log(storyId);
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


const Main = styled.main`
  padding: 1em;  
`

const StoryTitle = styled.h1`
  font-size: 1.2rem;
  margin: 0;
  font-weight: 300;
  padding-bottom: 0.5em;

  a {
    color: #333;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  } 
`

const StoryDetails = styled.div`
  font-size: 0.8rem;
  padding-bottom: 1em;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 1em;

  strong {
    margin-right: 1em;
  }

  a {
    color: #f60;
  }
`