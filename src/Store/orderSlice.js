const initialState = {
    items: [],
    user: {},
    price: []
  };
  

  
export default (state = initialState, action) => {
    switch (action.type) {
      case "ADD_TO_LIST": {
        const newState = {...state, items : [...state.items, action.payload]};
        return newState
    }
      case "REMOVE_ITEM": {
        const newState = {...state, items: state.items.filter((foodItem) => foodItem.id !== action.payload)}
        return newState;
      }
      case "ADD_USER" : {
        return {
          user : action.payload
        }
      }
      case "ADD_PRICE" : {
        const newState = {...state, price : [...state.price, action.payload]};
        return newState
      }
      default:
        return state;
    }
  };
  