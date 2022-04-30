import React from 'react';
import Foundpets from './Foundpets';
import Lostpets from './Lostpets';
 
const Home =() => {
   return(
      <div>
         <h1>PETS homepage</h1>
         <br/>
            <Lostpets/>
            <Foundpets/>
      </div>
   );
};
export default Home;