import React from 'react'

const Scroll = () => {
    function up(){
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
  return (
    <>
    <div id='scrollButton'><button id='scroll' onClick={up}> ☝️ </button></div>
      
    </>
  )
}

export default Scroll
