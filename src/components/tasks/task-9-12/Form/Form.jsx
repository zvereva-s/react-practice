import { useState, useEffect } from "react";

import styles from "./form.module.css";

function Form({onSubmit}) {
  const [item, setItem] = useState({
    name: "",
    price: "",
    description: "",
  });
  const { name, price, description } = item;

  function handleSubmit(e) {
      e.preventDefault();
        onSubmit({...item});
        setItem({
            name: "",
            price: "",
            description:"",
        })
  }

  function handleChangeInput(e) {
    const { value, name } = e.target;
    setItem((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }
  
  return (
    <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label}>
          name
          <input
            className={styles.input}
            onChange={handleChangeInput}
            value={name}
            name="name"
            type="text"
            required
          />
        </label>
        <label className={styles.label}>
          price
          <input
            className={styles.input}
            onChange={handleChangeInput}
            value={price}
            name="price"
            type="text"
            required
          />
        </label>
        <label className={styles.label}>
          description
          <input
            className={styles.input}
            onChange={handleChangeInput}
            value={description}
            name="description"
            type="text"
            required
          />
        </label>
        <button type="submit">add</button>
      </form>
    </div>
  );
}

export default Form;
