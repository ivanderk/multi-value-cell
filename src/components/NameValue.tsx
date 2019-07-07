import {FC, useState} from 'react';
import NameValue from './NameValue';


const NameValue: FC = (props) => {

  const [value, setValue] = useState(props.value);

    return (
            <tr><td>{props.name}</td><td><input type="text" value={value} onChange={e=>setValue(e.target.value)} /></td></tr>  
    );
  }
  
  export default NameValue;