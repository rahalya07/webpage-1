import React from 'react'
import '../Header/Header.css'
import pg1 from './../../images/pg1.jpg'
import pg2 from './../../images/pg2.jpg'
import pg3 from './../../images/pg3.jpg'
const header = () => {
  return (
    <div className='Headersection'>
        <div className='header-title'>
            <h2 className='heading1'>learning how to learn</h2>
            <p className='heading2'> modern  science</p>
            <p className='headercontent'>Although living brains are very complex, this module uses metaphor and analogy<br></br>
to help simplify matters.  You will discover several fundamentally different<br></br>
modes of thinking, and how you can use these modes to improve your learning.<br></br>
You will also be introduced to a tool for tackling procrastination,<br></br>
be given some practical information about memory,<br></br>
 and discover surprisingly useful insights about learning and sleep.</p>
 <button className='applybtn'>Apply now</button>
        </div>
        <div className='header-img'>
            <div><img className='pg1' src={pg1} alt="" />
            </div>
            <div ><img className='pg2' src={pg2} alt="" /></div>
            <div> <img className='pg3' src={pg3} alt="" /></div>
        </div>
    </div>
  )
}

export default header