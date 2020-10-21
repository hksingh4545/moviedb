
import React from 'react'

function Popup ({selected,closepopup}) {
	return (
		<section className="popup">
            <img src={selected.Poster} alt={selected.Title}/>
            <div>
                <h6 style={{fontWeight:"bold",fontSize:"20px"}}>{ selected.Title } <span>({ selected.Year })</span></h6>
            <p>{selected.Plot}</p>
            
            <p style={{color:"gray"}}>Rating: {selected.imdbRating}</p>
            </div>
            <button onClick={()=>closepopup()} className="close"  style={{margin:10,fontWeight:"bold"}}>Return...</button>
		</section>
	)
}

export default Popup