import { cleanup, fireEvent, render } from "@testing-library/react";
import React from "react";
import Login from "../components/auth/Login";

afterEach(cleanup);

describe("Testing Login Component", () => {
  it("Check whether the modal closes on logged in", async () => {
    const setToggle = jest.fn();

    const { getByTestId } = render(
      <Login setToggle={setToggle} />
    );

    const loginInput = getByTestId("number-input");

    fireEvent.change(loginInput, { target: { value: 9897450233 } });
    fireEvent.submit(loginInput);

    expect(loginInput.value).toBe("");
    expect(setToggle).toBeCalledWith(false);
  });
});
