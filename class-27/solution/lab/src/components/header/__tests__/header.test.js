import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import Header from '../index';


/*     STRUCTURE OF A TEST
1. Render a component we want to test
2. Find elements we want to interact with
3. Interact with said elements
4. Assert that the results are as expected
*/


describe("Header", () => {

  // with getByText
  it('should render same text passed into title prop with getByText', () => {
    render(<Header title={"RESTy"} />);
    const h1Element = screen.getByText(/RESTy/i);
    expect(h1Element).toBeInTheDocument();
  });

  // with getByRole
  it('should render same text passed into title prop with getByRole no args', () => {
    render(<Header title={"RESTy"} />);
    const h1Element = screen.getByRole('heading');
    expect(h1Element).toBeInTheDocument();
  });

  // with getByRole
  xit('should render same text passed into title prop with getByRole and args', () => {
    render(<Header title={"RESTy"} />);
    const h1Element = screen.getByRole('heading', { name: /RESTy/i });
    expect(h1Element).toBeInTheDocument();
  });

  // with getByTitle
  it('should render with getByTitle', () => {
    render(<Header title={"RESTy"} />);
    const h1Element = screen.getByTitle('Header')
    expect(h1Element).toBeInTheDocument();
  });

  // with getByTestId
  it('should render with getByTestId', () => {
    render(<Header title={"RESTy"} />);
    const h1Element = screen.getByTestId('header');
    expect(h1Element).toBeInTheDocument();
  });

  //******************   ASSERTIONS   ****************** */

  // Assert .toBeTruthy
  it('should assert with .to', () => {
    render(<Header title={"RESTy"} />);
    const h1Element = screen.getByTestId('header');
    expect(h1Element).toBeTruthy();
  });

  // Assert .toBeVisible
  it('should assert with .to', () => {
    render(<Header title={"RESTy"} />);
    const h1Element = screen.getByTestId('header');
    expect(h1Element).toBeVisible();
  });

  // Assert .toContainHTML
  it('should assert with .to', () => {
    render(<Header title={"RESTy"} />);
    const h1Element = screen.getByTestId('header');
    expect(h1Element).toContainHTML('h1');
  });

  // Assert .toHaveTextContent
  it('should assert with .to', () => {
    render(<Header title={"RESTy"} />);
    const h1Element = screen.getByTestId('header');
    expect(h1Element).toHaveTextContent('RESTy');
  });

  // Assert .not.toBeFalsy
  it('should assert with .to', () => {
    render(<Header title={"RESTy"} />);
    const h1Element = screen.getByTestId('header');
    expect(h1Element).not.toBeFalsy();
  });

  // Assert .toBe
  it('should assert with .to', () => {
    render(<Header title={"RESTy"} />);
    const h1Element = screen.getByTestId('header');
    expect(h1Element.textContent).toBe('RESTy');
  });
});