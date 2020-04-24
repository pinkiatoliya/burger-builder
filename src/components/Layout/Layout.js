import React from 'react';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';

const Layout = (props) =>{
   return (
       <Auxiliary>
           <h3>navigation, side drawer, toolbar</h3>
           <main>
               {props.children}
           </main>
       </Auxiliary>
   );
}

export default Layout;