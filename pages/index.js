import React from 'react'
import Error from 'next/error'
import fetch from 'isomorphic-fetch'
import StoryList from '@/components/StoryLists.component'

export default ({ stories }) => {
  // console.log('STORIESProps:', stories)

  if(stories.length === 0) return <Error statusCode={503} />

  return (
    <>
      <h1>Hakers news next js</h1>
      <StoryList stories={stories} />
    </>
  )
}

export const getServerSideProps = async (context) => {
  console.log(context)
  
  let data
  
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