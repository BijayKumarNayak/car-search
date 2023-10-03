import React from 'react'
import { useDispatch } from 'react-redux';
import { setInputData } from '../../redux/slices/dataSlice';

const Header = () => {
    const dispatch=useDispatch()
    
    const handleInputChange = (event) => {
        const inputData = event.target.value;
        dispatch(setInputData(inputData));
      };
    

  return (
    <div className="flex items-center gap-3 p-2 mb-4 rounded-lg bg-slate-200">
    <div className="flex items-center px-2 py-1 bg-white rounded-lg">
      <input
        type="text"
        placeholder="search"
        className="focus:outline-none"
        onChange={handleInputChange}
       
      />
      <span className=" material-symbols-outlined text-slate-400">search</span>
    </div>
    <div >
      <select name="" id="" className="text-sm font-semibold bg-transparent text-slate-600">
        <option value="Relevance">Relevance</option>
      </select>
    </div>
    <div>
      <select name="" id="" className="text-sm font-semibold bg-transparent text-slate-600">
        <option value="All Brands" >All Brands</option>
      </select>
    </div>
  </div>
  )
}

export default Header
