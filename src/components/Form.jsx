import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      // hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <form>
        <fieldset>
          <legend>Tryunfo Game</legend>
          <label htmlFor="input-name">
            Nome da Carta:
            <input
              value={ cardName }
              data-testid="name-input"
              type="text"
              id="input-name"
              onChange={ onInputChange }
            />
          </label>
          <br />
          <label htmlFor="description">
            Card Description:
            <textarea
              id="description"
              cols="50"
              rows="3"
              data-testid="description-input"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>
          <br />
          <label htmlFor="input-number1">
            Attribute 1:
            <input
              type="number"
              id="input-number1"
              value={ cardAttr1 }
              data-testid="attr1-input"
              onChange={ onInputChange }
            />
          </label>
          <br />
          <label htmlFor="input-number2">
            Attribute 2:
            <input
              type="number"
              id="input-number2"
              value={ cardAttr2 }
              data-testid="attr2-input"
              onChange={ onInputChange }
            />
          </label>
          <br />
          <label htmlFor="input-number3">
            Attribute 3:
            <input
              type="number"
              id="input-number3"
              value={ cardAttr3 }
              data-testid="attr3-input"
              onChange={ onInputChange }
            />
          </label>
          <br />
          <label htmlFor="input-img">
            Image:
            <input
              type="text"
              id="input-img"
              value={ cardImage }
              data-testid="image-input"
              onChange={ onInputChange }
            />
          </label>
          <br />
          Raridade da Carta:
          <select
            id="input-select"
            value={ cardRare }
            data-testid="rare-input"
            onChange={ onInputChange }
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
          </select>
          <br />
          <label htmlFor="input-checkbox">
            Super Trunfo:
            <input
              type="checkbox"
              checked={ cardTrunfo }
              id="input-checkbox"
              data-testid="trunfo-input"
              onChange={ onInputChange }
            />
          </label>
        </fieldset>
        <button
          type="submit"
          onClick={ onSaveButtonClick }
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
