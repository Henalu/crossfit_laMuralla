const baseUrl = 'http://localhost:8080'

export async function getStaff() {
    try {
        const res = await fetch (`${baseUrl}/staff`)
        return await res.json()
    } catch (error) {
        console.log(error)
    }
}
export async function getFounders() {
    try {
        const res = await fetch (`${baseUrl}/founders`)
        return await res.json()
    } catch (error) {
        console.log(error)
    }
}

export async function getShoes(){
    try {
        const res = await fetch (`${baseUrl}/shoes`)
        return await res.json()
    } catch (error) {
        console.log(error)
    }   
}

export async function defaultPost(endPoint, method, data) {
    let metaData = {
      method: method,
      body: JSON.stringify(data),
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-type": "application/json",
      },
    };
  
    await fetch(`${baseUrl}/${endPoint}`, metaData)
}