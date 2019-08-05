const initialState = {
    age: 21
};

const reducer = (state=initialState, action) => {
    // we just change the state depening on the action that is being passed
    const newState = {...state};

    switch(action.type) {
        case 'AGE_UP':
            console.log('ageup')
            newState.age += action.value;
            break;

        case 'AGE_DOWN':
            console.log('ageDown')
            newState.age -= action.value;
            break;
    }
    return newState;
};

export default reducer;