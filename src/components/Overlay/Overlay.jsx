function Overlay({ type, className }) {
  if (type && type == "warm") {
    return (
      <div className="absolute inset-0 bg-gradient-to-t from-[#126DA6] via-black-200 to-transparent opacity-50"></div>
    );
  } else {
    <div className={`absolute inset-0 bg-white opacity-50 ${className}`} />;
  }
}

export default Overlay;
