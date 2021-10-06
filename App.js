import React from 'react';

import Redux from "./src/redux/root";
import Navigation from "./src/navigation";

const App = () => (
  <Redux>
    <Navigation />
  </Redux>
);

export default App;
