import React from 'react'

const Home = () => {

    const handleClick = () => {

    }

  return (
    <div>
        <input type="text" placeholder="Enter a Movie" />
        <button type="submit" onClick={handleClick}>Submit</button>
        <py-script>print("Hello World")</py-script>
    </div>
  )
}

export default Home;