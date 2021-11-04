import { renderHook } from '@testing-library/react-hooks'
import { useFetchGifs } from '../../hooks/useFetchGifs.js'
import '@testing-library/jest-dom'


describe('tests in the useFetchGifs hoook', () => {
    
    test('should return the data and loading fistState', async () => {
        
        const { result, waitForNextUpdate } = renderHook( () =>  useFetchGifs( 'Lofi Hiphop ') );
        const { data, loading } = result.current;

        await waitForNextUpdate();

        expect( data ).toEqual([]);
        expect( loading ).toBeTruthy()
        
    })
    
    test('should return a second state with 15 gifs and the loading false', async() => {
        
        const { result, waitForNextUpdate } = renderHook( () =>  useFetchGifs( 'Lofi Hiphop ') );

        await waitForNextUpdate();

        const { data, loading } = result.current;
    
        expect( data.length ).toBe( 15 );
        expect( loading ).toBeFalsy()

    })
    

})
