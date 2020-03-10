export const getUser = (user, part) => 
    fetch(`https://loft-taxi.glitch.me/${part}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(user)
    }).then(response =>
        response.json());