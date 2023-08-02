import Feed from "@components/Feed";

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
      ISSUES3
      <br className='max-md:hidden' />
      <span className='orange_gradient text-center'> Write, Share, Discover</span>
    </h1>
    <p className='desc text-center'>
    With ISSUES, anyone can start a publication that combines a personal website, blog, and email newsletter or podcast. It's quick and simple
    </p>

    <Feed />
  </section>
);

export default Home;