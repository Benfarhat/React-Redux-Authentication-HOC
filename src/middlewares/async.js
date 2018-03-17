export default function ({dispatch}){

    /*
    // ES5 implementation
    return function next(action){
        return function action(){
            console.log(action)
            next(action)
        }
    }
    */
    return next => action => {
        // If action does not have a pâyload
        // or, the payload does not have a .then property
        // We dont care about it and send it on
        if(!action.payload || ! action.payload.then){
            return next(action)
        }

        // We have a promise
        
        // Make sure the action's promis resolves
        action.payload
            .then(response => {
                // create a new action with the old type, but
                // replace the promise with the response data
                 const newAction = {...action, payload: response.data}
                 dispatch(newAction)
            })

    }
}