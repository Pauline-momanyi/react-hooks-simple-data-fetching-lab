import React, {useState, useEffect} from 'react'

function App() {
    const [image, setImage] = useState("")
    const [isLoading, setisLoading] = useState(true)
    useEffect(()=>{
        fetch ('https://dog.ceo/api/breeds/image/random')
        .then (res=>res.json())
        .then (data=>{
            setImage(data.message)
            setisLoading(false)
        })
    }, [])
  return (
    <div>
       <p>{isLoading? "Loading...":null}</p> 
       <img src={image} alt="A Random Dog" />
    </div>
  )
}

export default App
