const [user, setUser] = useState({
    email: '',
    password: ''
});

useEffect(() => {
    fetch('http://localhost:3000/users/login')
        .then((res) => {
            console.log(res);
            setState(user);
        }) 
}, []);


const onRegisterHandler = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const { email, password, repass } = Object.fromEntries(formData);
    const inputData = { email, hashedPassword: password };

    console.log('state');

    fetch('/users/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(inputData)
    })
        .then((res) => {
            console.log('Data has been sent to the server!');
            setUser({email, password});
            console.log(user);
            console.log(res);
        })
        .catch(() => {
            console.log('Internal server error!');
        })
}