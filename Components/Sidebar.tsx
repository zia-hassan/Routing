import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className="bg-black text-white h-full p-8 space-y-6">
      <div className="text-2xl mb-8"></div>
      <li><Link href="/blogs">Blogs</Link></li>
      <li><Link href="/Blogs/frontendblogs">Frontend Blogs</Link></li>
      <li><Link href="/Blogs/backendblogs">Backend Blogs</Link></li>
      
    </div>
  );
};

export default Sidebar;
