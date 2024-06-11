interface IProps {
  number: number;
  text: string;
  active: boolean;
}

const Step = ({number, text, active}: IProps) => {
  return (
    <div className='flex items-center'>
      <div
        className={`mr-4 flex h-[36px] w-[36px] items-center justify-center rounded-full border  ${
          active ? 'border-cyan-200 bg-cyan-200 text-black' : 'text-white'
        }`}
      >
        {number}
      </div>
      <div className='uppercase text-white'>
        <p className='text-xs font-[300] leading-none text-gray-300 '>
          Step {number}
        </p>
        <p className=' text-sm font-bold'>{text}</p>
      </div>
    </div>
  );
};

export default Step;
