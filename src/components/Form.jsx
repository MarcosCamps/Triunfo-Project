import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <fieldset>
          <legend>Tryunfo Game</legend>
          <label htmlFor="input-name">
            Nome da Carta:
            <input type="text" id="input-name" data-testid="name-input" />
          </label>
          <br />
          <label htmlFor="description">
            Card Description:
            <textarea
              id="description"
              cols="50"
              rows="3"
              data-testid="description-input"
            ></textarea>
          </label>
          <br />
          <label htmlFor="input-number1">
            Attribute 1:
            <input type="number" id="input-number1" data-testid="attr1-input" />
          </label>
          <br />
          <label htmlFor="input-number2">
            Attribute 2:
            <input type="number" id="input-number2" data-testid="attr2-input" />
          </label>
          <br />
          <label htmlFor="input-number3">
            Attribute 3:
            <input type="number" id="input-number3" data-testid="attr3-input" />
          </label>
          <br />
          <label htmlFor="input-img">
            Image:
            <input type="text" id="input-img" data-testid="image-input" />
          </label>
          <br />
          Raridade da Carta:
          <select id="input-select" data-testid="rare-input">
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
          </select>
          <br />
          <label htmlFor="input-checkbox">
            Super Trunfo:
            <input type="checkbox" id="input-checkbox" data-testid="trunfo-input" />
          </label>
        </fieldset>
        <button type="submit" data-testid="save-button">Salvar</button>
      </form>
    );
  }
}

export default Form;
