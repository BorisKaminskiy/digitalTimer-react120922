import React, { useState, useEffect } from 'react'
import './App.css'

export default function App() {
  let [state, setState] = useState({ playing: false, count: 3000 })

  useEffect(() => {
    let interval
    if (state.playing) {
      interval = setInterval(() => {
        setState(({ playing, count }) => {
          return {
            count: Math.max(count - 100, 0),
            playing: Math.max(count - 100, 0) > 0,
          }
        })
      }, 100)
      return () => {
        clearInterval(interval)
      }
    }
  }, [state.playing])

  function buttonToggle() {
    let newPlaying = !state.playing
    setState((state) => ({ ...state, playing: newPlaying }))
  }

  function resetState() {
    setState({ playing: false, count: 3000 })
  }

  return (
    <div className="p-3">
      <h1 className="h3">Digital Timer</h1>
      <div className="mt-4">
        <span>Seconds Left: </span>
        <span className="badge text-bg-dark"> {state.count}</span>
        <span> Running: </span>
        <span className="badge text-bg-dark">
          {state.playing ? 'true' : 'false'}
        </span>
      </div>
      <div className="mt-4 button-group">
        <button
          className="btn btn-outline-primary"
          disabled={!state.count}
          onClick={buttonToggle}
        >
          {!state.playing ? (
            <i className="fa-solid fa-play"></i>
          ) : (
            <i className="fa-solid fa-pause"></i>
          )}
        </button>
        <button className="btn btn-outline-dark ml-2">
          <i class="fa-solid fa-stop" onClick={resetState}></i>
        </button>
      </div>
    </div>
  )
}
