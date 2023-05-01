const filterReducer = (state,action) => {
    switch(action) {
        case 'mens':
            return state.filter((i)=> i.ca)
    }
}