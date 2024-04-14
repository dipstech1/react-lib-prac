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

        it("should render 4 input fields" , ()=>{
            let registerComp = render(<Register />);
            const inputs =  registerComp.container.querySelectorAll("input");
            expect(inputs).toHaveLength(4)
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

        it("Should have confrom Password label",()=>{
            render(<Register/>)
            const conformPasswordLabel = screen.getByLabelText("Conform password");
            expect(conformPasswordLabel).toBeInTheDocument();
        });

        it("Confrom password field shoud have type password", ()=>{
            render(<Register/>);
            const conformPasswordInp = screen.getByPlaceholderText("Conform Password");
            expect(conformPasswordInp).toHaveAttribute("type","password")
        })
        it("Confrom password field shoud have minimum value 3", ()=>{
            render(<Register/>);
            const conformPasswordInp = screen.getByPlaceholderText("Conform Password");
            expect(conformPasswordInp).toHaveAttribute("min")
            expect(conformPasswordInp.getAttribute('min')).toBe('3');

        })

        it("should render a button with disable state", ()=>{
            render(<Register/>);
            const btn = screen.getByRole("button",{name:"Submit"});
            expect(btn).toBeDisabled()
        })
    })


}) 