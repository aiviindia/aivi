import React from "react";
import HeroSection from "./Components/HeroSection";
import Leaves from "../Home/Assets/LeavesBG.png";
import ImageCarousel from "./Components/ImageCrousal";
import SmallCard from "./Components/SmallCard";
import OfferingsSection from "./Components/OfferingsSection";
import PartnersMarquee from "./Components/PartnersMarquee";
import SuccessCard from "./Components/SuccessCard";

const Home = () => {
  const images = [
    {
      id: "1",
      url: "",
      text: "",
      title: "",
    },
  ];
  const reviews = [
    {
      title: "Abhay Pratap Singh",
      image: "https://picsum.photos/200",
      ratings: "5",
      content:
        "Working with Regreenation has really helped us in many ways. We are able to reduce our waste production by 50% and save more on other resources.",
    },
    {
      title: "Nisha Sharma",
      image: "https://picsum.photos/200",
      ratings: "4",
      content:
        "The consultancy services provided by Regreenation were top-notch. They guided us through the process of implementing sustainable practices effectively.",
    },
    {
      title: "Ravi Kumar",
      image: "https://picsum.photos/200",
      ratings: "5",
      content:
        "Regreenation Labs' advanced technology solutions have transformed our business operations, making them more efficient and eco-friendly.",
    },
  ];

  return (
    <div className="bg-black  flex flex-col">
      <HeroSection />
      <div className="flex justify-center py-10 items-center font-bold text-5xl text-[#39B54A]">
        About Us
      </div>
      <div className='w-full bg-[url("./assets/LeavesBG.png")] rounded-tl-[150px] rounded-br-[150px] rounded-xl'>
        <div className="flex flex-col px-20 py-10  text-white text-xl space-y-6 ">
          <div className="space-y-6 backdrop-blur-lg py-4 px-4 rounded-xl">
            <h1 className="text-2xl">
              Welcome to Regreenation Labs, where innovation meets
              sustainability
            </h1>
            <p>
              At Regreenation Labs, we are committed to creating a better world
              through cutting-edge technology solutions designed with the planet
              in mind. Our mission is to empower businesses and communities to
              embrace sustainability by integrating environmentally friendly
              practices and technologies into everyday operations.
            </p>
            <p>
              From developing state-of-the-art renewable energy systems to
              designing eco-friendly infrastructure, Regreenation Labs is at the
              forefront of the sustainability movement. Our solutions are
              tailored to meet the unique needs of each client, ensuring that
              sustainability is seamlessly woven into the fabric of their
              operations.
            </p>
            <p>
              We are passionate about fostering a culture of sustainability and
              innovation. Through our consultancy services, we provide strategic
              insights, cutting-edge technology, and hands-on support to help
              businesses transition to greener practices. Whether you are a
              startup looking to build a sustainable foundation or an
              established company aiming to enhance your environmental
              performance, Regreenation Labs is your trusted partner in the
              quest for sustainability.
            </p>
            <p>
              Join us in our mission to create a sustainable future. Together,
              we can innovate, inspire, and implement solutions that not only
              protect our planet but also create a thriving, sustainable economy
              for generations to come. Explore the endless possibilities with
              Regreenation Labs – where technology meets sustainability.
            </p>
          </div>
        </div>
      </div>
      <div>
        <p className="flex justify-center py-12 items-center font-bold text-5xl text-[#39B54A]">
          Why us?
        </p>
        <div className="flex items-center justify-center py-12 gap-[8rem]">
          <SmallCard
            image={"https://lorempic.com/400/400"}
            number={"10,000+"}
            title={"tree plantation"}
          />
          <SmallCard
            image={"https://lorempic.com/400/400"}
            number={"10,000+"}
            title={"tree plantation"}
          />
          <SmallCard
            image={"https://lorempic.com/400/400"}
            number={"10,000+"}
            title={"tree plantation"}
          />
        </div>
      </div>

      <div>
        <p className="flex justify-center py-12 items-center font-bold text-5xl text-[#39B54A]">
          Services we offer
        </p>
        <div className="flex justify-center ">
          <OfferingsSection />
        </div>
      </div>
      <div>
        <p className="flex justify-center py-12 items-center font-bold text-5xl text-[#39B54A]">
          Success stories
        </p>
        <div className="flex  justify-center gap-16 py-5">
          {reviews.map((item, index) => (
            <div key={index}>
              <SuccessCard
                title={item.title}
                image={item.image}
                ratings={item.ratings}
                content={item.content}
              />
            </div>
          ))}
        </div>
      </div>
      <div>
        <p className="flex justify-center py-12 items-center font-bold text-5xl text-[#39B54A]">
          Our trusted partners and Clients
        </p>
        <div>
          <PartnersMarquee />
        </div>
      </div>
    </div>
  );
};

export default Home;
