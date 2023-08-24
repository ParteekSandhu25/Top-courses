import React, { useEffect } from "react";
import Card from "./Card";
import { useState } from "react";

const Cards = (props) => {
  // returns you  a list of all course received from api response
  let courses = props.courses;
  let category = props.category;
  const [likedCourses, setLikedCourses] = useState([]);

  useEffect(() => {
    console.log("hello");
  }, [likedCourses, courses]);

  const getCourses = () => {
    // if (category === "Liked") {
    //   courses.forEach((course) => {
    //     if (likedCourses.includes(course.id))
    //       setDisplayLikedCourses((prev) => [...prev, course]);
    //   });
    // }
    // if (category === "Liked ") {
    //   return displayLikedCourses;
    // }

    if (category === "All") {
      const allCourses = [];
      Object.values(courses).forEach((array) => {
        array.forEach((courseData) => {
          allCourses.push(courseData);
        });
      });
      return allCourses;
    } else {
      return courses[category];
    }
  };

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {getCourses().map((course) => (
        <Card
          course={course}
          likedCourses={likedCourses}
          setLikedCourses={setLikedCourses}
          key={course.id}
        ></Card>
      ))}
    </div>
  );
};

export default Cards;
