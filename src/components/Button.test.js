import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';
import Search from './Search'; 

test('rendering', ()=> {
    const {queryByTitle} = render(<Button />);
    const btn = queryByTitle('dummyButton');
    expect(btn).toBeDefined(); 
    expect(btn.innerHTML).toBe('Press Here');
    fireEvent.click(btn);
    expect(btn.innerHTML).toBe('You clicked');
});

test('render search', ()=> {
    const {queryByTitle} = render(<Search />);
    const search = queryByTitle('mySearch');
    expect(search).toBeDefined(); 
    expect(search.value).toBe(''); 
    fireEvent.change(search, {target: {value: 'omg'}});
    expect(search.value).toBe('omg'); 

    const someText = screen.getByText(/Some random text/i); 
    expect(someText).toBeInTheDocument();

});