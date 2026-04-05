import { useState } from 'react'
import './RandomNumberGenerator.css'

/** Inclusive bounds; change here to adjust range and keep UI copy in sync. */
const MIN = 1
const MAX = 100

/**
 * Uniform integer in [min, max]. (max - min + 1) is the count of integers in the range.
 * Math.random() ∈ [0,1) → floor gives 0..(max-min), then +min shifts to min..max.
 */
function randomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export default function RandomNumberGenerator() {
  // null = "nothing drawn yet"; avoids using 0 as a sentinel if the range ever includes 0.
  const [number, setNumber] = useState(null)

  const handleGenerate = () => {
    setNumber(randomInRange(MIN, MAX))
  }

  return (
    <section className="rng" aria-labelledby="rng-title">
      <header className="rng__header">
        <h1 id="rng-title" className="rng__title">
          Random <em className="rng__title-em">draw</em>
        </h1>
        <p className="rng__meta">
          One integer from {MIN} through {MAX}—same chance every tap.
        </p>
      </header>

      {/* aria-live: announce new numbers to assistive tech without stealing focus */}
      <div className="rng__display" aria-live="polite">
        {number === null ? (
          <p className="rng__placeholder">No number generated yet</p>
        ) : (
          <p className="rng__result">
            {/* key remounts the span when number changes so the CSS animation replays */}
            <span key={number} className="rng__value">
              {number}
            </span>
          </p>
        )}
      </div>

      <button
        id="rng-generate-btn"
        type="button"
        className="rng__button"
        onClick={handleGenerate}
      >
        Generate random number
      </button>
    </section>
  )
}
