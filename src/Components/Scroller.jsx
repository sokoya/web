const Scroller = ({ children }) => (
  <div className="flex overflow-x-auto space-x-5 p-5 md:justify-center">
    {children}
  </div>
);

export default Scroller;
