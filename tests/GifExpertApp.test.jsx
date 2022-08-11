import { render,screen } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp"

describe('Pruebas en el componente <GiftExpertApp />', () => { 
    
    test('Identica al snapshot', () => { 
    
        const {container}= render (<GifExpertApp/>)

        expect(container).toMatchSnapshot();

     })

 })