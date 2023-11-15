interface IProps {
  width?: number;
  height?: number;
}

const Placeholder: React.FC<IProps> = ({ width = 0, height = 0 }) => {
  return (
    <div
      style={{
        width,
        height,
      }}
    />
  );
};

export default Placeholder;
