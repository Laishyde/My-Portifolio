import './Painel.css';
import Imagem from "../assets/beijaflor.gif";

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
     
    </div>
  )
}

export default Painel