export const postCard = (card) => 
    fetch(`https://loft-taxi.glitch.me/card`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(card)
    }).then(response =>
        response.json());