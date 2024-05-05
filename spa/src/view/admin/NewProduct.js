import React from 'react'

const NewProduct = () => {
  const apiHost = process.env.REACT_APP_API_HOST;
  const [product, setProduct] = React.useState({});
  const [categories, setCategories] = React.useState([]);

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value
    });
  }

  React.useEffect(() => {
    fetch(`${apiHost}/api/category`)
      .then(response => response.json())
      .then(data => setCategories(data))
      .catch(error => console.error(error));
  }, []);


  return (
    <div className='form product__new'>
      <h3>Product Management</h3>

      <form>
        <fieldset>
          <legend>New Product : </legend>
          <label>
            <select name='category' onChange={handleChange}>
              <option value='' disabled>Select a Category</option>
              {categories.map(category => <option key={category._id} value={category._id}>{category.name}</option>)}
            </select>
          </label>
          <br />
          <label>
            <input type='text' name='name' placeholder='Name' onChange={handleChange} />
          </label>
          <br />
          <label>
            <input type='text' name='description' placeholder='Description' onChange={handleChange} />
          </label>
          <br />
          <label>
            <input type='number' name='price' placeholder='Price' onChange={handleChange} />
          </label>
          <br />
          <button type='submit'>Create</button>
          <button type='reset'>Reset</button>
        </fieldset>
      </form>
    </div>
  )
}

export default NewProduct