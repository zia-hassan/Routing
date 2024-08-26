import Link from 'next/link';

const Profilesidebar = () => {
  return (
    <div className="bg-black text-white h-full p-8 space-y-6">
      <div className="text-2xl mb-8"></div>
      <li><Link href="/profile/parallel_routes">Parallel Routes</Link></li>
      <li><Link href="/profile/intercepting_routes">Intercepting Routes</Link></li>
      
    </div>
  );
};

export default Profilesidebar;
