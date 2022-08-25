import React from 'react'
import Gender from './Category/Gender';
import Species from './Category/Species';
import Status from './Category/Status';

const Filters = ( { setStatus, setPageNumber, setGender, setSpecies } ) => {

  let clear = () => {
    setStatus("");
     setPageNumber(""); 
     setGender("");
      setSpecies("");
      window.location.reload(false);
  }

  return (
    <div className='col-lg-3 col-12 mb-5'>
      <div className="text-center text-light fs-4 mb-2">Filters</div>
      <div
      onClick={clear}
      style={{cursor:"pointer", color:"#8bf62c"}} className="text-center text-decoration-underline mb-4">
        Clear Filters
      </div>

      <div className="accordion" id="accordionExample">
        <Status setPageNumber = {setPageNumber} setStatus={setStatus}/>
        <Species setSpecies={setSpecies} setPageNumber = {setPageNumber} />
        <Gender setGender= {setGender} setPageNumber = {setPageNumber}/>
      </div>


    </div>
  )
}

export default Filters;