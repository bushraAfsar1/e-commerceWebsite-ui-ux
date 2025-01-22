'use client'
import Image from 'next/image';
import { useState } from 'react';
let blogs =[
  {
    id: '1',
    image: '/images/blog1.jpg',
    title: ' Going all-in with millennial design',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos vero dolores sunt quam id. Quibusdam corporis qui quos nihil velit.',
    detail: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores voluptatibus ipsa reprehenderit sed, nisi magnam quis aperiam illum magni omnis eligendi! Assumenda repellendus, saepe nesciunt maiores blanditiis neque distinctio sapiente pariatur minima, voluptates expedita quis fugit soluta laborum, officiis explicabo ad quasi. Fuga ullam placeat sapiente quae ratione laborum nam.',
},
{
    id: '2',
    image: '/images/blog2.jpg',
    title: ' Exploring new ways of decorating',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos vero dolores sunt quam id. Quibusdam corporis qui quos nihil velit.',
    detail: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores voluptatibus ipsa reprehenderit sed, nisi magnam quis aperiam illum magni omnis eligendi! Assumenda repellendus, saepe nesciunt maiores blanditiis neque distinctio sapiente pariatur minima, voluptates expedita quis fugit soluta laborum, officiis explicabo ad quasi. Fuga ullam placeat sapiente quae ratione laborum nam.',
} ,
{
    id: '3',
    image: '/images/blog3.jpg',
    title: ' Handmade pieces that took time to make',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos vero dolores sunt quam id. Quibusdam corporis qui quos nihil velit.',
    detail: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores voluptatibus ipsa reprehenderit sed, nisi magnam quis aperiam illum magni omnis eligendi! Assumenda repellendus, saepe nesciunt maiores blanditiis neque distinctio sapiente pariatur minima, voluptates expedita quis fugit soluta laborum, officiis explicabo ad quasi. Fuga ullam placeat sapiente quae ratione laborum nam.',
},
{
    id: '4',
    image: '/images/blog4.jpg',
    title: ' Handmade pieces that took time to make',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos vero dolores sunt quam id. Quibusdam corporis qui quos nihil velit.',
    detail: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores voluptatibus ipsa reprehenderit sed, nisi magnam quis aperiam illum magni omnis eligendi! Assumenda repellendus, saepe nesciunt maiores blanditiis neque distinctio sapiente pariatur minima, voluptates expedita quis fugit soluta laborum, officiis explicabo ad quasi. Fuga ullam placeat sapiente quae ratione laborum nam.',
},
]
const blogDetails = ({params}: {params : any}) => {
    console.log(params)
      const b = blogs.find((blog) => blog.id === params.id);

      const [comments, setComments] = useState<string[]>([]);
      const [newComment, setNewComment] = useState<string>('');

      if (!b) return <p>Blog not found</p>;
      const handleAddComment = () => {
        if (newComment.trim()) {
          setComments([...comments, newComment]);
          setNewComment('');
        }
      };
    
      return (
        <div className='blogHome'>
          <div className='iBlog' >
            <div className='iBlog1'>
            <Image className='iBlogImg' src={b.image} alt='pic'
            height={200}
            width={200}  />
            <div className='nameDes'>
        <p className='iBlogName'>{b.title}</p>
        <p className='iBlogDes'>{b.description}</p>
            </div>
            </div>
        <div className='iBlog2'>
        <p className='iBlogDetail'>Details: {b.detail}</p>    
        </div>
      </div>
      <div className=" commentSection">
      <h2>Comments</h2>
      <ul className='comments'>
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>

      <input className='commentInp'
        type="text"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Add a comment"
      />
      <button className='commentBtn' onClick={handleAddComment}>Post Comment</button>

        
      </div>

        </div>
      );
    };
    
    export default blogDetails;