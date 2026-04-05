import RandomNumberGenerator from './components/RandomNumberGenerator.jsx'
import './App.css'

/**
 * App keeps a thin shell: one main landmark and the feature component.
 * That makes it easy to reuse RandomNumberGenerator elsewhere or add routes later.
 */
function App() {
  return (
    <main className="app">
      <RandomNumberGenerator />
    </main>
  )
}

export default App
