import React from "react";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const imagen = [
  "https://cdn.pixabay.com/photo/2022/09/09/15/11/caesarea-national-park-7443181_960_720.jpg",
  "https://cdn.pixabay.com/photo/2022/09/09/15/11/caesarea-national-park-7443181_960_720.jpg",
  "https://cdn.pixabay.com/photo/2022/09/09/15/11/caesarea-national-park-7443181_960_720.",
];

const App = () => {
  return (
    <div>
<Slide>

{
  imagen.map((image, index) => (
    <div>
      <div key={index} className='each-slide-effect' >
        <img src={image} className='image' />

        <a href='#'>Ver más</a>
      </div>
    </div>
  )
  )
}
</Slide>
    
    </div>
  );
};

export default App;
