const API = 'http://192.168.18.47:8081'

export const getUsers = async (endPoint) => {
    try {
        const res = await fetch(`${API}/${endPoint}`)
        return await res.json()
    } catch (error) {
        console.log(error)
    }
}

export const addUser = async (newUser) => {
    const res = await fetch(`${API}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(newUser)
    })
    return await res.json()
}

export const getUser = async (email) => {
    try {
        const res = await fetch(`${API}/findUser/${email}`)
        return await res.json()
    } catch (error) {
        console.log(error)
    }
}