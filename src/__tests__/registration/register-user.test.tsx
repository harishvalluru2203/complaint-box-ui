import RegisterUser from "../../app/register-user";
import { render, screen } from "@testing-library/react";

jest.mock("next/navigation", () => ({
  ...jest.requireActual("next/navigation"),
  useRouter: () => jest.fn(),
}));

describe("User Registration Form Tests", () => {
  it("should display all fields of registration form", () => {
    render(<RegisterUser />);
    const firstNameInput = screen.getByTestId("user__registration--first-name");
    const lastNameInput = screen.getByTestId("user__registration--last-name");
    const userNameInput = screen.getByTestId("user__registration--user-name");

    expect(firstNameInput).toBeInTheDocument();
    expect(lastNameInput).toBeInTheDocument();
    expect(userNameInput).toBeInTheDocument();
  });
});
