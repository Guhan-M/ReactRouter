import React from 'react'
import Cards from './Cards'
import Dashboard from '../Dashboard'

function FullStack({fullstackdata}) {
  return <>
   <div className='container'>
     <Dashboard/>
     <div className='container1'>
  {
   fullstackdata.map((e,i)=>{
     return <Cards key={i} 
     imag={e.imag}
     heading={e.heading}
     content={e.content}/>
})
}
</div>
</div>
 </>
}

export default FullStack