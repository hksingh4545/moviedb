
import React from 'react'

function Search ({ handleInp, search }) {
	return (
		<section className="searchbox-wrap">
			<input 
				type="text" 
				placeholder="Search for a movie..." 
				className="searchbox" 
                onChange={handleInp}
                onKeyPress={search}
			/>
		</section>
	)
}

export default Search