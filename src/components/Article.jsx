// import React from 'react';

// function Article({ title, date, preview }) {
//   // Calculate minutes to read
//   const minutesToRead = Math.ceil(preview.split(' ').length / 200);
//   // Define emojis for minutes to read
//   const emojis = minutesToRead <= 6 ? '☕️'.repeat(Math.ceil(minutesToRead / 5)) : '🍱'.repeat(Math.ceil(minutesToRead / 10));

//   return (
//     <article>
//       <h3>{title}</h3>
//       <small>{date || 'January 1, 1970'}</small>
//       <p>{preview}</p>
//       <div>{emojis} {minutesToRead} min read</div>
//     </article>
//   );
// }

// export default Article;




const Article = ({title, date = "January 1, 1970", preview}) => {
    return (
      <article>
          <h3>{title}</h3>
          <small>{date}</small>
          <p>{preview}</p>
      </article>
    )
  }
  
  export default Article