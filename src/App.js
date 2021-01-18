import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';
import FetchData from './FetchDemo';
import axios from 'axios'

class App extends Component {
   state = {
      characters: []
   };

   handleSubmit = character => {
      // This essentially means append character to this.state.characters
      this.setState({ characters: [...this.state.characters, character] })
   };

   removeCharacter = index => {
      const { characters } = this.state

      this.setState({
         characters: characters.filter((character, i) => {
            return i !== index
         }),
      })
   }

   componentDidMount() {
      axios.get('http://localhost:5000/users')
       .then(res => {
         const characters = res.data.users_list;
         this.setState({ characters });
       })
       .catch(function (error) {
         //Not handling the error. Just logging into the console.
         console.log(error);
       });
   }

   render () {
      const { characters } = this.state;

      return (
         <div className="container">
            <Table characterData={characters} removeCharacter={this.removeCharacter} />
            <Form handleSubmit={this.handleSubmit} />
            <FetchData subreddit='calpoly' />
         </div>
      );
   }
}

export default App