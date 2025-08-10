import { useParams } from 'react-router-dom';

const allCourses = [
  { id: 1, Title: 'C', slug: 'c' },
  { id: 2, Title: 'C++', slug: 'cpp' },
  { id: 3, Title: 'JavaScript', slug: 'javascript' },
  { id: 4, Title: 'Python', slug: 'python' },
  { id: 5, Title: 'Java', slug: 'java' },
  { id: 6, Title: 'HTML', slug: 'html' },
  { id: 7, Title: 'CSS', slug: 'css' },
  { id: 8, Title: 'MERN', slug: 'mern' },
];


function CourseDetail() {
  const { courseName } = useParams();

  const course = allCourses.find(c => c.Title.toLowerCase() === courseName.toLowerCase());

//   if (!course) {
//     return <h2>Course not found</h2>;
//   }

  return (
    <div>
      <h1>{course.Title} Course Details</h1>
    </div>
  );
}

export default CourseDetail;
