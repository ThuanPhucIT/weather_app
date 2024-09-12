const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="text-sm">
            <p>&copy; 2024 My Website. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/thuan.lephuc.35"
              className="hover:underline"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
