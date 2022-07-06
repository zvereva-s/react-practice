import axios from 'axios';


// GET //
const instance = axios.create({
    baseURL: 'https://62becfba0bc9b125615fd0f7.mockapi.io/api/products/',
    params: {
        limit: 10
    }
})

export async function getProducts(page){
    const { data } = await instance("/",
        {
            params: {
            page, 
        }
    })
    return data;
}  

export async function getProductsById(id){
    const { data } = await instance(`/${id}`)
    return data;
}

//POST//

export async function addProduct(product) {
    const {data} = await instance.post('/', product)
    return data;
}

//DELETE//

export async function deleteProduct(product) {
    const { data } = await instance.delete('/', product)
    return data;
}


