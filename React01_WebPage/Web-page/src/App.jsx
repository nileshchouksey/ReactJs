import React from 'react'
import Leftsection from './components/Leftsection'
import Rightsection from './components/Rightsection'

const App = () => {

  const users=[
    {
      img:'https://unsplash.com/photos/a-woman-sitting-at-a-table-using-a-laptop-computer-TK9jvsopDRs',
      intro:'',
      tag:'Underbanked'
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1682608388268-d2fe94141e13?q=80&w=705&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      tag:'Underbanked'
    },
     {
      img:'https://unsplash.com/photos/a-woman-standing-in-front-of-a-window-with-her-arms-crossed-caOuGgyfu8s',
      intro:'',
      tag:'Underbanked'
    },
     {
      img:'https://plus.unsplash.com/premium_photo-1661641353075-f0eaf2d82aae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
      intro:'',
      tag:'Underbanked'
    },
     {
      img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmVzc2lvbmFsfGVufDB8fDB8fHww',
      intro:'',
      tag:'Underbanked'
    }

  ]

  return (
    
    <div className='flex justify-between items-center'>
      <Leftsection/>
      <Rightsection users={users.props}/>
    </div>
    
  )
}

export default App