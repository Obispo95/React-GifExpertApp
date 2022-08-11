import { render, screen, fireEvent } from '@testing-library/react';
import { GifItem } from '../src/components/GifItem'

describe('Prueba para GiftItem', () => {

    const title = 'One Punch';
    const url = 'https://onepunch.com/image.jpg';

    test('Debe hacer match con snapshot ', () => {

        const { container } = render(<GifItem title={title} url={url} />)

        expect(container).toMatchSnapshot();

    })

    test('Debe mostrar la imagen con url indicado', () => {

        render(<GifItem title={title} url={url} />)
        // screen.debug();

        expect(screen.getByRole('img').src).toBe(url);

        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(src);
        expect(url).toBe(url)
    })

    test('Debe de mostrar el titulo del componente', () => {

        render(<GifItem title={title} url={url} />)
        expect( screen.getByText(title) ).toBeTruthy();
    })
    
})