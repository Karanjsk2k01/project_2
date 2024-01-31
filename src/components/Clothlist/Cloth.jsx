import React, { Fragment, useState } from 'react'
import './Cloth.css'
import AvailableCloth from './AvailableCloth'
import Form from '../Form/Form'

const Cloth = () => {
  const [value, setValue] = useState([]);

  let entries = (newValue) => {
    setValue(newValue);
  };

  return (
    <Fragment>
      <Form onpassed={entries} />
      <AvailableCloth data={value} />
    </Fragment>
  )
}

export default Cloth;