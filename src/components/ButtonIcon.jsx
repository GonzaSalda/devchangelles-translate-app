// eslint-disable-next-line react/prop-types
const ButtonIcon = ({alt = 'svg', img, onClick}) => {
  return (
    <button
      className="border-2 w-9 h-9 grid place-items-center rounded-lg border-graySecondary hover:bg-lightSecondary transition-all duration-300 ease-in-out"
      type="button"
      onClick={onClick}
    >
        <img src={img} alt={alt} />
    </button>
  );
};

export default ButtonIcon;
