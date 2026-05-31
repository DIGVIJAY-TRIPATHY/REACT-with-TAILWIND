import './App.css'
import { useState } from 'react'

function App() {
  const [color, Setcolor] = useState("olive")
  return (
    <>
      <div className = "w-full h-screen duration-200" style = {{ backgroundColor: color }} >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl ">
            <button
              onClick= { () => { Setcolor("red") }}
             className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "red"}}>Red</button>
            <button
              onClick= { () => { Setcolor("green") }}
             className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "green"}}>green</button>
            <button
              onClick= { () => { Setcolor("blue") }}
             className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "blue"}}>blue</button>
            <button
              onClick= { () => { Setcolor("orange") }}
             className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "orange"}}>orange</button>
            <button
              onClick= { () => { Setcolor("pink") }}
             className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "pink"}}>pink</button>
            <button
              onClick= { () => { Setcolor("black") }}
             className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "black"}}>black</button>
            <button
              onClick= { () => { Setcolor("lavender") }}
             className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "lavender"}}>lavender</button>
            <button
              onClick= { () => { Setcolor("purple") }}
             className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "purple"}}>purple</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
