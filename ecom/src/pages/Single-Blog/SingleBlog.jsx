import Container from "../../components/Container";
import Img from "/src/assets/images/blogimg.jpg";
import {
  FaRegUser,
  FaCalendarAlt,
  FaComment,
  FaFacebook,
  FaTwitter,
  FaPinterest,
  FaStar,
} from "react-icons/fa";
import Customer from "../../assets/images/customer.jpg";
import Customer2 from "../../assets/images/customer2.jpg";

export default function SingleBlog() {
  return (
    <Container>
      <div className="">
        <div className="">
          <img
            src={Img}
            alt=""
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
        <div className="">
          <div className="my-5">
            <h1 className="text-3xl font-semibold text-gray-900">
              The Art of Layering: Creating Stylish and Functional Outfits
            </h1>
          </div>
          <div className="flex gap-5 my-5">
            <div className="flex">
              <FaRegUser />
              <span>by: Lorem Ipsum</span>
            </div>
            <div className="flex">
              <FaCalendarAlt />
              <span>September 2024 </span>
            </div>
            <div className="flex">
              <FaComment />
              <span>2 comments</span>
            </div>
          </div>
          <div className="my-5">
            <p className="">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga. Et harum quidem rerum
              facilis est et expedita distinctio. Nam libero tempore, cum soluta
              nobis est eligendi optio cumque nihil impedit quo minus id quod
              maxime placeat facere possimus, omnis voluptas assumenda est,
              omnis dolor repellendus. Temporibus autem quibusdam et aut
              officiis debitis aut rerum necessitatibus saepe eveniet ut et
              voluptates repudiandae sint et molestiae non recusandae.
            </p>
          </div>
        </div>
        <div className="flex justify-between border-t border-b py-10">
          <div className="">
            <h2 className="font-semibold text-xl">Tags</h2>
            <ul className="flex gap-5 mt-5">
              <li className="bg-gray-200 rounded-3xl p-2 cursor-pointer hover:bg-blue-600 hover:text-white">
                Accessories
              </li>
              <li className="bg-gray-200 rounded-3xl p-2 cursor-pointer hover:bg-blue-600 hover:text-white">
                Dress
              </li>
              <li className="bg-gray-200 rounded-3xl p-2 cursor-pointer hover:bg-blue-600 hover:text-white">
                Fashion
              </li>
              <li className="bg-gray-200 rounded-3xl p-2 cursor-pointer hover:bg-blue-600 hover:text-white">
                Men
              </li>
              <li className="bg-gray-200 rounded-3xl p-2 cursor-pointer hover:bg-blue-600 hover:text-white">
                Spring
              </li>
              <li className="bg-gray-200 rounded-3xl p-2 cursor-pointer hover:bg-blue-600 hover:text-white">
                Winter
              </li>
              <li className="bg-gray-200 rounded-3xl p-2 cursor-pointer hover:bg-blue-600 hover:text-white">
                Women
              </li>
            </ul>
          </div>
          <div className="">
            <h2 className="font-semibold text-xl">Share This Post</h2>
            <div className="flex gap-5 m-5">
              <FaFacebook className="hover:text-blue-600 cursor-pointer" />
              <FaTwitter className="hover:text-blue-300 cursor-pointer" />
              <FaPinterest className="hover:text-red-600 cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="my-10">
          <h1 className="font-semibold text-2xl mb-4">
            <span className="mr-1">2</span>Comments
          </h1>
          <div className="p-4 border-b">
            <div className="flex items-center gap-4">
              <img
                src={Customer}
                className="w-16 h-16 object-cover rounded-full"
                alt=""
              />
              <div className="">
                <h1 className="text-lg font-semibold">Lorem</h1>
                <span className="flex text-yellow-500 mt-1">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </span>
              </div>
            </div>
            <div className="mt-4 text-gray-700">
              <p>
                Ipsum dolor sit amet consectetur adipisicing elit. Aliquam nulla
                porro nesciunt commodi adipisci beatae id soluta temporibus quo!
                Nulla libero debitis quaerat hic! Quasi temporibus nam sunt
                eveniet nostrum.
              </p>
            </div>
          </div>
          <div className="p-4 border-b">
            <div className="flex items-center gap-4">
              <img
                src={Customer2}
                className="w-16 h-16 object-cover rounded-full"
                alt=""
              />
              <div className="">
                <h1 className="text-lg font-semibold">Doler</h1>
                <span className="flex text-yellow-500 mt-1">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </span>
              </div>
            </div>
            <div className="mt-4 text-gray-700">
              <p>
                Ipsum dolor sit amet consectetur adipisicing elit. Aliquam nulla
                porro nesciunt commodi adipisci beatae id soluta temporibus quo!
                Nulla libero debitis quaerat hic! Quasi temporibus nam sunt
                eveniet nostrum.
              </p>
            </div>
          </div>
        </div>

        <div className="my-10">
          <h1 className="font-semibold text-xl mb-4">Post Comment</h1>
          <div className="bg-primary p-6 rounded-lg">
            <form className="space-y-4">
              <textarea
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Write your comment..."
                rows="4"
              ></textarea>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
              />
              <input
                type="email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Email"
              />
              <button
                className=" p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                type="submit"
              >
                Post Comment
              </button>
            </form>
          </div>
        </div>
        <div className="bg-primary w-full h-72 rounded-lg mb-10 p-6 flex flex-col justify-center items-center">
          <div className="text-center mb-4">
            <h1 className="text-3xl font-semibold mb-2">Newsletter</h1>
            <p className="text-gray-700">
              Learn about our most recent news, updates, and deals by
              subscribing.
            </p>
          </div>
          <div className="w-full max-w-2xl">
            <div className="flex items-center">
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
              <button className="bg-blue-600 text-white rounded-r-lg p-3 hover:bg-white hover:text-black transition duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
