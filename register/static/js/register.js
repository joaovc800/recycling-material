const cep = document.getElementById('cep')

cep.addEventListener('blur', async function(){
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