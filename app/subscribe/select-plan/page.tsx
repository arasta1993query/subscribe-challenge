'use client';

import Button from '@/app/components/inputs/Button';
import {useRouter} from 'next/navigation';

const SelectPlan = () => {
  const router = useRouter();

  return (
    <div className='flex h-full  flex-col'>
      <h1 className='mb-2 text-2xl font-bold'>Select your plan</h1>
      <p className='text-sm font-[300] text-gray-400'>
        You have the option of monthly or yearly billing
      </p>
      <form className='mt-8 flex grow flex-col justify-between '>
        <div className='flex gap-x-3'>
          <label htmlFor='arcade' className='shrink-0 grow'>
            <input
              type='radio'
              className='hidden appearance-none'
              id='arcade'
              name='plan'
            />
            <div className=' customSelect block cursor-pointer rounded-lg border border-blue-800 px-2 py-4'>
              <img src='/images/icon-arcade.svg' alt='' className='mb-16' />
              <p>Arcade</p>
              <p className='text-sm font-[300] text-gray-400'>$9/mo</p>
            </div>
          </label>
          <label htmlFor='advanced' className='shrink-0 grow'>
            <input
              type='radio'
              className='hidden appearance-none'
              id='advanced'
              name='plan'
            />
            <div className=' customSelect block cursor-pointer rounded-lg border border-blue-800 px-2 py-4'>
              <img src='/images/icon-arcade.svg' alt='' className='mb-16' />
              <p>Arcade</p>
              <p className='text-sm font-[300] text-gray-400'>$9/mo</p>
            </div>
          </label>
          <label htmlFor='pro' className='shrink-0 grow'>
            <input
              type='radio'
              className='hidden appearance-none'
              id='pro'
              name='plan'
            />
            <div className=' customSelect block cursor-pointer rounded-lg border border-blue-800 px-2 py-4'>
              <img src='/images/icon-arcade.svg' alt='' className='mb-16' />
              <p>Arcade</p>
              <p className='text-sm font-[300] text-gray-400'>$9/mo</p>
            </div>
          </label>
        </div>
        <div className='flex justify-between'>
          <Button
            className='bg-transparent text-blue-950'
            onClick={() => router.back()}
          >
            Go Back
          </Button>
          <Button onClick={() => router.push('/subscribe/your-info')}>
            Next Step
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SelectPlan;
