import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import LeafLetMap from './components/Map';
import { departure } from './components/Departure';
import amplitude from './algorithms/amplitude';
import coordenadas, { getByName } from './data/coordinates';
import algorithms from './algorithms';

// const res = amplitude('Bar da Priscila', 'Resturante Primavera');

const chooseAlgorithm = (select) => algorithms[select];
const findCoords = (algorithm, partida, chegada) => {
  console.log(`partida: ${partida}`);
  console.log(`chegada: ${chegada}`);
  const res = algorithm(partida, chegada);
  let coords = [];
  let ret = [];
  if (typeof res === 'string') {
    console.log(res);
  } else {
    console.log(JSON.stringify(res));
    for (let i = 0; i < res.length; i++) {
      ret.push(res[i]['name']);

      const data = getByName(res[i]);
      const x = data.x;
      const y = data.y;
      coords.push([x, y]);
    }
  }
  return coords;
};
const renderMap = (select, partida, chegada) => {
  let coords = [];
  // if (select == 'unimplemented') alert('Esse algoritmo ainda não foi implementado');
  const alg = chooseAlgorithm(select);
  if (alg) coords = findCoords(alg, partida, chegada);
  return <LeafLetMap coords={coords} />;
};

const App = () => {
  const [selectValue, setSelectValue] = useState('empty');
  const [partida, setPartida] = useState('empty');
  const [chegada, setChegada] = useState('empty');
  const [executar, setExecutar] = useState(false);
  const [polyline, setPolyline] = useState(false);

  const isPolyline = (algType) => {
    if (algType == 'unimplemented' || algType == 'empty') setPolyline(false);
    else setPolyline(true);
  };

  useEffect(() => {
    console.log(`poly: ${polyline}`);
  }, [polyline]);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-xl-3 col-md-12 col-sm-12" id="selector">
          <div className="col-xl-12">
            <div>
              <form>
                <br />
                <select
                  id='partida'
                  className="form-control"
                  onChange={(e) => setPartida(e.currentTarget.value)}
                >
                  <option value='partida' >Partida</option>
                  {departure('departure')}
                </select>
                <br />
                <select
                  id='chegada'
                  className="form-control"
                  onClick={(e) => setChegada(e.currentTarget.value)}
                >
                  <option value='chegada' >Chegada</option>
                  {departure('arrive')}
                </select>
                <br />
                <select
                  id='select-algorithm'
                  className="form-control"
                  onClick={(e) => setSelectValue(e.currentTarget.value)}
                >
                  <option value='empty' >Algoritmo</option>
                  <option value='amplitude' >Amplitude</option>
                  <option value='profundidade' >Profundidade</option>
                  <option value='unimplemented' >Prof.Limitada</option>
                  <option value='unimplemented' >Aprofundamento Iterativo</option>
                  <option value='unimplemented' >Biderecional</option>
                  <option value='unimplemented' >Custo Uniforme</option>
                  <option value='unimplemented' >Greedy</option>
                </select>
              </form>
              <br />
              <center>
                <button
                  type="button"
                  className="btn btn-executa"
                  // onClick={() => setExecutar(true)}
                  onClick={() => {
                    isPolyline(selectValue)
                  }}
                >
                  <strong>Executar</strong>
                </button>
              </center>
            </div>
          </div>

        </div>

        <div className="col-xl-9 col-md-12 col-sm-12" style={{ padding: '0' }}>
          {
            polyline && selectValue != 'unimplemented' && selectValue != 'empty' && renderMap(selectValue, partida, chegada)
          }
          {
            !polyline && selectValue == 'unimplemented' && selectValue == 'empty' &&
            <>
              {
                alert('Algoritmo não implementado')
              }
              <LeafLetMap coords={null} />
            </>
          }
        </div>

      </div>
    </div>
  );
};

export default App;
