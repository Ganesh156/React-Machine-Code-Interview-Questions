import React from "react"

const StarRating =({rating,setRating})=>{
    return <div>
       {[1,2,3,4,5].map((star)=>{
          return (
            <span className="star" 
            style={{color: rating>=star? 'gold':'gray',cursor: 'pointer',fontSize: `35px`,}} 
            onClick={()=>{setRating(star)}}>
            ☆
            </span>) 
       })}
    </div>
}

export default StarRating