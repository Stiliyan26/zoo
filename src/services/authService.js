const baseUrl = 'http://localhost:3000/users';

export const register = async (email, password, repass) => {
    const res = await fetch(`${baseUrl}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password, repass })
    });

    const data = await res.json();

    return data;
}

export const login = async (email, password) => {
    const res = await fetch(`${baseUrl}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    return data;
}
