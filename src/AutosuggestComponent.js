import React from 'react';
import Autosuggest from 'react-autosuggest';
const languages = [
  {
    name: 'C',
    year: 1972
  },
  {
    name: 'Elm',
    year: 2012
  },
  {
    name: 'Pepe'
  },
  {
    name: 'Popo'
  },
  {
    name: 'Pipi'
  }
];

const getSuggestionValue = suggestion => suggestion.name;

const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : languages.filter(lang =>
    lang.name.toLowerCase().slice(0, inputLength) === inputValue
  );
};

const onSuggestionsFetchRequested = ({ value }) => {
  this.setState({
    suggestions: getSuggestions(value)
  });
};

const renderSuggestion = suggestion => (
  <div>
    {suggestion.name}
  </div>
);

const onSuggestionsClearRequested = () => {
  this.setState({
    suggestions: []
  });
};

const inputProps = {
  placeholder: 'Type a programming language',
  // value,
  onChange: this.onChange
};

function AutoSuggestComponent () {
  // const [value, setVa]
  return (
    <React.Fragment>
     <h1> React Autosuggest</h1>
     <Autosuggest
        suggestions={languages}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
    </React.Fragment>
  )
}

export default AutoSuggestComponent;
