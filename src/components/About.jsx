// import React from 'react';

// function About({ image, about }) {
//   // Default image URL
//   const defaultImage = 'https://via.placeholder.com/215';

//   return (
//     <aside>
//       <img src={image || defaultImage} alt="blog logo" />
//       <p>{about}</p>
//     </aside>
//   );
// }

// export default About;




const About = ({image = "https://via.placeholder.com/215", about}) => {
  return (
    <aside>
        <img src={image} alt="blog logo" />
        <p>
          {about}
        </p>
    </aside>
  )
}

export default About