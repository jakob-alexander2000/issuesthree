import Feed from "@components/Feed";

const Home = () => {
  return (
   <section className="w-full flex center flex-col">
    <h1 className="head_text text-center">ISSU3S
    <br className="max-md:hidden" />
    <span className="orange_gradient text-center">Discover</span></h1>
    <p className="desc text-center">With ISSUES, anyone can start a publication that combines a personal website, blog, and email newsletter or podcast. It's quick and simple,</p>


   <Feed />

   </section>
  )
}

export default Home
