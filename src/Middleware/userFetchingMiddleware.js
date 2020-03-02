import fetchUserSuccess from "../Actions/fetchUserSuccess";
import fetchUserFailure from "../Actions/fetchUserFailure";

const userFetchingMiddleware = store => next => action => {
    // const result = next(action);
    console.log("userFetchingMiddleware is starting");
    
   
    if (action.type === "FETCH_USERS_REQUEST") {

        

        fetch("https://loft-taxi.glitch.me/card?token=AUTH_TOKEN")
            .then(response => response.json())
            .then(result => console.log("result======", result))
        //
        // let user = {
        //     name: 'John',
        //     surname: 'Smith'
        //   };
          
        //   let response = await fetch('/article/fetch/post/user', {
        //     method: 'POST',
        //     headers: {
        //       'Content-Type': 'application/json;charset=utf-8'
        //     },
        //     body: JSON.stringify(user)
        //   });
          
        //   let result = await response.json();
        //   alert(result.message);


        // fetch('https://loft-taxi.glitch.me/auth', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json;charset=utf-8'
        //     },
        //     body: JSON.stringify(action.payload)
        //   })
        //     .then(response => {                
        //         store.dispatch(fetchUserSuccess(response));
        //         return response.json();                
        //     })
        //     .then(result => console.log("result===", result))
        //     // .then(result => alert(JSON.parse(result)))
        //     .catch(error => {
        //         store.dispatch(fetchUserFailure(error))
        //     })


        
    //   fetch('https://loft-taxi.glitch.me/auth')
    //   .then(users => {
    //     store.dispatch(fetchUserSuccess(users))        
    //   })
    //   .catch(error => {
    //     store.dispatch(fetchUserFailure(error))
    //   })
    // }
    // return result;
    }
    return next(action);
}

export default userFetchingMiddleware;