const express = require('express')
const Post = require('../models/Post')
const router = express.Router()


//ROUTES
// router.get('/', (req, res) => {
//     res.send('We are on posts')
// })


//Get back all the post
router.get('/', async (req, res) => {
    try{
        const posts = await Post.find()
        res.json(posts)
    }catch(err){
        res.json({message: err})
    }
})

//Submit a post
router.post('/', async (req, res) => {
    // console.log(req.body)
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    })

    const savedPost = await post.save()
    try{
        res.json(savedPost)
    }catch (err){
        res.json({message: err})
    }
    

    // post.save().then(data => {
    //     res.json(data)
    // }).catch(err => {
    //     res.json({message: err})
    // })
})

//Specificc Post
router.get('/:postId', async (req, res) => {

    try{
        const post = await Post.findById(req.params.postId)
        res.json(post)
    }catch(err)
    {
        res.json({message: err})
    }
    //console.log(req.params.postId)
    
})

//Delete Post
router.delete('/:postId', async (req, res) => {
    try{
       const removedPost = await Post.remove({_id: req.params.postId})
       res.json(removedPost)
    }catch(err){
        res.json({message: err})
    }
})

//Update a post
router.patch('/:postId', async (req, res) => {
    try{
        const updatedPost = await Post.updateOne({_id: req.params.postId}, {$set: {title: req.body.title}})
        res.json(updatedPost)
    }catch(err)
    {
        res.json({message: err})
    }
})

// router.get('/specific', (req, res) => {
//     res.send('Specific post')
// })

module.exports = router