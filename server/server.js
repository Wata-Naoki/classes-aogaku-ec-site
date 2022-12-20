const express = require('express')
const cors = require('cors')
require('dotenv').config({ debug: true });
const stripe = require('stripe')(process.env.STRIPE_API_KEY);

const app = express()
app.use(cors())
app.use(express.static("public"))
app.use(express.json())

app.get('/', (req, res) => res.send('Hello World!'))
app.post('/checkout', async (req, res) => {
    const items = req.body.items
    console.log(items)
    let lineItems = []
    items.forEach((item) => {
        lineItems.push({
            price: item.id,
            quantity: item.quantity
        })
    })
    const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        success_url: `http://localhost:3000/` || 'https://auth-ec-site.vercel.app/',
        cancel_url: `http://localhost:3000/product` || 'https://auth-ec-site.vercel.app/product',

    })
    res.send(JSON.stringify({
        url: session.url,
    }))
})

app.listen(8080, () => console.log('Running on port 8080', process.env.STRIPE_API_KEY))