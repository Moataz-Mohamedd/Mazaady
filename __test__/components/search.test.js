import React from "react";
import {render , screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import SearchComponent from '@/components/Search'


describe('Search page', () =>{
    it('Should have disabled ', () => {
       render(<SearchComponent />)

        const buttonElement = screen.getByTestId('btn')
        expect(buttonElement).toBeEnabled()
    });

})