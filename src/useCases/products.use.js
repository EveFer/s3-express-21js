import {Product} from '../models/products.model.js'


function create(newProduct, file) {
    const {location, key} = file
    const productToSave = {...newProduct, image: location, keyImage: key, price: Number(newProduct.price)}
    return Product.create(productToSave)
}

function getAll(){
    return Product.find()
}

function getById(id) {
    return Product.findById(id)
}

function deleteById(id) {
    return Product.findByIdAndDelete(id)
}

function updateById(id, newData) {
    return Product.findByIdAndUpdate(id, newData, { new: true })
}

export {
    create,
    getAll,
    getById,
    deleteById,
    updateById
}