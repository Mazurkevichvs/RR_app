import React from 'react'
import { Aside, Button, Header, Input } from '../components'
import './AddRecipe.scss'

const AddRecipe = () => {
  return (
    <section className='wrapper'>
        <Header/>
        <main>
            <Aside/>
            <div className="container add__recipe">
              <div className='add__recipe__content'>
                <h3>Title</h3>
                <Input className={"add__recipe__input"}/>
                <h3>Description</h3>
                <Input className={"add__recipe__input"}/>
                <h3>Ingredients</h3>
                <Input className={"add__recipe__input"}/>
                <h3>Time(minutes)</h3>
                <Input className={"add__recipe__input"}/>
                <h3>Category</h3>
                <select name="category" id="category-select">
                  <option value="Breakfast">--Please choose an option--</option>
                  <option value="Breakfast">Breakfast</option>
                  <option value="Launch">Launch</option>
                  <option value="Dinner">Dinner</option>
                  <option value="Supper">Supper</option>
                </select>
                <div className='add__recipe__image'>
                    <h3>Add image</h3>
                    <Button name={'Load image'} className={'btn__loadimage'}/>
                </div>
                <Button name={'Save'} className={'btn__save'}/>
              </div>
                
            </div>
        </main>
    </section>
  )
}

export default AddRecipe