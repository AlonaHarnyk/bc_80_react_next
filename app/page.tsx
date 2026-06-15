import Image from 'next/image';

export default function Home() {
  return (
    <>
      <p>Home</p>
      <Image src="/cat.jpg" alt="cat" width={400} height={200} />
    </>
  );
}
