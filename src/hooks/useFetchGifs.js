import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifts.js";

export const useFetchGifs = (category) =>{

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(()=>{

        getGifs(category)
    
            .then(gifs => {
    
                setState({
                    data: gifs,
                    loading: false

                });    
    
        })  
    }, [category])


    setTimeout(()=>{
    },2000)

    return state
}