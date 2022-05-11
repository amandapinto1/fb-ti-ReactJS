import json from 'json-files/atendimento.json' ;

const Equipe = Object.entries(json[0])[0][1];
const timeNome = json.map(item => Object.keys(item)[0])[0];

const Atendimento = () => {
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

  export default Atendimento;
