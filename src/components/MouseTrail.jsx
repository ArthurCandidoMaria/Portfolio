import { useEffect, useRef } from 'react'

const TRAIL_LENGTH = 8

function MouseTrail() {
  const containerRef = useRef(null)

  useEffect(() => {
    const supportsFinePointer = window.matchMedia('(pointer: fine)').matches
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!supportsFinePointer || prefersReducedMotion) {
      return undefined
    }

    const dots = containerRef.current?.children
    if (!dots || dots.length === 0) {
      return undefined
    }

    let animationFrameId = 0
    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    const head = { x: target.x, y: target.y }
    const trail = Array.from({ length: TRAIL_LENGTH }, () => ({ x: head.x, y: head.y }))

    const moveHandler = (event) => {
      target.x = event.clientX
      target.y = event.clientY
    }

    const leaveHandler = () => {
      target.x = -100
      target.y = -100
    }

    const animate = () => {
      head.x += (target.x - head.x) * 0.3
      head.y += (target.y - head.y) * 0.3

      trail[0].x = head.x
      trail[0].y = head.y

      for (let index = 1; index < trail.length; index += 1) {
        const previous = trail[index - 1]
        const current = trail[index]

        current.x += (previous.x - current.x) * 0.45
        current.y += (previous.y - current.y) * 0.45
      }

      Array.from(dots).forEach((dot, index) => {
        const point = trail[index]
        const scale = 1 - index / (TRAIL_LENGTH * 1.2)

        dot.style.transform = `translate3d(${point.x}px, ${point.y}px, 0) scale(${scale})`
        dot.style.opacity = `${(1 - index / TRAIL_LENGTH) * 0.8}`
      })

      animationFrameId = window.requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', moveHandler)
    window.addEventListener('mouseout', leaveHandler)
    animationFrameId = window.requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', moveHandler)
      window.removeEventListener('mouseout', leaveHandler)
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div ref={containerRef} className="mouse-trail" aria-hidden="true">
      {Array.from({ length: TRAIL_LENGTH }).map((_, index) => (
        <span key={index} className="mouse-trail-dot" />
      ))}
    </div>
  )
}

export default MouseTrail
