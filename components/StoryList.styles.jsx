import styled from 'styled-components'

export const Story = styled.div`
  padding: .3em 0;
`

export const StoryList = styled.div`
  padding: 0 1em;
`

export const StoryListTitle = styled.div`
  font-size: 1.8rem;
  letter-spacing: 1px;
  font-weight: 300;
  color: #9f9f9f;
  margin-bottom: -1rem;
  
`

export const StoryUser = styled.div`
  padding-bottom: .4em ;
  margin-bottom: -15px;

  span {
    margin-right: 1em;
    color: #9f9f9f;
    font-size: .65rem;
    letter-spacing: .5px;
  }
`

export const StoryTitle = styled.h2`
  font-size: 1rem;
  font-weight: 300;
  margin: 0;
  /* margin-bottom: .4em; */

  a {
    color: #333;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`

export const StoryDetails = styled.div`
  font-size: .8rem;
  font-weight: bold;

  span {
    margin-right: 1em;
  }

  a {
    /* color: #6600ff; */
    color: #ff6600;;
    text-decoration: none;

     &:hover {
      text-decoration: underline;
    }
  }
`
