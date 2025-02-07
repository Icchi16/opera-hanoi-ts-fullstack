interface TitleProps {
  children: React.ReactNode;
}

const Title: React.FC<TitleProps> = ({ children }) => {
  return (
    <div className="w-full flex justify-center *:text-7xl text-white font-[family-name:var(--title)] mt-5 mb-12">
      <div className="relative w-fit px-5 py-8 font-semibold tracking-wider">
        {children}
        <span className="absolute bottom-0 h-[3px] w-[218px] bg-primary left-1/2 -translate-x-1/2"></span>
      </div>
    </div>
  );
};

export default Title;
