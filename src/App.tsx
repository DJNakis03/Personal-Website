import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Link } from 'react-router-dom';
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const urls = {
    '/about_me': 'about_me\n',
    '/previous_work': 'previous_work',
  }
  return (
    <>
      <div>{
        Object.entries(urls).map(data => <Link to = {data[0]}>{data[1]}</Link>)
      }
        

      </div>
      <div>
        <p className = "introduction-page">
          Hello my name is Darius Nakis and this website will give you more informatioon about who I am as a person
        </p>
      </div> 
      <div>
        <p>
          Click <a href = "http://www.google.com/">here</a> to visit google. 
        </p>
      </div>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

    </>
  )
}

export default App
