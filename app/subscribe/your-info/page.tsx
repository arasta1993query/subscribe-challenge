'use client';

import Input from '@/app/components/inputs/Input';
import {useState} from 'react';
import Button from '@/app/components/inputs/Button';
import {useRouter} from 'next/navigation';

const YourInfo = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const router = useRouter();

  return (
    <div className='flex h-full  flex-col'>
      <h1 className='mb-2 text-2xl font-bold '>Personal Info</h1>
      <p className='text-sm font-[300] text-gray-400'>
        Please provide your name, email address, and phone number.
      </p>
      <form className='mt-8 flex grow flex-col justify-between'>
        <div>
          <Input
            placeholder='Name'
            value={name}
            onChange={e => setName(e.target.value)}
            label='Name'
            className='mb-5'
          />
          <Input
            placeholder='Email Address'
            value={email}
            onChange={e => setEmail(e.target.value)}
            label='Email Address'
            className='mb-5'
          />
          <Input
            placeholder='e.g. +1 234 567 890'
            value={email}
            onChange={e => setEmail(e.target.value)}
            label='Phone Number'
            required={true}
          />
        </div>

        <div className='flex justify-end'>
          <Button onClick={() => router.push('/subscribe/select-plan')}>
            Next Step
          </Button>
        </div>
      </form>
    </div>
  );
};

export default YourInfo;
