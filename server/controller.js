module.exports = {
    getInventory: (req, res) => {
        const db = req.app.get('db')
  
        db.get_inventory().then(resp => {
            res.status(200).send(resp)
        })
    },

    createInventory: (req,res) => {
        const db = req.app.get('db')
        const {product_name, product_price, img_url} = req.body

        db.create_product(product_name, product_price,img_url).then(resp => {
            res.status(201).send(resp)
        })
    }
}