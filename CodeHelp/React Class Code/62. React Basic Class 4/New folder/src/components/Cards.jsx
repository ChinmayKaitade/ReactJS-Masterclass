import React from "react";
import Card from "./Card";

const Cards = ({ courses }) => {
  let allCourses = [];

  // returns you a list of all courses received from the API response
  const getCourses = () => {
    Object.values(courses).forEach((courseCategory) => {
      courseCategory.forEach((course) => {
        allCourses.push(course);
      });
    });
    return allCourses;
  };

  return (
    <div>
      {getCourses().map((course) => {
        <Card course={course} />;
      })}
    </div>
  );
};

export default Cards;
