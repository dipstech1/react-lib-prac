import {render, screen} from '@testing-library/react';

import {Register} from '../../register';

describe("Register screen", ()=>{

    it("should render header", ()=>{
        render(<Register />);
        const header = screen.getByRole("heading", {name : "Register"});
        expect(header).toBeDefined()
    })
})