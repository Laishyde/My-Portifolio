import './Header.css';
import Imagem from "../assets/gif.gif";

const Header = ({startPainel}) => {
 
  return (
    <div>
        <div className='Nav'>
            <h2>Laís Cristina</h2>
          <div className="wrap">
            <button onClick={startPainel} class="button">Day</button>
          </div>
            
      </div>
      <div className="Dragon">
        <img className="clouds" src={Imagem} alt="" />


      </div>
    </div>
  )
}


export default Header