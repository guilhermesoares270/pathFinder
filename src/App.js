import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import LeafLetMap from './components/Map';
import places from './data/coordinates';
// console.log(places);
import { departure } from './components/Departure';

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-xl-3 col-md-12 col-sm-12" id="selector">
          <div className="col-xl-12">
            <div>
              <form onSubmit={() => console.log('aaa')}>
                <br />
                <select className="form-control" value={'aaa'} onChange={() => 'aaa'}>
                  <option>Partida</option>
                  {departure('departure')}
                  {/* <option value="1">Bar da Priscila</option>
                  <option value="2">Praça São Cristovão</option>
                  <option value="3">Padoca da Fiel</option>
                  <option value="4">Izabelle Davi Doces e Bolo</option>
                  <option value="5">Equipax Indústria</option>
                  <option value="6">Giovana Restaurante</option>
                  <option value="7">Delcafe Assessoria</option>
                  <option value="8">Buffet Maria Clara</option>
                  <option value="9">ICT - Inglês com Tecnologia</option>
                  <option value="10">Mika Burgue's</option>
                  <option value="11">Comida Caseira Pé da Serra</option>
                  <option value="12">Restaurante Primavera</option>
                  <option value="13">Colégio Dinâmico</option>
                  <option value="14">ABA - Associação</option>
                  <option value="15">Coifas Cruzeiro</option>
                  <option value="16">AD - Cruzeiro Seg. Retiro</option>
                  <option value="17">Adega do Robinho</option>
                  <option value="18">Colégio Adventista</option>
                  <option value="19">Le Talon</option>
                  <option value="20">Igreja Evangelho Quadrangular</option>
                  <option value="21">Delegacia Seccional</option>
                  <option value="22">Ita Fortes</option>
                  <option value="23">Ari Calhas</option>
                  <option value="24">Bar e Mercearia do Zeze</option>
                  <option value="25">Posp Lanches</option>
                  <option value="26">Comercial Biondini</option>
                  <option value="27">Galvão Baterias</option> */}
                </select>
                <br />
                <select className="form-control">
                  <option> Chegada</option>
                  {departure('arrive')}
                  {/* <option value="1">Bar da Priscila</option>
                  <option value="2">Praça São Cristovão</option>
                  <option value="3">Padoca da Fiel</option>
                  <option value="4">Izabelle Davi Doces e Bolo</option>
                  <option value="5">Equipax Indústria</option>
                  <option value="6">Giovana Restaurante</option>
                  <option value="7">Delcafe Assessoria</option>
                  <option value="8">Buffet Maria Clara</option>
                  <option value="9">ICT - Inglês com Tecnologia</option>
                  <option value="10">Mika Burgue's</option>
                  <option value="11">Comida Caseira Pé da Serra</option>
                  <option value="12">Restaurante Primavera</option>
                  <option value="13">Colégio Dinâmico</option>
                  <option value="14">ABA - Associação</option>
                  <option value="15">Coifas Cruzeiro</option>
                  <option value="16">AD - Cruzeiro Seg. Retiro</option>
                  <option value="17">Adega do Robinho</option>
                  <option value="18">Colégio Adventista</option>
                  <option value="19">Le Talon</option>
                  <option value="20">Igreja Evangelho Quadrangular</option>
                  <option value="21">Delegacia Seccional</option>
                  <option value="22">Ita Fortes</option>
                  <option value="23">Ari Calhas</option>
                  <option value="24">Bar e Mercearia do Zeze</option>
                  <option value="25">Posp Lanches</option>
                  <option value="26">Comercial Biondini</option>
                  <option value="27">Galvão Baterias</option> */}
                </select>
                <br />
                <select className="form-control">
                  <option> Algoritmo</option>
                  <option>Amplitude</option>
                  <option>Profundidade</option>
                  <option>Prof.Limitada</option>
                  <option>Aprofundamento Iterativo</option>
                  <option>Biderecional</option>
                  <option>Custo Uniforme</option>
                  <option>Greedy</option>
                </select>
              </form>
              <br />
              <center>
                <button type="button" className="btn btn-executa">
                  <strong>Executar</strong>
                </button>
              </center>
            </div>
          </div>

        </div>

        <div className="col-xl-9 col-md-12 col-sm-12" style={{ padding: '0' }}>
          <LeafLetMap />
        </div>

      </div>

    </div>
  );
};

export default App;
