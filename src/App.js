import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      nameCard: '',
      description: '',
      image: '',
      attr1: '',
      attr2: '',
      attr3: '',
      rareCardSelect: '',
      superTrunfoCheck: false,
    };

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange({ target }) {
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [target.name]: value,
    });
  }

  render() {
    const { nameCard,
      description,
      image,
      attr1,
      attr2,
      attr3,
      rareCardSelect,
      superTrunfoCheck,
    } = this.state;
    const { onInputChange } = this;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ nameCard }
          onInputChange={ onInputChange }
          cardDescription={ description }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ image }
          cardRare={ rareCardSelect }
          cardTrunfo={ superTrunfoCheck }
        />
        <Card
          cardName={ nameCard }
          cardDescription={ description }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ image }
          cardRare={ rareCardSelect }
          cardTrunfo={ superTrunfoCheck }
        />
      </div>
    );
  }
}

export default App;
