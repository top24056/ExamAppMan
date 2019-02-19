export default (state = [],{type,list}) => {
  switch (type) {
    case 'ADDDECK':
      return state.concat(list)
    default:
      return state
  }
}