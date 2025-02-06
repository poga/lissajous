import { useEffect, useRef } from 'react'

function LissajousCanvas({ params }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    // Set canvas size
    canvas.width = 600
    canvas.height = 600

    // Clear canvas
    ctx.fillStyle = 'black'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Initial drawing setup
    ctx.strokeStyle = params.color
    ctx.lineWidth = 1.5

    // Draw the curve
    ctx.beginPath()
    for (let t = 0; t < 2 * Math.PI; t += 0.01) {
      const x = params.A * Math.sin(params.a * t + params.delta) + canvas.width / 2
      const y = params.B * Math.sin(params.b * t) + canvas.height / 2

      if (t === 0) {
        ctx.moveTo(x, y)
      } else {
        ctx.lineTo(x, y)
      }
    }
    ctx.stroke()
  }, [params]) // Re-render when params change

  return <canvas ref={canvasRef}></canvas>
}

export default LissajousCanvas