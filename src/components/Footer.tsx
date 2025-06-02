'use client'

function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12">
    <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
    <div>
      <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
      <p className="mb-4">
Tech Ignite is a student-led tech club dedicated to empowering university students through hands-on learning in coding, robotics, and emerging technologies. We create a collaborative space where curiosity meets innovation—igniting passion, skills, and future-ready minds.
      </p>
    </div>
    <div>
      <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
      <ul>
        <li>
          <a
            href="#"
            className="hover:text-white transition-colors duration-300"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#"
            className="hover:text-white transition-colors duration-300"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="/courses"
            className="hover:text-white transition-colors duration-300"
          >
            Courses
          </a>
        </li>
        <li>
          <a
            href="/contact"
            className="hover:text-white transition-colors duration-300"
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
    <div>
      <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
      <div className="flex space-x-4">
        <a
          href="https://www.linkedin.com/in/devraj-bharti-630664313/"
          className="hover:text-white transition-colors duration-300"
        >
          Linkedin
        </a>
        <a
          href="#"
          className="hover:text-white transition-colors duration-300"
        >
          Twitter
        </a>
        <a
          href="https://www.instagram.com/devraj_dz7/?next=%2Fdirect%2Finbox%2F&hl=en"
          className="hover:text-white transition-colors duration-300"
        >
          Instagram
        </a>
      </div>
    </div>
    <div>
      <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
      <p>New Delhi, India</p>
      <p>Delhi 10001</p>
      <p>Email: devraj732006@gmail.com</p>
      <p>Phone: +91-9319232931</p>
    </div>
    </div>
    <p className="text-center text-xs pt-8">© 2025 Tech Ignite Club. All rights reserved.</p>
</footer>
  )
}

export default Footer
