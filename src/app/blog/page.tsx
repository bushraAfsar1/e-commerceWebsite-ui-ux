import Image from "next/image";
import Link from "next/link"; 
export default function Blog() {
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
    return(
      <div className="mainBlogContainer" >
<div className='bgImg'></div>
      <h1 className='productH bg-text'>blog</h1> 

      <div className='mainBlogs'>
        {blogs.map((blog, i)=>(
            <div className='subBlogs'  key={i}>
              <Image className='imgBlogs' src={blog.image}  alt="pic" width={200} height={200}/>
                <p className='nameBlogs'> {blog.title}</p>
                <p className='desBlogs'> {blog.description}</p>
                <Link className='linkBlog' href={`/blog/${blog.id}`}>
                See More...
                </Link>
              </div>
        ))}
      </div>

      </div>
     

)
}