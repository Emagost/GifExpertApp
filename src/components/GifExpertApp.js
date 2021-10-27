import React, { useState } from 'react'
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';

export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(['']);

    return (
        <>
            <h1>Gif App</h1>
            <h3>Look for any GIF on our website</h3>

            <AddCategory setCategories={ setCategories } />
            
            <hr/>

            <ol>
                {
                    categories.map( category => (
                        <GifGrid 
                            key={category}
                            category= { category } 
                        />
                    ))
                }
            </ol>
            <a href="https://github.com/Emagost/GifExpertApp">Github</a>
        </>
    );
};
