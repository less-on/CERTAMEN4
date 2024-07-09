import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './pokemon_estilo.css';

const pokemons = [
  {
    nombre: 'Garchomp',
    imagen: './imagenes/garchomp.png',
    url: 'https://www.pokemon.com/us/pokedex/garchomp'
  },
  {
    nombre: 'Reshiram',
    imagen: './imagenes/reshiram.png',
    url: 'https://www.pokemon.com/us/pokedex/reshiram'
  },
  {
    nombre: 'Dragonite',
    imagen: './imagenes/dragonite.png',
    url: 'https://www.pokemon.com/us/pokedex/dragonite'
  },
  {
    nombre: 'Rayquaza',
    imagen: './imagenes/rayquaza.png',
    url: 'https://www.pokemon.com/us/pokedex/rayquaza'
  },
  {
    nombre: 'Salamance',
    imagen: './imagenes/salamence.png',
    url: 'https://www.pokemon.com/us/pokedex/salamence'
  },
  {
    nombre: 'Hydreigon',
    imagen: './imagenes/hydreigon.png',
    url: 'https://www.pokemon.com/us/pokedex/hydreigon'
  }
];

const pokemonesX = () => {
  return (
    <div className="container">
      <div className="row">
        {pokemons.map(pokemon => (
          <div key={pokemon.nombre} className="col-md-4 mb-4">
            <div className="card h-100">
              <a href={pokemon.url} target="_blank" rel="noopener noreferrer">
                <img src={pokemon.imagen} alt={pokemon.nombre} className="card-img-top img-hover" />
              </a>
              <div className="card-body text-center">
                <h5 className="card-title">{pokemon.nombre}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default pokemonesX;
