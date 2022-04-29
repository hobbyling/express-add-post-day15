const express = require('express');
const router = express.Router();
const Post = require('../models/posts');

// 取得特定貼文
router.get('/:id', async (req, res, next) => {
  try {
    const id = req.params.id
    const post = await Post.findById(id)
    if (post.length > 0) {
      res.status(200).json({
        status: "success",
        data: post
      })
    } else {
      res.status(400).json({
        status: 'fail',
        message: "或無此 ID",
      })
    }
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: "欄位未填寫正確，或無此 ID",
      error: error
    })
  }
})

router.post('/', async (req, res, next) => {
  try {
    /* 請在此填寫答案 */
    // 取得來自 request body 的資料

    // 驗證是否有 content 欄位 -> 若有則使用 mongoose 語法新增資料 -> 回傳成功回應
    //                       -> 未填寫 content 欄位 -> 回傳失敗回應
    const { name, content, img } = req.body

    if (!content) {
      res.status(400).json({
        status: 'false',
        "message": "欄位未填寫正確，或無此 ID",
        error: '請填寫貼文內容'
      });
      return
    }

    const newPost = await Post.create({
      name, content, img
    })
    res.status(200).json({
      status: "success",
      data: newPost
    })


  } catch (error) {
    res.status(400).json({
      status: 'false',
      message: "欄位未填寫正確，或無此 todo ID",
      error: error
    });
  }
})


module.exports = router;

