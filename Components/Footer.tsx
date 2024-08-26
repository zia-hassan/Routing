import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black text-white p-8">
        <div className="flex justify-between">
          <div>
            <h3 className="text-lg font-semibold">Logo</h3>
          </div>
          <div className="flex space-x-8">
            <div>
              <h3 className="text-lg font-semibold">About Us</h3>
              <ul>
                <li>Blog</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Profile</h3>
              <ul>
                <li>Blog</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
