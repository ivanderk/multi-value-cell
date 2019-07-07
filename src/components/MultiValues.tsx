import {FC, useState} from 'react';
import NameValue from './NameValue';

export interface NameValuePair {
  name: string;
  value: string | number;
}
const _model : NameValuePair[] = [{name: 'iCSD', value: 10}, {name: 'boat', value: 0}, {name: 'i4u', value: 0}]

const MultiValues: FC = (props:{defs:NameValuePair[]}) => {

  const [defs, setDefs] = useState(props.defs);
    return (
      <div className="MultiValues">
        <table>
            <thead><th>Proyecto</th><th>Dias</th></thead>
            {defs.map(  ({name, value}, i)  => (

              <NameValue name={name} value={value}></NameValue>
            ))}
        </table>
      </div>
    );
  }
  
  export default MultiValues;
 