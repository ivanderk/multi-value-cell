import React from 'react';

export interface NameValuePair {
  name: string;
  value: string | number;
}
const model : NameValuePair[] = [{name: 'iCSD', value: 10}, {name: 'boat', value: 0}, {name: 'i4u', value: 0}]

const MultiValues: React.FC = () => {
    return (
      <div className="MultiValues">
        <table>
            <thead><th>Proyecto</th><th>Dias</th></thead>
            {model.map(  ({name, value})  => (

              <tr><td>{name}</td><td>{value}</td></tr>
            ))}
        </table>
      </div>
    );
  }
  
  export default MultiValues;
  