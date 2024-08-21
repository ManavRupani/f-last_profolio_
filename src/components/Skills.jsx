import React from 'react'
import Card from './Card'

function Skills() {
  return (
    <>
    <div className="text-sans-serif text-center">
        <div className="mt-4 flex items-center justify-between mx-36">
            <div>Skills</div>
            
        </div>
        <div className="mt-2 flex items-center justify-between mx-36">
            <div className='font-extrabold  text-3xl text-left'>The Process that makes a development<br/> team successful.</div>
            <div><button class="button-75" role="button">Download CV</button></div>
        </div>
        <div className="mt-2 flex items-center justify-evenly mx-[280px]">
        
          
          <div><Card/></div>
          <div><Card/></div>
          <div><Card/></div>
          <div><Card/></div>
        
        </div>
    </div>
    </>
  )
}

export default Skills