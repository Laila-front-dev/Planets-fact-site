interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="container mx-auto px-4 lg:px-0">{children}</div>;
};

export default Container;
