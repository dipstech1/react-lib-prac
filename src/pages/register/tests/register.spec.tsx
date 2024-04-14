import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'

import { Register } from '../../register';

describe("Register screen", () => {

    describe("Layout", () => {
        it("should render header", () => {
            render(<Register />);
            const header = screen.getByRole("heading", { name: "Register" });
            expect(header).toBeInTheDocument()
        });

        it("should render 2 input fields" , ()=>{
            let registerComp = render(<Register />);
            const inputs =  registerComp.container.querySelectorAll("input");
            expect(inputs).toHaveLength(3)
        });

        it("should have username input label", ()=>{
            render(<Register />);
            const nameLabel = screen.getByLabelText("User Name");
            expect(nameLabel).toBeInTheDocument();
        });

        it("should contain email input" , ()=>{
            render(<Register />);
            const emailInp = screen.getByPlaceholderText("email"); 
            expect(emailInp).toBeInTheDocument();

        });

        it("should contain password field", ()=>{
            render(<Register />);
            const passwordInp = screen.getByPlaceholderText("password"); 
            expect(passwordInp).toBeInTheDocument();
        });

        it("password field sould have type password", ()=>{
            render(<Register/>);
            const passwordInp =  screen.getByPlaceholderText("password"); 
            expect(passwordInp).toHaveAttribute("type", "password")
        });

        it("should render a button with disable state", ()=>{
            render(<Register/>);
            const btn = screen.getByRole("button",{name:"Submit"});
            expect(btn).toBeDisabled()
        })
    })


}) 