const IconHalder = ({ Icon, style }) => {
  return (
    <>
      <div className={`text-[20px]  ${style}`}>
        <Icon />
      </div>
    </>
  );
};

export default IconHalder;
