import styles from '../styles/CourseCard.module.css';

interface CourseCardProps {
  course: {
    id: number;
    title: string;
    description: string;
    image: string;
  };
}

const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <div className={styles.card}>
      <img src={course.image} alt={course.title} className={styles.image} />
      <h3>{course.title}</h3>
      <p>{course.description}</p>
    </div>
  );
};

export default CourseCard;
