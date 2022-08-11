import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';


describe('Pruebas en AddCategory', () => {

    test('Debe cambiar el valor de la caja de texto', () => {


        //Renderizamos el componente textbox para el AddCategory
        //Obtenemos el componente del renderizado en una variable input
        //Disparamos el evento de setCategory asignando un valor estatico
        //Evaluamos en este setCategory que el hook cambie el valor del input 

        render(<AddCategory onNewCategory={() => { }} />);

        const input = screen.getByRole('textbox');

        fireEvent.input(input, { target: { value: 'Saitama' } });

        expect(input.value).toBe('Saitama');

        screen.debug();


    })

    test('Debe de llamar onNewCategory si el input tiene valor', () => {

        const inputValue = 'Saitama';

        //Evaluando la funcion como parametro
        const onNewCategory = jest.fn();

        //TODO:
        render(<AddCategory onNewCategory={onNewCategory} />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: inputValue } });

        fireEvent.submit(form);


        expect(input.value).toBe('');

        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);

        //Evalua que haya sido llamado con el valor de la caja de texto
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);


    })

    //Tarea
    test('No debe de llamar el onNewCategory si el input esta vacio', () => {

        //Colocando el input vacio para que dispare la condicion
        const inputValue = '';

        //Evaluando la funcion como parametro
        const onNewCategory = jest.fn();

        //TODO:
        render(<AddCategory onNewCategory={onNewCategory} />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: inputValue } });

        fireEvent.submit(form);

        expect(onNewCategory).toHaveBeenCalledTimes(0);
        expect(onNewCategory).not.toHaveBeenCalled();

    })
})