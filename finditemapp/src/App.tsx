import './App.css';
import computerImg from './assets/computer.png';
import HeaderClient from './components/HeaderClient';

function App() {
  return (
    <>
    <HeaderClient />
  <main>
    <section id="product-details-section" className="dsc-container">
      <div className="dsc-card dsc-mb20">
        <div className="dsc-product-details-top dsc-line-bottom">
          <img src={computerImg} alt="Computador" />
        </div>
        <div className="dsc-product-details-bottom">
          <h3>Com Valor</h3>
          <h4>Computador Gamer XT</h4>
            <p>
            Computador pessoal Apple MacBook Pro.
            </p>
            <p>
            Data em que foi encontrado: 
            <input 
              type="date" 
              onChange={(e) => console.log(e.target.value)} 
            />
            </p>
          <div className="dsc-category-container">
             
              <div className="dsc-category">
                  ComValor
              </div>
          </div>
        </div>
      </div>
      <div className="dsc-btn-page-container">
          <div className="dsc-btn dsc-btn-blue">
              Entregar
          </div>
          <div className="dsc-btn dsc-btn-white">
              Início
          </div>
      </div>
    </section>
  </main>
 </>
  );
}

export default App
