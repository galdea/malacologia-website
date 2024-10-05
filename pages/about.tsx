import Head from 'next/head';

const About = () => {
  return (
    <>
      <Head>
        <title>About Us | My App</title>
        <meta name="description" content="Learn more about our company and values." />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg mb-6">
          Welcome to <strong>My App</strong>, where we are committed to delivering the best services to our customers. Our team of
          professionals is dedicated to ensuring a seamless experience, whether you're exploring our website or using our
          services.
        </p>
        <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
        <p className="text-lg mb-6">
          Our mission is to provide high-quality products and services that cater to the needs of our clients. We value
          integrity, innovation, and customer satisfaction above all else.
        </p>
        <h2 className="text-2xl font-semibold mb-3">Our Story</h2>
        <p className="text-lg mb-6">
          Founded in [Year], <strong>My App</strong> started with a simple idea: to create a platform that empowers people and provides
          them with the tools they need to succeed. Over the years, we have grown and evolved, but our commitment to
          excellence has remained the same.
        </p>
        <h2 className="text-2xl font-semibold mb-3">Meet the Team</h2>
        <p className="text-lg mb-6">
          Our team consists of talented individuals from diverse backgrounds, all working together to make sure our clients
          receive top-notch service. We believe in the power of collaboration and innovation.
        </p>
        <p className="text-lg">
          Thank you for taking the time to learn more about us. If you have any questions or would like to get in touch, feel
          free to <a href="/contact" className="text-blue-600 underline">contact us</a>.
        </p>
      </div>
    </>
  );
};

export default About;
