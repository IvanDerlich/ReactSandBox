import AutoComplete, { usePlacesWidget } from 'react-google-autocomplete';

function AutoCompleteComponent () {
  const key = 'AIzaSyDsS0Gc8FQ_T3YqQ1yrggAOMrWbAEMQsXc';
  const { ref, autocompleteRef } = usePlacesWidget({
    apiKey:key,
    onPlaceSelected: (place) => {
      console.log(place);
    }
  });
  return (
    <>
      <AutoComplete
          apiKey={key}
          onPlaceSelected={(place) => console.log(place)}
          options={{ types: ["address"] }}
          style={{ width: "90%" }}
        />
        <form>
          <input
            ref={ref}
          >
          </input>
        </form>  
    </>
  );
}

export default AutoCompleteComponent;
