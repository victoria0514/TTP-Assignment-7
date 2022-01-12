import React from 'react'

const GifCard = props => {
return(
    <div className='img1'>
        <img src={props.url} alt = 'gif'/>
    </div>
)
}
export default GifCard;