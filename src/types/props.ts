import type { Dispatch, SetStateAction } from "react";

export type HeaderProps = {
  setIsSideBarOpen: Dispatch<SetStateAction<boolean>>;
};

export type SideBarProps = {
  isSideBarOpen: boolean;
  setIsSideBarOpen: Dispatch<SetStateAction<boolean>>;
};
