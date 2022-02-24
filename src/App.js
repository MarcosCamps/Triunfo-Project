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
      rareCardSelect: 'normal',
      superTrunfoCheck: false,
      newCard: [],
      hasTrunfo: false,
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.isSaveButtonDisabled = this.isSaveButtonDisabled.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
  }

  onInputChange({ target }) {
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [target.name]: value,
    }, () => this.isSaveButtonDisabled());
  }

  onSaveButtonClick() {
    const { nameCard,
      description,
      image,
      attr1,
      attr2,
      attr3,
      rareCardSelect,
      superTrunfoCheck,
      newCard,
    } = this.state;
    const card = { nameCard,
      description,
      image,
      attr1,
      attr2,
      attr3,
      rareCardSelect,
      superTrunfoCheck,
    };
    const cardNew = [...newCard, card];
    console.log(cardNew);
    const trunfoCardSelect = cardNew.some((element) => element.superTrunfoCheck);
    console.log(trunfoCardSelect);

    this.setState({
      nameCard: '',
      description: '',
      image: '',
      attr1: '0',
      attr2: '0',
      attr3: '0',
      rareCardSelect: 'normal',
      superTrunfoCheck: false,
      newCard: [],
    }, () => this.setState({
      newCard: cardNew,
      hasTrunfo: trunfoCardSelect,
    }));
  }

  isSaveButtonDisabled() {
    const { nameCard,
      attr1,
      attr2,
      attr3,
      description,
      image,
      rareCardSelect,
    } = this.state;
    const attribute1 = parseInt(attr1, 10);
    const attribute2 = parseInt(attr2, 10);
    const attribute3 = parseInt(attr3, 10);
    const sumAttr = attribute1 + attribute2 + attribute3;
    const maxSum = 210;
    const minSum = 0;
    const num = 90;
    if (nameCard === '') return true;
    if (description === '') return true;
    if (image === '') return true;
    if (rareCardSelect === '') return true;
    if (attribute1 > num || attribute1 < minSum) return true;
    if (attribute2 > num || attribute2 < minSum) return true;
    if (attribute3 > num || attribute3 < minSum) return true;
    if (sumAttr > maxSum) return true;
    return false;
  }

  // Função isSaveButtonDisabled req.5 auxílio Débora Serra tribo B.

  render() {
    const { nameCard,
      description,
      image,
      attr1,
      attr2,
      attr3,
      rareCardSelect,
      superTrunfoCheck,
      hasTrunfo,
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
          isSaveButtonDisabled={ this.isSaveButtonDisabled() }
          onSaveButtonClick={ () => this.onSaveButtonClick() }
          hasTrunfo={ hasTrunfo }
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
// Auxílio de Rafael F tribo B.
export default App;
