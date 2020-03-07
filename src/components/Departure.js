import React from 'react';
import places from '../data/coordinates';

export const departure = keySeed => (
    places.map(x => (
        <option
            key={keySeed + x.number}
            value={x.number}>{x.name}
        </option>
    ))
);