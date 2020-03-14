export const getRoute = (order) => {
    console.log("order in api=", order);    
    let url = new URL('https://loft-taxi.glitch.me/route');
    url.searchParams.set('address1', order.address1);
    url.searchParams.set('address2', order.address2);
    console.log("url in api before fetch=", url);
    const result = fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        }
    }).then(response =>
        response.json());
    console.log("result in api after fetch=", result);
    return result;
}