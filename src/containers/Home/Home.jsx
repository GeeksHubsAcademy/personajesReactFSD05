

import React ,{useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import './Home.css';

import axios from 'axios';
 
const Home = () => {

    let navigate = useNavigate();

    const [personajes, setPersonajes] = useState([]);

    useEffect(()=>{

        traePersonajes();

    },[]);

    useEffect(()=>{
        
    });

    const traePersonajes = async () => {

        try {

            let resultado = await axios.get("https://rickandmortyapi.com/api/character");

            setPersonajes(resultado.data.results);

        } catch (error) {
            console.log(error);
        }
    }

    const seleccionaPersonaje = (personajeFull) => {
        console.log(personajeFull);

        //Aquí guardaría en redux el personaje elegido

            //Guardo provisionalmente en localStorage
            localStorage.setItem("escogido", JSON.stringify(personajeFull));

        //Me iría al container de detalle de personaje
        navigate("/detail");
    };

    if(personajes[0]?.name !== ""){
        //Aqui montaremos un return que mostrará todo...
        return (
            <div className="homeDesign">
                {
                    //Aqui voy a proceder a mapear a los personajes
                    //que ya tengo guardados en el hook.

                    personajes.map(elemento => {
                        return(
                            <div className="cardPersonaje" key={elemento.id} onClick={()=> seleccionaPersonaje(elemento)}>
                                <div className="cardElement"><img className="designPic" src={elemento.image} alt={elemento.id}/></div>
                                <div className="cardElement">{elemento.name}</div>
                                <div className="cardElement">{elemento.status}</div>
                                <div className="cardElement">{elemento.species}</div>
                            </div>
                        )
                    })
                }
            </div>
        )

    }else{

        return (
            <div className='homeDesign'>
               CARGANDO
            </div>
        )

    }

     
}
export default Home;