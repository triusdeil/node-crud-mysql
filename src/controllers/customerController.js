const controller = {}

controller.list = (req,res)=>{
    req.getConnection((err,conn) =>{
        conn.query('SELECT * FROM customer', (err,customers) =>{
            if(err){
                res.json(err);
            }
            res.render('customers',{
                data: customers
            })
        })
    })
}

controller.save = (req,res) =>{
    console.log(req.body);
    req.getConnection((err,conn) =>{
        const data = req.body
        conn.query('INSERT INTO customer set ?',[data], (err, customer)=>{
            console.log(customer)
            res.redirect('/')
        })
    })
}

controller.delete = (req,res) =>{
    //ya no usaremos body porque ya no esta enviando datos
}

module.exports = controller;