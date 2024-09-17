const CustomHeader = (props: any) => {
  const { displayName, year } = props;

  return (
    <div className="custom-header">
      <span>{displayName}</span>
      <br />
      <span>{year}</span>
    </div>
  );
};

export default CustomHeader;
