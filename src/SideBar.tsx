export function SideBar() {
  // TODO Fix width
  // TODO Make Accordion?
  return (
    <div className="absolute top-0 left-0 h-full p-0 w-96 bg-white overflow-auto flex">
      <div className="h-20 fixed w-96 bg-sky-100" />
      <div className="pt-20 px-4">
        <div className="block">
          <h3 className="font-bold text-xl underline">About</h3>
          <p>
            Welcome to our Chicago-based bicycle crash tracker website! We are a platform dedicated to promoting bicycle
            safety and advocating for the development of intermodal infrastructure in the city of Chicago. Bicycling is
            an increasingly popular mode of transportation in urban areas, and as more people take to two wheels, it is
            crucial that we prioritize their safety. <br />
            <br /> Unfortunately, accidents involving bicycles can and do happen, and when they do, it is essential to
            track them in order to understand the causes and develop effective solutions. Our website aspires to serve
            as a central hub for information about bicycle crashes in Chicago. By compiling data from a variety of
            sources, including police reports, news articles, and community input, we aim to provide the most
            comprehensive and accurate picture of the state of bicycle safety in the city. <br />
            <br /> But we are not just about tracking accidents; we are also committed to advocating for changes that
            will make Chicago a safer and more bike-friendly city. This includes promoting the development of intermodal
            infrastructure to benefit pedestrians and cyclists, such as bike lanes, protected intersections, and
            multi-use paths, as well as educating the public about the importance of safe cycling practices. We believe
            that by working together, we can make Chicago a safer and more enjoyable place to ride a bicycle. Whether
            you are a seasoned cyclist or just getting started, we invite you to join us in our mission to promote
            bicycle safety and advocate for intermodal infrastructure.
            <br />
            <br />
          </p>
        </div>
        <div>
          <h3 className="font-bold text-xl underline">Filters</h3>
          <p>Coming soon...</p>

          {/* <p>&#42;Results limited to the 100 most recent accidents</p>
          <form>
            <input list="browsers" name="browser" />
            <datalist id="browsers">
              <option value="Internet Explorer" />
              <option value="Firefox" />
              <option value="Chrome" />
              <option value="Opera" />
              <option value="Safari" />
            </datalist>
            <input type="submit" />
          </form> */}
          <br />
        </div>
        <div>
          <h3 className="font-bold text-xl underline">Analytics</h3>
          <p>Coming soon...</p>
          <br />
        </div>
      </div>
    </div>
  );
}