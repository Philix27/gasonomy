'use client';

import React from 'react';
import { TextH, TextP } from '@/comps';
import { AppStores } from '@/lib';
import { SearchInput } from '../_comps';
import { chainRegistry } from '@/data';
import { FaGithub, FaYoutube } from 'react-icons/fa';
import { IoBrowsers } from 'react-icons/io5';


export default function Page() {
  const store = AppStores.useSettings();

  const getList = () => {
    if (!store.searchValue.trim()) {
      return chainRegistry;
    }

    const arr = chainRegistry.filter((val) =>
      val.name.trim().toLowerCase().includes(store.searchValue.trim().toLowerCase())
    );

    if (!arr.length) {
      return chainRegistry;
    }
    return arr;
  };

  return (
    <>
      <div className={'w-full h-full py-4 px-4 flex flex-col items-center overflow-y-hidden'}>
        {/* <div className="w-[40%] mb-4"> */}
        {/* <SearchInput className="w-[40%] mb-4" /> */}

        <div className="grid grid-cols-4 gap-2 w-full overflow-y-scroll scroll-smooth">
          {getList()
            .concat(getList(), getList())
            .map((val, i) => (
              <div
                key={i}
                className="w-full hover:bg-accent p-3 flex flex-col border shadow-md"
                onClick={() => {
                  store.update({ infoTabOpen: true, drawerIsOpen: false });
                }}
              >
                <div className="flex gap-x-4 items-center justify-between mb-4 border-b pb-2">
                  <img src={val.logo} className="size-[30px] rounded-full" />
                  <TextP className=" font-bold text-xs">{val.name}</TextP>
                </div>
                <TextP>{val.shortIntro}</TextP>
                <TextP>{val.ecosystem}</TextP>
                <TextP>{val.taxon}</TextP>
                <div className="flex space-x-2 mt-2">
                  <FaGithub size={18} className="text-slate-200" />
                  <FaYoutube size={18} className="text-red-500" />
                  <IoBrowsers size={18} className="text-blue-500" />
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
