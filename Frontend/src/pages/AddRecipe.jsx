import React, { useState } from 'react';
import { Button, Error, Input, Header, Aside } from '../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudArrowDown } from '@fortawesome/free-solid-svg-icons';
import './AddRecipe.scss';
import axios from 'axios';
import { useSelector } from 'react-redux';

const AddRecipe = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [time, setTime] = useState('');
  const [category, setCategory] = useState(parseInt(''));
  // const [image, setImage] = useState([]);
  const [error, setError] = useState(false);
  const { token } = useSelector((state) => state.loginSlice);

  const postRecipe = () => {
    const recipe = {
      // image,
      title,
      description,
      time,
      slug: title,
      ingredients,
      category
    };
    if (Object.values(recipe).some((x) => x === null || x === '')) {
      setError(true);
    } else {
      console.log(recipe);
      axios
        .post('http://localhost:8000/api/recipe/create/', recipe, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
      setError(false);
    }
  };

  return (
    <section className="wrapper">
      <Header />
      <main>
      <Aside/>
        <div className="container add__recipe">
          <div className="add__recipe__content">
            <h3>Title</h3>
            <Input setInputValue={setTitle} className={'add__recipe__input'} />
            <h3>Description</h3>
            <Input setInputValue={setDescription} className={'add__recipe__input'} />
            <h3>Ingredients</h3>
            <Input setInputValue={setIngredients} className={'add__recipe__input'} />
            <h3>Time(minutes)</h3>
            <Input setInputValue={setTime} className={'add__recipe__input'} />
            <h3>Category</h3>
            <select
              onChange={(e) => setCategory(e.target.value)}
              name="category"
              id="category-select">
              <option value="">--Please choose an option--</option>
              <option value="1">Breakfast</option>
              <option value="2">Launch</option>
              <option value="3">Dinner</option>
              <option value="4">Supper</option>
            </select>
            {/* <div className="add__recipe__image">
              <h3>Add image</h3>
              <label htmlFor="image-upload" className="btn btn__loadimage">
                <FontAwesomeIcon icon={faCloudArrowDown} /> Load image
              </label>
              <input
                onChange={(e) => setImage(e.target.files[0])}
                id="image-upload"
                type="file"
                accept="image/*"
              />
            </div> */}
            {error && <Error errorMessage={'All fields are required!'} />}
            <Button onClick={postRecipe} name={'Save'} className={'btn__save'} />
          </div>
        </div>
      </main>
    </section>
  );
};

export default AddRecipe;
