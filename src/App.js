import './App.css';
import AutoCompleteComponent from './AutocompleteComponent';
// import AutoSuggestComponent from './Autosuggest';
// import DownshiftComponent from './Downshift';
// import AutoSuggestClass from './AutoSuggestComponentClass'
import DropdownCombobox from './UseComboboxComponent';


function App() {  
  return (
    <div className="App">
        <AutoCompleteComponent/>
        {/* <AutoSuggestComponent /> */}
        {/* <DownshiftComponent /> */}
        {/* <AutoSuggestClass /> */}
        <DropdownCombobox />
    </div>
  );
}

export default App;
