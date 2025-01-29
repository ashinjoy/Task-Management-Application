import React, { FC } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
interface IButtonProps {
  text: string;
  color?: string;
  icon?: boolean;
  textColor?: string;
  position?: string;
  setState?: React.Dispatch<React.SetStateAction<boolean>>;
  state?: boolean;
}

export const Button: FC<IButtonProps> = ({
  text,
  color,
  icon,
  textColor,
  position,
  state,
  setState,
}) => {
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    if (target.id === text) {
      setState(!state);
    }
  };
  return (
    <>
      <button
        type="submit"
        id={text}
        className={`${color} p-2 w-[6rem] md:w-[9rem] rounded-full text- flex justify-center items-center border-2 stroke-[#000000] gap-2 ${textColor} ${position}`}
        onClick={handleClick}
      >
        <span className="font-semibold text-xs">{text}</span>
        {icon && <RiArrowDropDownLine />}
      </button>
    </>
  );
};
