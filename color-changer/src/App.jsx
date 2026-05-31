import './App.css'

function App() {
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="flex h-20 w-20 animate-pulse items-center justify-center rounded-full bg-linear-to-r from-purple-400 to-pink-600">
          <span className="text-white">Loading...</span>
        </div>
      </div>
    </>
  )
}

export default App
