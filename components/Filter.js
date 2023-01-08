import React from 'react';
import { Menu } from '@headlessui/react';
import DropdownLink from './DropdownLink';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

export default function Filter() {
  return (
    <div className="grid">
      <Menu>
        <Menu.Button>
          Shoes
          <ChevronDownIcon className="w-4 text-center relative inline-block"></ChevronDownIcon>
        </Menu.Button>
        <Menu.Items>
          <Menu.Item>
            <DropdownLink className="dropdown-link" href="/cart">
              Addidas
            </DropdownLink>
          </Menu.Item>
          <Menu.Item>
            <DropdownLink className="dropdown-link" href="/cart">
              Nike
            </DropdownLink>
          </Menu.Item>
        </Menu.Items>
      </Menu>
    </div>
  );
}
