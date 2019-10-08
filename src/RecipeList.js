import React from 'react'
import Recipe from './Recipe'
import { directive } from '@babel/types'

export default function RecipeList({ recipes }) {
    return (
        <>
        <div>
            {
                recipes.map( recipe => {
                    return (
                    <Recipe key={recipe.id} {...recipe} />
                    )
                })
            }
        </div>
        <button>Add Recipe</button>
        </>

    )
}
