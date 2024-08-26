import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-black text-white p-4 flex justify-end">
      <div className="space-x-8">
        <Link href="/">Home</Link>
        <Link href="/Blogs/blogs">Blogs</Link>
        <Link href="/profile">Profile</Link>
      </div>
    </nav>
  );
};

export default Navbar;
