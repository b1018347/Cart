export default ({ dispatch }) => next => action => {
    if (action.payload && action.payload.then) {
        action.payload.then( response => {
            const newAction = {
                ...action,
                payload: response.data
            };
            return dispatch(newAction);
        })
    } else {
        return next(action);
    }
};