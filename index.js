// // let http = require('http')
// // // console.log(http,"yaad nhi aana ");
// // let server = http.createServer((req,res)=>{
// //     console.log('hii');                              //create server
// //     res.end('hello!!!')
// // })

// // server.listen(9000,()=>
// // {
// //     console.log('server runing ok  9000');
// // })


// // let express = require('express')
// // let app = express()

// // app.set ('view engine','ejs')

// // // app.use(express.static('public'))

// // app.get('/',(req,res)=>{

       
// //     res.send("dxfcgvhbjnkml")
// // })
        
// //         app.listen(8000,()=>
// //             {
// //                 console.log('server run on 8000');
// //             })



// let express = require('express')
// let methodOverride = require('method-override');
// let app = express()
// app.use(methodOverride('_method'));
// app.use (express.urlencoded({extended:true}));
// let comments = 
//     [
//         {
//           "id": 1,
//           "title": "To Kill a Mockingbird",
//           "author": "Harper Lee",
//           "year": 1960
//         },
//         {
//           "id": 2,
//           "title": "1984",
//           "author": "George Orwell",
//           "year": 1949
//         },
//         {
//           "id": 3,
//           "title": "Moby-Dick",
//           "author": "Herman Melville",
//           "year": 1851
//         },
//         {
//           "id": 4,
//           "title": "The Great Gatsby",
//           "author": "F. Scott Fitzgerald",
//           "year": 1925
//         },
//         {
//           "id": 5,
//           "title": "War and Peace",
//           "author": "Leo Tolstoy",
//           "year": 1869
//         },
//         {
//           "id": 6,
//           "title": "Pride and Prejudice",
//           "author": "Jane Austen",
//           "year": 1813
//         },
//         {
//           "id": 7,
//           "title": "The Catcher in the Rye",
//           "author": "J.D. Salinger",
//           "year": 1951
//         },
//         {
//           "id": 8,
//           "title": "The Hobbit",
//           "author": "J.R.R. Tolkien",
//           "year": 1937
//         },
//         {

//           "id": 9,
//           "title": "Ulysses",
//           "author": "James Joyce",
//           "year": 1254,


//         }
//     ]
//     app.set('view engine','ejs')

//     app.use(express.static('public'))
//     app.get('/',(req,res)=>
//     {
//         res.send('hello');

//     });
//     app.get('/blog',(req,res)=>
//     {
//         res.render('index',{comments})
//     })
//     app.get ('/blog/new',(req,res)=>
//     {
//         console.log(req.body,"hiii");
//         let {title,author} = req.body
//         comments.push({title,author,id:comments.length})
//     })
//     app.get('/blog/:id',(req,res)=>{
//         let {id}=req.params
//       console.log(id,"ididid");
      
//          let data=  comments.find((data)=>{return data.id==id})
//          console.log(data,"dagta");
//          res.render('edit',{data})
      
      
//       })
      
      
//       app.patch('/blog/:id',(req,res)=>{
//         let {id}=req.params
//         console.log(id,'eje');
//         let {title,author}=req.body
      
//         let data=  comments.find((data)=>{return data.id==id})
//         console.log(data,"datata");
      
//         data.title=title
//         data.author=author
        
//         res.redirect('/blog')
      
//       })
      
      
//       // delete
      
//       app.delete('/blog/:id',(req,res)=>
//       {
//         let {id}=req.params
//         let newData = comments.filter((data)=>
//         {
//           return data.id!=id
//         })
//         comments = newData
//         res.redirect('/blog')
//         })
        
      
//       app.listen(4000,()=>{
//         console.log('server host 4000')
      
//       })
      
             
      
      
      
      

// let express = require('express')
// let app =   express()
// app.use('/home',express.static('public'))


// app.use(express.urlencoded({extended:false}))

// app.get('/cat',(req,res)=>
// {
//   res.send('cat')

// })




// let arr = [1,2,3,4,5];

// app.get('/',(req,res)=>{

//   res.send('hii');
// })
// app.get ('/todo',(req,res)=>
// {
//   res.json(arr)

// })


// app.post('/todo',(req,res)=>{
//   console.log(req.body,"okkkk");
//   let {data} = req.body;
//   let b = Number(data)
//   arr.push(data)
//   res.send( 'data');
// })
// app.listen(5000,()=>
// {
//   console.log('5000 id ok');
// })


// console.log('hello');




let express=   require('express')

 let app=   express()
 app.use(express.urlencoded({extended:false}))
 app.use( express.static('public'))
//  app.set('view engine', 'ejs')
   let arr=[1,2,3,4,5] 
        
 app.get('/',(req,res)=>{
    res.send('hello')
    
 })
 app.get('/todo',(req,res)=>{
   res.json(arr)

 })
 app.post('/todo',(req,res)=>{
   console.log(req.body,"jeje");

   let {data}=req.body
   let data1=  parseInt(data)
   arr.push(data1)
   
    start
    res.send('hehhe')

 })

 app.listen(5000,()=>{
    console.log('5000 server running...');
 })
