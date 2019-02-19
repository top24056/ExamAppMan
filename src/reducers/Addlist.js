export default (state =0,{type,list}) => {
  switch (type) {
    case 'ADDLIST':
      return list
    default:
      return state
  }
}