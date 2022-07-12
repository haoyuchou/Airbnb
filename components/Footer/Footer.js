const Footer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 bg-gray-100 gap-y-10 px-32 py-16">
      <div className="space-y-4 text-xs text-gray-900">
        <h5 className="font-bold">ABOUT</h5>
        <p>How Airbnb works</p>
        <p>Newsroom</p>
        <p>Investers</p>
      </div>
      <div className="space-y-4 text-xs text-gray-900">
        <h5 className="font-bold">COMMUNITY</h5>
        <p>Accessibility</p>
        <p>This is an Airbnb Clone</p>
        <p>Presents</p>
      </div>
      <div className="space-y-4 text-xs text-gray-900">
        <h5 className="font-bold">SUPPORT</h5>
        <p>Help Center</p>
        <p>Trust & Safety</p>
        <p>Hi, I'm Thomas</p>
      </div>
    </div>
  );
};

export default Footer;
