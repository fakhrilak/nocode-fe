const initialState = {
    targerBox : []
}

export default function (state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
        case "DROP-TO-TARGET-BOX":
            return {
                ...state,
                targerBox:[...state.targerBox,payload]
            }
        default:
            return state;
    }

}