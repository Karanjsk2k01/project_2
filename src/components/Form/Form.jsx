import classes from './Form.module.css';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Form = (props) => {
  const [itemName, setItemName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [sizeS, setSizeS] = useState('');
  const [sizeM, setSizeM] = useState('');
  const [sizeL, setSizeL] = useState('');
  const [sizeXL, setSizeXL] = useState('');

  const resetForm = () => {
    setItemName('');
    setDescription('');
    setPrice('');
    setSizeS('');
    setSizeM('');
    setSizeL('');
    setSizeXL('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newId = `c${uuidv4()}`;
    const formData = {
      id: newId,
      itemName,
      description,
      price: parseFloat(price),
      sizes: {
        S: sizeS,
        M: sizeM,
        L: sizeL,
        XL: sizeXL,
      },
    };

    props.onPassed([formData]);

    resetForm();
  };

  return (
    <section className={classes.summary}>
      <h2>Enter the Info</h2>
      <form onSubmit={handleSubmit}>
        <div className={classes.wrapper}>
          <label>Item Name:</label>
          <input type="text" required value={itemName} onChange={(e) => setItemName(e.target.value)} />

          <label>Description:</label>
          <input type="text" required value={description} onChange={(e) => setDescription(e.target.value)} />

          <label>Price:</label>
          <input type="number" required value={price} onChange={(e) => setPrice(e.target.value)} />

          <div className={classes.size}>
            <div className={classes.subSize}>
              <label>Size S:</label>
              <input type="number" required value={sizeS} onChange={(e) => setSizeS(e.target.value)} />
            </div>

            <div className={classes.subSize}>
              <label>Size M:</label>
              <input type="number" required value={sizeM} onChange={(e) => setSizeM(e.target.value)} />
            </div>

            <div className={classes.subSize}>
              <label>Size L:</label>
              <input type="number" required value={sizeL} onChange={(e) => setSizeL(e.target.value)} />
            </div>

            <div className={classes.subSize}>
              <label>Size XL:</label>
              <input type="number" required value={sizeXL} onChange={(e) => setSizeXL(e.target.value)} /></div>
          </div>

          <button type="submit" className={classes.button}>
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
