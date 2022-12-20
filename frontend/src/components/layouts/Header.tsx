import { Link } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { useModalState } from "../../hooks/useModalState";
import { Drawer } from "./Drawer";
import { MenuIcon } from "../ui/icon/MenuIcon";
import { SearchIcon } from "../ui/icon/SearchIcon";
import { isDrawerOpenState, searchFormState } from "../../atom/atom";
import { Modal } from "../ui/modal/Modal";

export const Header = () => {
  const { isOpen, closeModal, openModal, setIsOpen } = useModalState();
  const setSearchState = useSetRecoilState(searchFormState);
  const [isDrawerOpen, setIsDrawerOpen] = useRecoilState(isDrawerOpenState);

  return (
    <div>
      <div>
        <div className="w-full px-6 py-6 m-0 bg-gray-400 shadow-xl opacity-100">
          <div className="flex justify-between">
            <div className="flex items-center ">
              <div
                onClick={() => {
                  setIsDrawerOpen(true);
                }}
                className="text-white cursor-pointer"
              >
                <MenuIcon />
              </div>
              <Drawer />
              <Link
                to={"/"}
                className="pb-1 ml-3 text-xl font-bold text-center text-white hover:text-gray-200"
              >
                classes
              </Link>
            </div>

            {/* {window.location.pathname === "/" ? (
              <div></div>
            ) : ( */}
            <div className="flex items-center gap-4">
              <div>
                <Modal
                  isOpen={isOpen}
                  setIsOpen={setIsOpen}
                  closeModal={closeModal}
                  openModal={openModal}
                />
              </div>
              {/* <Modal /> */}
              <div className="flex items-center justify-between ">
                <div className="absolute mb-0 ml-1.5">
                  <SearchIcon />
                </div>
                <input
                  placeholder="Search…"
                  className="w-64 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-md px-9 focus:outline-none focus:border-gray-300 focus:ring-1 focus:ring-gray-300"
                  onChange={(e) => setSearchState(e.target.value)}
                />
              </div>
            </div>
            {/* )} */}
          </div>
        </div>
      </div>
    </div>
  );
};
