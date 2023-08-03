import React from "react";
import {render , screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import DashboardIndexPage from '@/pages/index'


describe('Dashboard page', () =>{
    it('Should render properly', () => {
       render(<DashboardIndexPage />)

        const mainImage = screen.getByAltText ('dashboardpic')
        expect(mainImage).toBeEnabled();
    });

})