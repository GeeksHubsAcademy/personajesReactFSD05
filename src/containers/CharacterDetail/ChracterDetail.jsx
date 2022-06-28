

import React, {useState, useEffect} from 'react';
import './CharacterDetail.css';
 
const CharacterDetail = () => {

    const [data, setData] = useState(JSON.parse(localStorage.getItem("escogido")));

     return (
         <div className='designCharacterDetail'>
            {data.name}
         </div>
     )
}
export default CharacterDetail;