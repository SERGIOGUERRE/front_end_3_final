

import React, { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";


const Favs = () => {

  const [favs, setFavs] = useState([]);
  const [ remove, setRemove ] = useState(0);

  useEffect(() => {
    setFavs(JSON.parse(localStorage.getItem("favs")) || [])
  },[remove])

  const { state } = useContext(ContextGlobal)

  const handleRemove = () => {
    setRemove(prev => prev + 1)
  }

  return (
    <main style={{width: '100%'}}>
      <h1 style={{color: state.palette.mode === 'dark' ? '#fff' : '#000'}}>Dentists Favs</h1>
      {favs.length > 0 ? <div className="card-grid">
       
        {favs?.map(fav => <Card {...fav} key={fav.id} remove={handleRemove}/>)}
      </div> : <h2 style={{color: state.palette.mode === 'dark' ? '#fff' : '#000', textAlign: 'center'}}>You don't have any favourite dentist yet</h2>}
    </main>
  );
};

export default Favs;
