import React from 'react'
import Cards from './Cards'
import Dashboard from '../Dashboard'

function Datascience({datascience}) {
  return<>
   <div className='container'>
     <Dashboard/>
     <div className='container1'>
  {
   datascience.map((e,i)=>{
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

export default Datascience