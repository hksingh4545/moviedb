
import React from 'react'
import Result from './Result'
function Results ({ results ,openpopup}) {
	return (
		<section className="results">
			{
                results.map(result=>(
                    <Result key={result.imdbID} result={result.imdbID} openpopup={openpopup}/>
                ))
            }
		</section>
	)
}

export default Results