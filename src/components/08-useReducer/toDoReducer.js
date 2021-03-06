export const toDoReducer = ( state = [], action ) => {

    switch ( action.type ) {
        case 'add':
            return [ ...state, action.payload]
    
        case 'delete':
            return state.filter( toDo => toDo.id !== action.payload )

        case 'complete':
            return state.map( toDo => {

                if( toDo.id === action.payload ){
                    return{
                        ...toDo,
                        done: true
                    }
                }
                else{
                    return toDo // Retornamos el state actual para no mutarlo
                }
            })

        default:
            return state
    }

}