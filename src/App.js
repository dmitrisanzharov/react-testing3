import logo from './logo.svg';
import Book from './components/Book';
 
 
const firstBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg',
  title: 'I Love You to the Moon and Back',
  author: 'Amelia Hepworth',
  date: 1988,
  publisher: 'irish lads'
}

 
const book2 = {
  id: 2,
  title: 'Anxious People: A Novel',
  author: 'Fredrik Backman'
}

 
 
 
 
function App() {
  
 
  return (
  
    <div className="main">
 
    <Book {...firstBook} randomProp='one' />
    <hr />
    <Book title='title2' author='author2' />
    <hr />
    <Book title='title3' author='author3' />
    <hr />
    <Book {...book2} />
    
 
      {/* end of .main */}
    </div>
  );
}
 
export default App;