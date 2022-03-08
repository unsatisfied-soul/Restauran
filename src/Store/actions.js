export const actionCreators = {
    addToList: data => ({ type: "ADD_TO_LIST", payload: data }),
    removeItem: data => ({ type: "REMOVE_ITEM", payload: data }),
    addUser: user => ({type: "ADD_USER", payload: user}),
    addprice: data => ({type: "ADD_PRICE", payload: data})
};