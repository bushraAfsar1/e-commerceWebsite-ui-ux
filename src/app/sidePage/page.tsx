import Link from "next/link";
export default function SideBar() {
  return (
    <div className=" flex flex-col gap-4 p-2 ">
     
      <Link className="tLink" href='/'>Home</Link>
            <Link className="tLink" href='/products'>Shop</Link>
            <Link className="tLink" href='/blog'> Blog</Link>
            <Link className="tLink" href='/contact'>Contact</Link>
    </div>
  );
}