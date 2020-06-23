import React from 'react'
import Error from 'next/error'
import fetch from 'isomorphic-fetch'
import StoryListComponent from '@/components/StoryList.component'
import Layout from '@/components/Layout.component'


export default ({ stories }) => {
  // console.log('STORIESProps:', stories)

  if(stories.length === 0) return <Error statusCode={503} />

  return (
    <Layout 
      title='Hacker News Next'
      description='Hacker News clone made with Next js'
    >
      <h1>Hackers news next js</h1>
      <StoryListComponent stories={stories} />
    </Layout>
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



