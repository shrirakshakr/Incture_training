import {render,screen, fireEvent} from "@testing-library/react";
import Calculator from "./Calculator";

test("Check Add : ",() =>{
    render(<Calculator />);
    fireEvent.change(screen.getByTestId("num1"), {target : {value : "5"}});
    fireEvent.change(screen.getByTestId("num2"), {target : {value : "75"}});
    fireEvent.click(screen.getByText(/Add/i));

    expect(screen.getByTestId("result")).toHaveTextContent("Result : 80")
})