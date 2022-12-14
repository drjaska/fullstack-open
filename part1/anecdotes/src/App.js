import { useState } from 'react'

const Button = ({handleClick, text}) => {
  return <button onClick={handleClick}>{text}</button>
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]
  const [selectedAnecdote, setAnecdote] = useState(0)
  const [points, setPoints] = useState(new Uint8Array(anecdotes.length))
  
  const handleRandomAnecdote = () => {
    setAnecdote(Math.floor(Math.random() * (anecdotes.length)))
  }

  const getAnecdoteVotes = (id) => {
    return points[id]
  }

  const getMostVotedAnecdoteID = () => {
/*
    let mostVotedID = 0

    for (let i = 0 ; i<anecdotes.length ; i++) {
      if (points[mostVotedID] < points[i]) mostVotedID = i
    }
    return mostVotedID
*/
    return points.indexOf(Math.max(...points))
  }

  const handleVoteAnecdote = () => {
    const copy = [...points]
    copy[selectedAnecdote] += 1

    setPoints(copy)
  }

  const HasVotes = ({votes}) => {
    return <p>has {votes} votes </p>
  }

  return (
    <div>
        <h2>Anecdote of the day</h2>
	<p>{anecdotes[selectedAnecdote]}</p>
        <HasVotes votes={getAnecdoteVotes(selectedAnecdote)} />
        <Button handleClick={() => handleVoteAnecdote()} text="vote" />
        <Button handleClick={() => handleRandomAnecdote()} text="random anecdote" />
        <h2>Anecdote with the most votes</h2>
        <p>{anecdotes[getMostVotedAnecdoteID()]} </p>
        <HasVotes votes={getAnecdoteVotes(getMostVotedAnecdoteID())} />
    </div>
  )
}

export default App

