import React, {useState, useEffect} from 'react';
import servico from '../servicos/servico';

const Burger = () => {
window.addEventListener('load', function() {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  

    hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });
  
  document.querySelectorAll('.nav-link').forEach((n) =>
    n.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    }),
  );
});
}

const Nav = () => {
  const [times, setTimes] = useState([]);
  const [Equipes, setEquipes] = useState([]);
  const [gerencia, setGerencia] = useState([]);
  const [erp, setErp] = useState([]);
  const [internet, setInternet] = useState([]);
  const [operacao, setOperacao] = useState([]);
  const [sistemas, setSistemas] = useState([]);
  const [suporte, setSuporte] = useState([]);
  const [fbvest, setFBVest] = useState([]);

  
  const obterTime = () => {
    servico.Gerencia()
    .then(function (data) {
      setGerencia(data);
    })
    servico.ERP()
    .then(function (data) {
      setErp(data);
    })
    servico.Internet()
    .then(function (data) {
      setInternet(data);
    });
    servico.Operacao()
    .then(function (data) {
      setOperacao(data);
    });
    servico.Sistemas()
    .then(function (data) {
      setSistemas(data);
    });
    servico.Suporte()
    .then(function (data) {
      setSuporte(data);
    });
    servico.FBVest()
    .then(function (data) {
      setFBVest(data);
    });
  };


  useEffect(() => {
    obterTime();  
    setTimes(gerencia.concat(erp, internet, operacao, sistemas, suporte, fbvest));
    setEquipes(times.map(o => Object.keys(o)))
    Burger();
  }, [erp]);

  return (<>
    <nav className="navbar menu">
      <ul className="nav-menu">
          {Equipes.map(item =>
          <li key ={item} className="nav-item">
              <a href={`#${item}`} className="nav-link">{item}</a>
          </li>
          )}
       </ul>
       <section className="menu-hamb">
        <div className="hamburger">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </section>
    </nav>
    </>
  )};


export default Nav;