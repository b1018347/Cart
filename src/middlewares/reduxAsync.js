export default store => next => action => {
    if (action.payload && action.payload.then) {
        action.payload.then( response => {
            const newAction = {
                ...action,
                payload: response.data
            };
            return next(newAction);
        })
    } else {
        return next(action)
    }
};