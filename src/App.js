import React,{useState} from 'react';
import Search from './components/Search'
import Results from './components/Results'
import Popup from './components/Popup'
 
function App() {
  const {apiurl}=require('./config/key');
  const [state,setState]=useState({
    s:"",
    results:[],
    selected:{},
    click:false
  });
  
const search=(e)=>{
  if(e.key==="Enter"){
  fetch(apiurl+'&s='+state.s)
  .then(data=>data.json())
  .then(data=>{
    let result= data.Search;
    setState(prevState=>{
      return {...prevState,results:result}
    })

  } )
  .catch((error)=>{ 
    alert("error")
  })
}
}
const setvalu=()=>{
  setState(prevState=>{
    return {...prevState,click:true}
  })
}
const openpopup= (id) =>{
  fetch(apiurl+'&i='+id)
  .then(data=>data.json())
  .then(data=>{
    let selected = data;
    setState(prevState=>{
      return {...prevState,selected:selected,click:true}
    })
    setvalu()
  })
}
const closepopup=()=>{
  setState(prevState=>{
    return {...prevState,click:false}
  })
}

  const handleInput=(e)=>{
    let s=e.target.value;
    setState(prevState=>{
      return {...prevState,s:s}
    });
  }
  return (
    <div className="App">
      <header>
      <h1>Movie DB</h1>
      </header>
      <main>
        
        
        {(state.click===true)?
        <Popup selected={state.selected} closepopup={closepopup}/>
        :<> 
        <Search handleInp={handleInput} search={search}/>:
        {  (typeof(state.results)!=="undefined")
        ?<>
        <Results results={state.results} openpopup={openpopup} />
        </>
        :<>
        <h2 style={{color:"white",fontSize:25,fontWeight:"bold"}}>Not Found......</h2>
        </>
         }
        </>
        }
      </main>
    </div>
  );
}

export default App;
