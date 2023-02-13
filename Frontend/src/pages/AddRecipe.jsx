import React from 'react'
import { Aside, Button, Header, Input } from '../components'
import './AddRecipe.scss'

const AddRecipe = () => {
  return (
    <section className='wrapper'>
        <Header/>
        <main>
            <Aside/>
            <div className="container">
                <h3 className='add__recipe__title'>Title</h3>
                <Input/>
                <h3 className='add__recipe__title'>Description</h3>
                <Input/>
                <div className='add__recipe__image'>
                    <h3 className='add__recipe__title'>Add image</h3>
                    <Button name={'load image'} className={'btn__loadimage'}/>
                </div>
                <h3 className='add__recipe__title'>Ingredients</h3>
                <Input/>
                <h3 className='add__recipe__title'>Time(minutes)</h3>
                <Input/>
            </div>
        </main>
    </section>
  )
}

export default AddRecipe