import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { filterTasks } from "../../services/tasks/taskActions";

interface IMenu {
  items?: string[];
}

export const Menu: FC<IMenu> = ({ items }) => {
  const dispatch = useAppDispatch()
  const {userData} = useAppSelector((state)=>state.user)
  const handleCategory = (e:React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement
      dispatch(filterTasks({uid:userData?.uid,category:target?.id}))
  };
  
  return (
    <>
      <div className="absolute mt-[3rem] ml-[3rem]  w-[9rem] bg-[#FFF9F9] z-50 flex flex-col gap-2 p-2 border-2 rounded-xl min-h-[5rem] justify-center hover:cursor-pointer">
        {items &&
          items.map((item) => {
            return (
              <span className="font-semibold text-xs" id={item} onClick={handleCategory}>
                {item}
              </span>
            );
          })}
      </div>
    </>
  );
};
