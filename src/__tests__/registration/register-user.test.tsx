import RegisterUser from "../../app/register-user";
import { render, screen } from "@testing-library/react";

jest.mock("next/navigation", () => ({
  ...jest.requireActual("next/navigation"),
  useRouter: () => jest.fn(),
}));

describe("User Registration Form Tests", () => {
  it("should display first name component", () => {
    render(<RegisterUser />);
    const firstNameInput = screen.getByTestId("first_name_id");
    expect(firstNameInput).toBeInTheDocument();
  });
});
