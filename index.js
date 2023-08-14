import express from 'express'

const app = express()
const PORT = process.env.PORT || 8080

app.get('/', (req,res)=>{
    res.json({msg:'hello'})
})

app.get('/user', (req, res) =>{
    res.json ([
        {
            id: 1,
            name: "mark",
            password: "rttrttyyad",
            email: 'SKFLF:VOVO@slfkfs'
        },{
            id: 2,
            name: "Jane doe",
            password: "4rttr",
            email: 'MVLMBOI@ldskof'
        },{
            id: 3,
            name: "John doe",
            password: "trtrt",
            email: 'SMJOFJOK@lslkd'
        }
    ])
})

app.get('/user/:id',(req, res)=>{
    const id = req.params.id;
    res.json({
        id:id,
        services: 12,
        notes: `user ${id} has public accessible data.`
    })
})

app.listen(PORT, ()=>{
    console.log(`App is running on ${PORT}`)})