import React from 'react';

const About = () => {
  return (
    <div>
      <section
        className="about bg-cover bg-center bg-no-repeat h-screen flex items-center text-white p-8"
        style={{ backgroundImage: "url('/about.png')" }}
      >
        <div className="about-content max-w-md text-left bg-black bg-opacity-60 p-8 rounded-lg">
          <h2 className="text-3xl font-bold">About Us</h2>
          <p className="pt-4">
            At our flower shop, we offer an exquisite variety of beautifully crafted flower bouquets to suit every occasion. Whether you’re celebrating a birthday, anniversary, or simply want to brighten someone’s day, our stunning arrangements are designed to leave a lasting impression. We pride ourselves on providing reliable delivery services across all areas of Karachi, ensuring your chosen bouquet reaches your loved ones within a day. Experience the joy of gifting fresh, vibrant flowers with our exceptional service and attention to detail.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
