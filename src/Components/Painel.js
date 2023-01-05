import './Painel.css';
import Imagem from "../assets/beijaflor.gif";
import Gif from "../assets/girl.gif"

const Painel = ({ retry}) => {
  return (
    <div className='bar'>
      
      <div className="Dragon">
        <img className="clouds" src={Imagem} alt="" />
      </div>
      <div className='text'>
      <h2>Laís Cristina</h2> 
      <div className="test">
        <button id='day' onClick={retry}>Nigth</button>
      </div>
      </div>
      <div className='Girl'>
        <img className='flower' src={Gif} alt="" />

      </div>
     
    
   
    </div>
  )
}

export default Painel