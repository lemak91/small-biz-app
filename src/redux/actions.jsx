export const addListing = (listing) => {
  return {
    type: "ADD_LISTING",
    value: listing,
  };
};

export const removeListing = (index) => {
  return {
    type: "REMOVE_LISTING",
    value: index,
  };
};

// export const fetchMakes = () => {
//   return (dispatch) => {
//     fetch(url)
//       .then((res) => res.json())
//       .then((resp) => {
//         const action = {
//           type: "FETCH_MAKES",
//           value: resp.Results,
//         };
//         dispatch(action);
//       });
//   };
// };

// export const deleteMakes = (index) => {
//   return {
//     type: "DELETE_MAKES",
//     value: index,
//   };
// };
