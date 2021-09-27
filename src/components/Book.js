import React, {} from 'react'; 
 
 
const Book = (props) => {
 
 console.log(props);

 const {title, author} = props; 
  
 
  return       ( 
 
    <div className='book-wrapper'>
 
     {title} <br />
     {author}
 
    </div>
 
)
};
 
export default Book;