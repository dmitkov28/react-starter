import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import Counter from "./Counter";

describe("Counter Component Test", () => {
  it("should display the correct count when incremented and decremented", async () => {
    render(<Counter />);
    const counter = screen.getByTestId("counter");
    expect(counter).toBeVisible;

    const incrementBtn = screen.getByTestId("increment");
    const decrementBtn = screen.getByTestId("decrement");

    await userEvent.click(incrementBtn);
    expect(counter).toHaveTextContent("Count: 1");
    await userEvent.click(incrementBtn);
    expect(counter).toHaveTextContent("Count: 2");

    await userEvent.click(decrementBtn);
    expect(counter).toHaveTextContent("Count: 1");
  });

  it("should not continue decrementing if the count is 0", async () => {
    render(<Counter />);
    const counter = screen.getByTestId("counter");
    expect(counter).toBeVisible;

    const decrementBtn = screen.getByTestId("decrement");
    await userEvent.click(decrementBtn);
    expect(counter).toHaveTextContent("Count: 0");
  });
});
