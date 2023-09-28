
import routes from './routes.js'

const cep = document.getElementById('cep')
const form = document.getElementById('form-register')

cep.addEventListener('blur', async function(){
    if(this.value == '') return

    const cep = this.value
    const url = `https://viacep.com.br/ws/${cep}/json/`

    const config = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }

    const request = await fetch(url, config)
    const response = await request.json()

    const fill = {
        'state' : response.uf,
        'city' : response.localidade,
        'neighborhood' : response.bairro,
        'public-place' : response.logradouro,
    }

    for (const key in fill) {
        if (Object.hasOwnProperty.call(fill, key)) {
            const value = fill[key];
            const input = document.getElementById(key)
            input.value = value
        }
    }
})

form.addEventListener('submit', async function(e){
    e.preventDefault()

    console.log(this)
    const config = {
        method: 'POST',
        body: JSON.stringify(
            {
                "name": "joao",
                "cep": "123",
                "state": "s",
                "city": "s",
                "neighborhood": "s",
                "publicplace": "s",
                "number": 1,
                "complement": "s",
                "schedule": "2021-02-01"
            }
        ),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }

    const request = await fetch(routes.register, config)
    const response = await request.json()

    console.log(response);
})