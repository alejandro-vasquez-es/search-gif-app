import { getGifs } from "../../helpers/getGifs.js"

describe('getGifs tests', () => {

    test('should bring 15 elements', async () => {

        const gifs = await getGifs('Slipknot');
        
        expect( gifs.length ).toBe( 15 )

    })
    
})
