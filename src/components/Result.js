
import React,{useEffect,useState} from 'react'

function Result ({ result,openpopup }) {
    const [selected,setSelected]=useState({})
    useEffect(()=>{
        const {apiurl}=require('../config/key');
        fetch(apiurl+'&i='+result)
        .then(data=>data.json())
        .then(data=>{
          setSelected(data)
          console.log(selected)
        })
    },[])

	return (
		<section className="result" >
			<img src={selected.Poster} onClick={()=>openpopup(selected.imdbID)} alt={selected.Title}/>
            <div>
                <h6 style={{fontWeight:"bold"}}>{ selected.Title } <span>({ selected.Year })</span></h6>
            <p>{selected.Plot}</p>
            
            <p className="rating" style={{color:"gray"}}>Rating: {selected.imdbRating}</p>
            </div>
		</section>
	)
}



export default Result