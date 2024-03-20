import Feed from "@/components/Feed";

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
      Discover & Share
      <br className='max-md:hidden' />
      <span className='orange_gradient text-center'>1Community Global Buisness Link Projects</span>
    </h1>
    <p className='desc text-center'>
      1Community Global Link for connection local business to the world.
      It time to be  discovered, create and share Community Development, Business and Projects
    </p>

    <Feed />
  </section>
);

export default Home;
