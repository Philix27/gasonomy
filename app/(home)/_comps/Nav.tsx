'use client';

import Link from 'next/link';

import { Drawer, TextH } from '@/comps';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useRouter } from 'next/navigation';
import { AppStores } from '@/lib';
import { GoSidebarCollapse, GoSidebarExpand } from 'react-icons/go';
import { BiFilter, BiSearch, BiSort } from 'react-icons/bi';
import { LuFilterX, LuMoreHorizontal } from 'react-icons/lu';
import { SearchInput } from '@/(core)/_comps';

export interface MainNavProps {
  title: string;
}

export function NavbarMarketing(props: MainNavProps) {
  const router = useRouter();
  const store = AppStores.useSettings();

  return (
    // <header className="bg-background  w-full border-b">
    <header className="bg-background sticky top-0 z-20 w-full border-b">
      <div className="container flex h-[50px] md:h-[50px] items-center justify-between">
        <div className="flex gap-6 md:gap-10 ">
          <Link href="/" className="items-center space-x-2">
            <TextH v="h4" className={'text-primary font-extrabold tracking-wider'}>
              {props.title}
            </TextH>
          </Link>
        </div>
        <SearchInput className="w-[35%]" />
        <div className="flex items-center justify-center md:gap-x-4">
          <BiSort />
          <BiSearch />
          <LuMoreHorizontal />
          {store.drawerIsOpen ? (
            <AiOutlineClose
              size={18}
              className=" text-primary"
              onClick={() => {
                store.update({ drawerIsOpen: false });
              }}
            />
          ) : (
            <AiOutlineMenu
              size={18}
              className="text-primary"
              onClick={() => {
                store.update({ drawerIsOpen: true });
              }}
            />
          )}
          {store.infoTabOpen ? (
            <GoSidebarCollapse
              size={18}
              className="text-primary"
              onClick={() => {
                store.update({ infoTabOpen: false });
              }}
            />
          ) : (
            <GoSidebarExpand
              size={18}
              className="text-primary"
              onClick={() => {
                store.update({ infoTabOpen: true });
              }}
            />
          )}

          {store.sidebarOpen ? (
            <LuFilterX
              size={18}
              className="text-primary"
              onClick={() => {
                store.update({ sidebarOpen: false });
              }}
            />
          ) : (
            <BiFilter
              size={18}
              className="text-primary"
              onClick={() => {
                store.update({ sidebarOpen: true });
              }}
            />
          )}
        </div>
      </div>
    </header>
  );
}
