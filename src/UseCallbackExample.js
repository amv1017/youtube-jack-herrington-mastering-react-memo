import React, { useState, memo, useMemo, useCallback } from 'react'
import Nav from './Nav'

function Swatch({ params, onClick }) {
  console.log(`Swatch rendered ${params.color}`)
  return (<div style={{
    margin: 2,
    width: 75,
    height: 75,
    background: params.color,
  }} onClick={onClick}>
    swatch
  </div>)
}

const MemoedSwatch = memo(Swatch)

export default function UseMemoExample() {
  const [appRenderIndex, setAppRenderIndex] = useState(0)
  const [color, setColor] = useState('red')
  const [weight, setWeight] = useState('lighter')

  console.log(`App rendered ${appRenderIndex}`)

  const params = useMemo(() => ({ color }), [color])
  const onClick = useCallback(() => {}, [])

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
      <MemoedSwatch params={params} onClick={onClick} />
      <p style={{fontWeight: weight}}>Title</p>
    </div>
    <Nav />
  </>)
}
