import React, { useState, memo } from 'react'
import Nav from './Nav'

function Swatch({ color }) {
  console.log(`Swatch rendered ${color}`)
  return (<div style={{
    margin: 2,
    width: 75,
    height: 75,
    background: color,
  }}>
    swatch
  </div>)
}

const MemoedSwatch = memo(Swatch)

export default function MemoExample() {
  const [appRenderIndex, setAppRenderIndex] = useState(0)
  const [color, setColor] = useState('red')

  console.log(`App rendered ${appRenderIndex}`)

  return (<>
    <div>
      <button onClick={() => setAppRenderIndex(appRenderIndex + 1)}>
        Re-Render App
      </button>
      <button onClick={() => setColor(color === 'red' ? 'blue' : 'red')}>
        Change Color
      </button>
    </div>
    <div>
      <MemoedSwatch color={color} />
      <MemoedSwatch color={color === 'red' ? 'blue' : 'red'} />
    </div>
    <Nav />
  </>)
}
