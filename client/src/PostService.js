import axios from 'axios'
// const axios = require('axios')

const url = 'http://localhost:5000/api/posts/'

class PostService {
  // Get Posts
  static getPosts() {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url)
        const data = res.data
        console.log(data.forEach((post) => console.log(post.text)))
        resolve(
          data.map((post) => ({
            ...post,
            createdAt: new Date(post.createdAt),
          }))
        )
      } catch (err) {
        console.log('error')
        reject(err)
      }
    })
  }

  // Create Posts
  static insertPost(text) {
    return axios.post(url, {
      text: text,
    })
  }

  // Delete Posts
  static deletePost(id) {
    return axios.delete(`${url}${id}`)
  }
}

export default PostService
