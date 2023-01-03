const express = require('express')
const cors = require('cors')
require('./backend/node_modules/dotenv/lib/main').config({ debug: true });
const stripe = require('stripe')(process.env.STRIPE_API_KEY);

const app = express()
app.use(cors())
app.use(express.static("public"))
app.use(express.json())

app.get('/', (req, res) => res.send('Hello World!'))
app.post('/checkout', async (req, res) => {
    const items = req.body.items
    console.log(items)
    let lineItemsParams = ''
    let lineItems = []
    items.forEach((item, index) => {
        lineItems.push({
            price: item.id,
            quantity: item.quantity
        })
        lineItemsParams += `product${index}=${item.id}&`
    })
    lineItemsParams += `productsLength=${items.length}`
    console.log(lineItemsParams)
    const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        // success_url: `http://localhost:3000/success?${lineItemsParams}`,
        // cancel_url: 'http://localhost:3000',
        success_url: process.env.REACT_APP_URL + `success?${lineItemsParams}` || 'http://localhost:3000',
        cancel_url: process.env.REACT_APP_URL || 'http://localhost:3000',
    })
    res.send(JSON.stringify({
        url: session.url,
    }))
})

app.listen(process.env.PORT || 8080, () => console.log('Running on port 8080'))