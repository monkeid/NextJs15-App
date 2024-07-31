import CourseCard from '../components/CourseCard';
import coursesData from '../data/courses.json';
import styles from '../styles/Courses.module.css';

const Courses = () => {
  return (
    <div className={styles.container}>
      <h1>Our Courses</h1>
      <div className={styles.grid}>
        {coursesData.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
