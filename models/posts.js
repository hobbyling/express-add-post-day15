const mongoose = require('mongoose');
const postSchema = new mongoose.Schema({
  /* 加入欄位驗證 */
  name: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: [true, '貼文內容未填寫']
  },
  img: {
    type: String,
    default: ''
  },
  createAt: {
    type: Date,
    default: Date.now,
    select: false
  },
},
  {
    versionKey: false
  }
);

const Post = mongoose.model('Post', postSchema);

module.exports = Post;