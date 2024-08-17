const Footer = () => {
  return (
    <div>
      (
      <footer className="bg-black text-white py-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4">
          <div>
            <h2 className="text-xl font-semibold">Abstract</h2>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Press
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Resources</h2>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Guides
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Tutorials
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  API Docs
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Community</h2>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Events
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Forum
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Slack
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Support
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Company</h2>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p>&copy; 2024 Your Company Name</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
