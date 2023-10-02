import style from "../styles/carousel.module.css"
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "@nextui-org/react";

const ProjectCarousel = () => {

    const carouselData = [
          {
            id: 1,
            name: 'Proyecto 1',
            price: 'free',
            description:
              'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
            image: 'https://random.imagecdn.app/350/218',
            tags: ['js', 'productivity'],
          },
          {
            id: 2,
            name: 'Tema 1',
            price: '3',
            description:
              'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
            image: 'https://random.imagecdn.app/350/218',
            tags: ['js', 'productivity'],
          },
          {
            id: 3,
            name: 'Plugin 3',
            price: '40',
            description:
              'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
            image: 'https://random.imagecdn.app/350/218',
            tags: ['js', 'productivity'],
          },
        ]
  
  return (
    <Carousel>
    {carouselData.map((project) => (
      <div key={project.id} className={style.slide}>
        <img src={project.image} alt={project.name} style={{ maxWidth: '100%', maxHeight: '300px' }} />
        <div className={style.overlay}>
          <h2 className={style.title}>{project.name}</h2>
          <p className={style.description}>{project.description}</p>
          <div>
        <Link href={`/project/detail/${project.id}`}>
          <button className={style.buttonsCorousel}>Visitar</button>
        </Link>
          </div>
        </div>
      </div>
    ))}
  </Carousel>
  )
};

export default ProjectCarousel;

