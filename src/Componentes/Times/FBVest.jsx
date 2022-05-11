import { useEffect, useState } from 'react';
import servico from '../../servicos/servico' ;


const FBVest = () => {

  const [Equipe, setEquipe] = useState([]);
  const [timeNome, setTimeNome] = useState([]);

  
  const obterTime = () => {
    servico.FBVest()
    .then(function (data) {
      setEquipe(Object.entries(data[0])[0][1]);
      setTimeNome(data.map(item => Object.keys(item)[0])[0]);
    });
  };
  
  useEffect(() => {
    obterTime();  
  }, []);

    return (
      <>
      <section id={timeNome} className="categorias">
               <div className="titulo-div">
                   <p className="titulo">{timeNome}</p>
                    </div>
           {Equipe.map(item =>
           <div className="func" key={item.nome}>
               <img className="icon" src={item.img} alt={item.nome} />
               <h2 className="icon-título">{item.nome}</h2>
               <p>{item.cargo}</p>
               </div>
               )}
               </section>

      </>
    );
  }

  export default FBVest;
