import { useState } from 'react'
import LissajousCanvas from './components/LissajousCanvas'
import './App.css'

function App() {
  const [params, setParams] = useState({
    A: 100,
    B: 100,
    a: 3,
    b: 2,
    delta: Math.PI / 2,
    color: '#FFD700' // Default gold color
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setParams(prev => ({
      ...prev,
      [name]: name === 'color' ? value : parseFloat(value)
    }))
  }

  return (
    <div className="App">
      <h1>Lissajous Art Generator</h1>
      <div className="controls">
        <div className="control-group">
          <label>
            Frequency X (a):
            <input
              type="range"
              name="a"
              min="1"
              max="10"
              step="0.1"
              value={params.a}
              onChange={handleChange}
            />
            <span>{params.a.toFixed(1)}</span>
          </label>
        </div>
        <div className="control-group">
          <label>
            Frequency Y (b):
            <input
              type="range"
              name="b"
              min="1"
              max="10"
              step="0.1"
              value={params.b}
              onChange={handleChange}
            />
            <span>{params.b.toFixed(1)}</span>
          </label>
        </div>
        <div className="control-group">
          <label>
            Amplitude X (A):
            <input
              type="range"
              name="A"
              min="20"
              max="200"
              value={params.A}
              onChange={handleChange}
            />
            <span>{params.A}</span>
          </label>
        </div>
        <div className="control-group">
          <label>
            Amplitude Y (B):
            <input
              type="range"
              name="B"
              min="20"
              max="200"
              value={params.B}
              onChange={handleChange}
            />
            <span>{params.B}</span>
          </label>
        </div>
        <div className="control-group">
          <label>
            Phase Shift (δ):
            <input
              type="range"
              name="delta"
              min="0"
              max={2 * Math.PI}
              step="0.1"
              value={params.delta}
              onChange={handleChange}
            />
            <span>{params.delta.toFixed(2)}</span>
          </label>
        </div>
        <div className="control-group">
          <label>
            Curve Color:
            <input
              type="color"
              name="color"
              value={params.color}
              onChange={handleChange}
            />
            <span>{params.color}</span>
          </label>
        </div>
      </div>
      <LissajousCanvas params={params} />
    </div>
  )
}

export default App