'use client';

import Step from '@/app/subscribe/components/Step';
import React from 'react';
import {usePathname} from 'next/navigation';

interface IProps {
  children: React.ReactNode;
}
const Layout = ({children}: IProps) => {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <div className='absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white py-4 pl-4 lg:h-[600px] lg:w-[875px]'>
      <div className='relative'>
        <img src='/images/bg-sidebar-desktop.svg' alt='' />
        <div className='absolute left-[30px] top-[40px]'>
          <Step
            number={1}
            text='your info'
            active={pathname.includes('your-info')}
          />
          <Step
            number={2}
            text='select plan'
            active={pathname.includes('select-plan')}
          />
        </div>
      </div>
      <div className='mx-auto w-[390px] pb-4 pt-10'>{children}</div>
    </div>
  );
};

export default Layout;
