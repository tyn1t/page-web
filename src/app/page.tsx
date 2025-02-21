import { Hero } from "@/components/layout/Hero/Hero";
import { HomeMenu } from "@/components/layout/HomeMenu";
import { SectionHeaer } from "@/components/layout/SectionHeader/SectionHeader";

export default function Home() {
  return (
    <>
      <Hero/>
      <HomeMenu/>
      <section className="text-center my-16">
        <SectionHeaer
          subHeader={"Our stroy"}
          mainHeader={"About us"}
        />
        <div className=" text-gray-500 max-w-2xl mx-auto mt-4 flex-col gap-4">
          <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas cupiditate incidunt doloribus error dolor illum officia, vel cumque nostrum modi nihil facilis animi.
               Nesciunt tenetur vitae officia amet nulla hic?
          </p>
          <p>
            At, dolore! Voluptatibus doloremque, velit consectetur 
            dolore, laborum magnam reprehenderit molestiae architecto
            facere eius diandae eos fugiat natus magni dolor enim a.
          </p>
        </div>
      </section>
      <section className="text-center my-8">
      <SectionHeaer
          subHeader={"Don\'t hesitate"}
          mainHeader={"Contact us"}
        />
        <div className="mt-8">
          <a 
            className="text-4xl mt-8"
            href="tel:+92992192528">
              55 92 9-9219-2528
          </a>
        </div>
      </section>
    </>
  )
}
