import React from "react";
import {render , screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import NavbarComponent from '@/components/Navbar'


describe('Search page', () =>{
    it('Should have disabled ', () => {
       render(<NavbarComponent />)

        const pElement = screen.getByTestId('language')
        expect(pElement).toHaveTextContent('عربية')
    });

})