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
    //ya no usaremos body porque ya no esta enviando datos, se utilizara params
    req.getConnection((err,conn) =>{
        const id = req.params.id;
        conn.query('DELETE FROM customer WHERE id = ?', [id], (err,rows) =>{
            res.redirect('/');
        })
    })
    
}

module.exports = controller;