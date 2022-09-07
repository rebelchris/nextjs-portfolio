import Head from 'next/head';
import Image from 'next/image';
import Article from '../components/article';
import TitleLinkSection from '../components/titleLinkSection';
import Work from '../components/work';

export default function Home() {
  return (
    <>
      <div className='flex py-12 items-center container mx-auto'>
        <div className='flex-1'>
          <h1 className='text-2xl font-bold mb-4'>
            Hi, I'm John!
            <br />
            Creative Technologist
          </h1>
          <p className='mb-4'>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <a
            href='#'
            className='inline-block bg-pink-500 text-lg rounded-lg px-6 py-3 text-white'
          >
            Check my Work
          </a>
        </div>
        <div className='m-5 inline-block before:block before:absolute before:-left-2 before:-bottom-2 before:bg-pink-500 relative before:block before:absolute before:inset-0 before:bg-pink-500 relative z-0 before:rounded-full'>
          <img
            src='https://via.placeholder.com/240'
            width='240'
            height='240'
            alt='Image of John'
            className='z-10 relative rounded-full'
          />
        </div>
      </div>
      <div className='bg-blue-100'>
        <div className='container mx-auto py-12'>
          <TitleLinkSection title={'Recent Posts'} />
          <div className='grid grid-cols-2 gap-6'>
            <Article className='rounded-lg' />
            <Article className='rounded-lg' />
          </div>
        </div>
      </div>
      <div className='container mx-auto py-12'>
        <TitleLinkSection title={'Featured Work'} />
        <Work />
        <Work />
      </div>
    </>
  );
}
