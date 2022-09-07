export default function TitleLinkSection({ title }) {
  return (
    <div className='flex justify-between items-center mb-8'>
      <h2 className='text-xl font-bold'>{title}</h2>
      <a className='text-pink-500 font-bold' href='#'>
        View all
      </a>
    </div>
  );
}
