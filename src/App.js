import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';

class App extends Component {
   state = {
      characters: []
   };

   render () {
      return (
         <div className="container">
            <Table characterData={characters} removeCharacter={this.removeCharacter} />
            <Form />
         </div>
      );
   }
}

export default App