import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';


export const GifGrid = ( {category} ) => {

    const { data:images , loading } = useFetchGifs( category );
    
    return (
        <>
        <h3 className="animate__animated animate__fadeIn">{ category }</h3>

        { loading && <h5 className="animate__animated animate__flash">Loading...</h5> }

        <div className="card-grid">
            {
                images.map( img => (
                        <GifGridItem 
                        key = { img.id }
                        { ...img }
                        />
                ))
            }
        </div>
        </>
    )
};
