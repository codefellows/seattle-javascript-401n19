import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import Form from "../index";

/*     STRUCTURE OF A TEST
1. Rendera component we want to test
2. Find elements we want to interact with
3. Interact with said elements
4. Assert that the results are as expected
*/

const mockFn = jest.fn();

describe("Form", () => {

  it('should render the Forms <span> URL:', () => {
    render(<Form />);
    const span = screen.getByText(/URL:/i);
    expect(span).toBeInTheDocument();
  });

  it('should be able to type into input', () => {
    render(<Form />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'https://swapi.dev/api/people/1' } });
    expect(input.value).toBe('https://swapi.dev/api/people/1');
  });

  it('should be able to type into input and submit', () => {
    render(<Form handleApiCall={mockFn} />);
    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button')
    fireEvent.change(input, { target: { value: 'https://swapi.dev/api/people/1' } });
    expect(input.value).toBe('https://swapi.dev/api/people/1');
    fireEvent.click(button);
    expect(mockFn).toBeCalled();
  });


})