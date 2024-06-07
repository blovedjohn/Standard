import React from 'react'
import Data from './Data'
import Card from './Card'

         const AllCards = () => {
         const cards = Data.map(item =>{
                return(
                   <Card

                   {...item}
                    />
    )
})



                    return ( 
                       <div className='all-cards'>
                           {cards}
                       </div>
  )
}

export default AllCards
