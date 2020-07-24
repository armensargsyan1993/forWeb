/* 
*test imports and commands
import * as $ from 'jquery'
import Post from '@/Post.js'
import './styles/style.css'
import json from './components/my.json'
import customImg from './components/img/test.png'
import myJs from '@my/my.js'
import babel from '@my/babbel.js'
import './styles/less/my.less'
import './styles/sass/st.scss' 

console.log(json);
const post = new Post('webpack',customImg)
console.log(post.toString());
console.log(`index`);
new myJs().conLog()

$('pre').html(`${post.toString()}`)
*/

