// import {render, screen, fireEvent} from "@testing-library/react";
// import Counter from "./Counter";

// test("Counter Component working properly", ()=>{
//     render(<Counter />);
//     const buttonElement=screen.getByText(/Click Me/i);
//     fireEvent.click(buttonElement);
//     const updatedCount=screen.getByText(/You clicked Button 1 times/i);
//     expect(updatedCount).toBeInTheDocument();
// })




//-------------------------------------------------------------------------------------
import {render, screen, fireEvent} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./Counter";

test("Counter Component working properly", ()=>{
    render(<Counter />);
    const buttonElement=screen.getByText(/Click Me/i);
    fireEvent.click(buttonElement);
    const updatedCount=screen.getByText(/You clicked Button 1 times/i);
    expect(updatedCount).toBeInTheDocument();
});


test("Checking Button Functionality", async()=>{
    render(<Counter />);
    expect(screen.getByText(/Count : 0/i)).toBeInTheDocument();

    const button=screen.getByRole("button",{name:/Click Me/i});

    await userEvent.click(button);
    expect(screen.getByText(/Count : 1/i)).toBeInTheDocument();
});