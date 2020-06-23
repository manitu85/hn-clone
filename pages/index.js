import React from 'react'
import Error from 'next/error'
import fetch from 'isomorphic-fetch'

export default ({ stories }) => {
  console.log('STORIES:', stories)

  if(stories.length === 0) return <Error statusCode={503} />

  const storiesData = data => data.map(story => <h3 key={story.id}>{story.title}</h3>)
  
  return (
    <>
      <h1>Hakers news next js</h1>
      <div>
        {storiesData(stories) }
      </div>
    </>
  )
}

export const getServerSideProps = async (context) => {
  let data;
  
  try {
    const res = await fetch('https://node-hnapi.herokuapp.com/news?page=1')
    data = await res.json()
  } catch(err) {
    console.error(err)
  }

  return {
    props: {
      stories: data || []
    }
  }
}