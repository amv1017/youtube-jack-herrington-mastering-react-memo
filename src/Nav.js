import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (<div style={{
    position: 'absolute',
    right: 0,
    top: 0,
    display: 'flex',
    flexDirection: 'column',
  }}>
    <Link to={'/memo'}>memo Example</Link>
    <Link to={'/use-memo'}>useMemo Example</Link>
    <Link to={'/use-callback'}>useCallback Example</Link>
  </div>)
}
