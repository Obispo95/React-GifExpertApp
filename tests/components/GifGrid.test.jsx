import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {

    const category = 'One Punch';


    test('Debe mostrar el loading inicialmente', () => {


        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true,
        })

        render(<GifGrid category={category} />)

        // screen.debug();

        expect(screen.getByText('Loading...'));
        expect(screen.getByText(category));

    })

    test('Debe mostrar items cuando se cargan las imagenes de useFetchGifs', () => {

        //Creamos el arreglo imaginario de gifs
        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'https://www.giphy.com/imagen.jpg',
            },
            {
                id: '123',
                title: 'Goku',
                url: 'https://www.giphy.com/imagen.jpg',
            }
        ];

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false,
        })

        render(<GifGrid category={category} />)

        screen.debug();
        expect(screen.getAllByRole('img').length).toBe(2);

    })
})