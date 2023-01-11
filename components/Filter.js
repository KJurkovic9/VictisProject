import React from 'react';
import { Menu } from '@headlessui/react';
import DropdownLink from './DropdownLink';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

export default function Filter() {
  return (
    <div className="filter-div flex flex-row py-5 pb-10 mb-4 border-b">
      <Menu>
        <Menu.Button className="ml-5 border border-black w-24 bg-black text-white focus:bg-white focus:text-black">
          All
        </Menu.Button>
      </Menu>

      <Menu>
        <Menu.Button className="border border-black w-24 flex ml-10 pl-2">
          Shoes
          <ChevronDownIcon className="w-4 m-auto my-1.5"></ChevronDownIcon>
        </Menu.Button>
        <Menu.Items className="absolute w-32  left-[9.2%] top-[18%] bg-[#f8f9fa] border border-gray-700 rounded-sm ">
          <Menu.Item>
            <DropdownLink className="dropdown-link" href="/">
              Addidas
            </DropdownLink>
          </Menu.Item>
          <Menu.Item>
            <DropdownLink className="dropdown-link" href="/">
              Nike
            </DropdownLink>
          </Menu.Item>
        </Menu.Items>
      </Menu>

      <Menu>
        <Menu.Button className="border border-black w-24 flex justify-center ml-10">
          Jerseys
        </Menu.Button>
      </Menu>

      <Menu>
        <Menu.Button className="border border-black w-24 flex justify-center ml-10 pl-2">
          T-Shirts
          <ChevronDownIcon className="w-4 m-auto my-1.5"></ChevronDownIcon>
        </Menu.Button>
        <Menu.Items className="absolute w-32  left-[27.1%] top-[18%] bg-[#f8f9fa] border border-gray-700 rounded-sm ">
          <Menu.Item>
            <DropdownLink className="dropdown-link" href="/">
              Hugo Boss
            </DropdownLink>
          </Menu.Item>
        </Menu.Items>
      </Menu>
    </div>
  );
}
