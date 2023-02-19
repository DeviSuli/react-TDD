import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AwesomeCounter from "./AwesomeCounter";

test("it should have the correct initial value when set to 7", () => {
  render(<AwesomeCounter initialValue={7} />);
  const count = screen.queryByText(7);
  expect(count).toBeVisible();
});

test("should have a default initial value of 0", () => {
  render(<AwesomeCounter />);
  const count = screen.queryByText(0);
  expect(count).toBeVisible();
});

test("should increase the value corrctly when add is clicked once", () => {
  render(<AwesomeCounter initialValue={1} />);
  const addButton = screen.getByText("Add");
  act(() => {
    userEvent.click(addButton);
  });
  const count = screen.queryByText(2);
  expect(count).toBeVisible();
});

test("should increase the value correctly when add is clicked twice", () => {
  render(<AwesomeCounter initialValue={3} />);
  const addButton = screen.getByText("Add");
  act(() => {
    userEvent.click(addButton);
    userEvent.click(addButton);
  });
  const count = screen.getByText(5);
  expect(count).toBeVisible();
});

test("should decrease the value correctly when remove is clicked once", () => {
  render(<AwesomeCounter initialValue={3} />);
  const RemoveButton = screen.getByText("Remove");
  act(() => {
    userEvent.click(RemoveButton);
  });
  const count = screen.getByText(2);
  expect(count).toBeVisible();
});

test("should decrease the value correctly when remove is clicked twice", () => {
  render(<AwesomeCounter initialValue={3} />);
  const RemoveButton = screen.getByText("Remove");
  act(() => {
    userEvent.click(RemoveButton);
    userEvent.click(RemoveButton);
  });
  const count = screen.getByText(1);
  expect(count).toBeVisible();
});

test("should not allow a negative number when the initial value is 0 and remove is clicked", () => {
  render(<AwesomeCounter initialValue={0} />);
  const RemoveButton = screen.getByText("Remove");
  act(() => {
    userEvent.click(RemoveButton);
  });
  const count = screen.getByText(0);
  expect(count).toBeVisible();
});
test("should not allow a negative number when the initial value is 2 and remove is clicked 4 times", () => {
  render(<AwesomeCounter initialValue={2} />);
  const RemoveButton = screen.getByText("Remove");
  act(() => {
    userEvent.click(RemoveButton);
    userEvent.click(RemoveButton);
    userEvent.click(RemoveButton);
    userEvent.click(RemoveButton);
  });
  const count = screen.getByText(0);
  expect(count).toBeVisible();
});
