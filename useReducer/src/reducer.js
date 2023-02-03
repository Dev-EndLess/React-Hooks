export const reducer = (state, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 }
    case 'DECREMENT':
      return { ...state, count: state.count - 1 }
    case 'USER_INPUT':
      return { ...state, userInput: action.payload }
    case 'TOGGLE_COLOR':
      return { ...state, color: !state.color }
    default:
      throw new Error()  
  }
}