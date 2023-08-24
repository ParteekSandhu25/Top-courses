import React from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

const Card = (props) => {
  let course = props.course;
  let likedCourses = props.likedCourses;
  let setLikedCourses = props.setLikedCourses;
  // let displayLikedCourses = props.displayLikedCourses;
  // let setDisplayLikedCourses = props.setDisplayLikedCourses;

  function clickHandler() {
    //Logic
    if (likedCourses.includes(course.id)) {
      // agar phele se course liked hai to
      setLikedCourses((prev) => prev.filter((cid) => cid !== course.id));
      toast.warning("Like Removed");
    } else {
      // agar phele se liked nahi hai to...
      //insert karna h ye course liked  courses me
      if (likedCourses.length === 0) {
        setLikedCourses([course.id]);
      } else {
        // lenght is non-empty
        setLikedCourses((prev) => [...prev, course.id]);
      }
      toast.success("Liked Successfully");
    }
    // console.log("\n");
    // likedCourses.forEach((element) => {
    //   console.log(element);
    // });
  }

  return (
    <div className="w-[300px] bg-bgDark rounded-md bg-opacity-80 overflow-hidden">
      <div className="relative ">
        <img src={course.image.url} alt={course.image.alt} />

        <div className="w-[40px] h-[40px] rounded-full bg-white absolute bottom-[-20px] right-2 grid place-items-center">
          <button onClick={clickHandler}>
            {likedCourses.includes(course.id) ? (
              <FcLike fontSize="1.75rem" />
            ) : (
              <FcLikePlaceholder fontSize="1.75rem" />
            )}
          </button>
        </div>
      </div>

      <div className="p-4">
        <p className="text-white font-semibold text-lg leading-6">
          {course.title}
        </p>

        <p className="text-white mt-2">
          {course.description.length > 100
            ? course.description.substr(0, 100)
            : course.description}
          ...
        </p>
      </div>
    </div>
  );
};

export default Card;
