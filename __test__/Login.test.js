import { cleanup, fireEvent, render } from "@testing-library/react";
import React from "react";
import Alert from "../components/Alert";
import Login from "../components/auth/Login";
import AlertState from "../context/AlertState";
import AlertContext from "../context/alertContext";

afterEach(cleanup);


describe("Testing Login Component", () => {
  it("Check whether the modal closes on logged in", async () => {
    const setToggle = jest.fn();

    const { getByTestId } = render(
      <AlertState>
        <Login setToggle={setToggle} />
      </AlertState>
    );

    const loginInput = getByTestId("number-input");

    fireEvent.change(loginInput, { target: { value: 9897450233 } });
    fireEvent.submit(loginInput);

    expect(loginInput.value).toBe("");
    expect(setToggle).toBeCalledWith(false);
  });

  it("Check whether the alert message is displayed on screen after login", async () => {
    const setToggle = jest.fn();
    const setMessage = jest.fn();
    const setShowAlert = jest.fn();

    const { getByTestId: getLoginId } = render(
      <AlertContext.Provider value={{ setMessage, setShowAlert }}>
        <Login setToggle={setToggle} />
      </AlertContext.Provider>
    );

    const loginInput = getLoginId("number-input");

    fireEvent.change(loginInput, { target: { value: 9897450233 } });
    fireEvent.submit(loginInput);

    expect(setToggle).toBeCalledWith(false);
    expect(setShowAlert).toBeCalledWith(true);
    expect(setMessage).toBeCalledWith("Successfully Logged in!");
  });

});
