import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Results from "../index";

describe("Results", () => {

  xit('should render the ', () => {
    render(<Form />);
    const span = screen.getByText(/URL:/i);
    expect(span).toBeInTheDocument();
  });

});