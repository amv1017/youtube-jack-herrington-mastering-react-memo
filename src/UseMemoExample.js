import React, { useState, memo, useMemo } from 'react'
import Nav from './Nav'

function Swatch({ params }) {
  console.log(`Swatch rendered ${params.color}`)
  return (<div style={{
    margin: 2,
    width: 75,
    height: 75,
    background: params.color,
  }}>
    swatch
  </div>)
}

const MemoedSwatch = memo(Swatch)

export default function UseMemoExample() {
  const [appRenderIndex, setAppRenderIndex] = useState(0)
  const [color, setColor] = useState('red')

  console.log(`App rendered ${appRenderIndex}`)

  const params = useMemo(() => ({ color }), [color])

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
      <MemoedSwatch params={params} />
    </div>
    <Nav />
  </>)
}
