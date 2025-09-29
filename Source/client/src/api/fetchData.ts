export const fetchData = async () => {
    const response = await fetch('https://fakerapi.it/api/v2/custom?_quantity=100&_locale=en_US&first_name=firstName&last_name=lastName&phone=phone&email=email&password=password&birthday=date&text=longText&city=city')

    const data = await response.json()

    return data
}