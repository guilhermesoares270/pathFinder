import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import LeafLetMap from './components/Map';
import { departure } from './components/Departure';
import amplitude from './algorithms/amplitude';
// const res = amplitude('Bar da Priscila', 'Ari Calhas');
const res = amplitude('Bar da Priscila', 'Adega do Robinho');
if (typeof res === 'string') {
  console.log(res);
} else {
  console.log(JSON.stringify(res));
}

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
                </select>
                <br />
                <select className="form-control">
                  <option> Chegada</option>
                  {departure('arrive')}
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
