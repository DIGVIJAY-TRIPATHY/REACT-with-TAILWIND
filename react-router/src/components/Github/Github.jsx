// import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

  const data = useLoaderData()


    // const [data,setdata] = useState([])

    // useEffect(() => {
    //     fetch('https://api.github.com/users/DIGVIJAY-TRIPATHY')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data)
    //         setdata(data)
    //     })
    // }, [])

  return (
    <div className='text-center m-4 p-4 bg-gray-600 text-white text-3xl'>
      GITHUB FOLLOWERS : {data.followers}
      <img src={data.avatar_url} alt="git picture" width={300} className='' />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/DIGVIJAY-TRIPATHY')
  return response.json()
}
