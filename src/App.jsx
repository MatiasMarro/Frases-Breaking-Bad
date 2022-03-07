import { useState , useEffect} from 'react'
import styled from '@emotion/styled';
import Frase from './components/frase';

const Boton = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
  background-size: 300px;
  font-family:  Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  border-radius: 6px ;
  transition: background-size .8s ease;
  :hover {
    cursor:pointer;
    background-size: 400px;
  }
`;
const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
  border-radius: 5px ;
` ;


function App() {

  // State de frases
  const [frase , setFrase] = useState({})
  //Cargar una frase en la primera consulta
  useEffect(() => { 
    consultarAPI()
  }, [])

  const consultarAPI = async () =>{
    const url = 'https://breaking-bad-quotes.herokuapp.com/v1/quotes'
    const respuesta = await fetch(url)
    const resultado = await respuesta.json()

    setFrase(resultado[0])
  }

  return (
    <Contenedor>
      <Frase 
        frase={frase}
      />
      <Boton  
        onClick={() => consultarAPI()} 
      >Breaking bad</Boton>
    </Contenedor>
  )
}

export default App
