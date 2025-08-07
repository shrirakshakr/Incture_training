import FirstError from './error/FirstError'
import Second from './error/Second'
import ErrorBoundary from './error/ErrorBoundary'
import './App.css'

function App() {
  return (
    <div>
      <h1>API Fetching in React :</h1>
      <ErrorBoundary>
        <FirstError />
      </ErrorBoundary>
    </div>
  )
}
export default App