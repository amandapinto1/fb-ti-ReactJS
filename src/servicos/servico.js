import axios from 'axios';

const Suporte = async () => {
    const resposta = await axios.get('_equipe/suporte.json');
     if (resposta.status !== 200)
       throw new Error(resposta.data.exception.errorMessage);
     return resposta.data.message ? resposta.data.message : resposta.data;
   };
   
   const ERP = async () => {
    const resposta = await axios.get('_equipe/erp.json');
     if (resposta.status !== 200)
       throw new Error(resposta.data.exception.errorMessage);
     return resposta.data.message ? resposta.data.message : resposta.data;
   };

   const FBVest = async () => {
    const resposta = await axios.get('_equipe/fbvest.json');
     if (resposta.status !== 200)
       throw new Error(resposta.data.exception.errorMessage);
     return resposta.data.message ? resposta.data.message : resposta.data;
   };

   const Gerencia = async () => {
    const resposta = await axios.get('_equipe/gerencia.json');
     if (resposta.status !== 200)
       throw new Error(resposta.data.exception.errorMessage);
     return resposta.data.message ? resposta.data.message : resposta.data;
   };

   const Internet = async () => {
    const resposta = await axios.get('_equipe/internet.json');
     if (resposta.status !== 200)
       throw new Error(resposta.data.exception.errorMessage);
     return resposta.data.message ? resposta.data.message : resposta.data;
   };

   const Operacao = async () => {
    const resposta = await axios.get('_equipe/operacao.json');
     if (resposta.status !== 200)
       throw new Error(resposta.data.exception.errorMessage);
     return resposta.data.message ? resposta.data.message : resposta.data;
   };

   const Sistemas = async () => {
    const resposta = await axios.get('_equipe/sistemas.json');
     if (resposta.status !== 200)
       throw new Error(resposta.data.exception.errorMessage);
     return resposta.data.message ? resposta.data.message : resposta.data;
   };

export default {Suporte, ERP, FBVest, Gerencia, Internet, Operacao, Sistemas};