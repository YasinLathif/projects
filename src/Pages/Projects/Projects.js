import React from 'react';
import './Projects.css';
import project1 from '../../../src/assets/Portfolio management project.jpeg';
import project2 from '../../../src/assets/spark clothing shop.jpeg';
import project3 from '../../../src/assets/ecommerce shop.jpeg';
import project4 from '../../../src/assets/youtube clone project.jpeg';

const items = [
  {
    id: 1,
    title: 'PORTFOLIO MANAGEMENT',
    content: 'A stocks management website enables users to track, analyze, and manage stock portfolios, offering real-time market data and tools for investment decision-making and portfolio optimization.',
    codelink: 'https://github.com/strangervaahii/Portfolio-Management',
    framework1: 'Angular',
    framework2: 'Spring Boot',
    imageSize: 'large'
  },
  {
    id: 2,
    title: 'SPARK CLOTHING SHOP',
    content: 'Elevate your style with Spark, where fashion meets innovation. Explore curated collections, cutting-edge designs, and seamless shopping experiences, redefining your wardrobe with every click.',
    codelink: 'https://github.com/strangervaahii/spark-clothing-shop-react-app',
    framework1: 'React',
    framework2: 'CSS',
    imageSize: 'small'
  },
  {
    id: 3,
    title: 'ECOMMERCE WEBSITE',
    content: 'Your one-stop destination for online shopping. Discover a curated collection of premium products. Elevate your shopping experience, hassle-free. Welcome to our virtual store!',
    codelink: 'https://github.com/strangervaahii/ecommerce-shop',
    framework1: 'React',
    framework2: 'CSS',
    imageSize: 'extralarge'
  },
  {
    id: 4,
    title: 'YOUTUBE CLONE',
    content: 'Experience a YouTube-inspired platform with a sleek Home and Video page. Discover, watch, and engage with an array of captivating content. Your go-to destination for immersive video experiences.',
    codelink: 'https://github.com/strangervaahii/youtube-clone',
    framework1: 'HTML',
    framework2: 'CSS',
    imageSize: 'medium'
  },
];


// const Single = ({ item, imagePosition, imageUrl }) => {
//   return (
//     <div className="card mb-3" data-aos="fade-up">
//       <div className="row g-0">
//         {imagePosition === 'left' && (
//           <div className="col-md-6 project">
//             <img src={imageUrl} className="img-fluid rounded-start project-image" alt="" />
//           </div>
//         )}
//         <div className="col-md-6" data-aos="fade-up">
//           <div className="card-body">
//             <div className="card-title d-flex justify-content-center">{item.title}</div>
//             <p className="card-text" data-aos="fade-up">{item.content}</p>
//             <div className='stack'>
//               <p>{item.framework1}</p>
//               <p>{item.framework2}</p>
//             </div>
//             <div className='links'>
//               <a href={item.codelink} className='text-decoration-none text-black'>
//                 <p>Code
//                   <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-brand-github"><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg>
//                 </p>
//               </a>
//             </div>
//           </div>
//         </div>
//         {imagePosition === 'right' && (
//           <div className="col-md-6 project">
//             <img src={imageUrl} className="img-fluid rounded-start project-image" alt="" />
//           </div>
//         )}
//       </div>
//     </div>
//   )
// }

const Single = ({ item, imageUrl, imageSize }) => {
  return (
    <div className="card mb-3" data-aos="fade-up">
      <div className="row g-0">
        <div className={`col-md-6 order-md-${item.id % 2 === 0 ? 1 : 2} project`}>
          <img
            src={imageUrl}
            className={`img-fluid rounded-start project-image ${imageSize}`}
            alt="project"
          />
        </div>
        <div className={`col-md-6 order-md-${item.id % 2 === 0 ? 2 : 1}`} data-aos="fade-up">
          <div className="card-body">
            <div className="card-title d-flex justify-content-center">{item.title}</div>
            <p className="card-text" data-aos="fade-up">{item.content}</p>
            <div className='stack'>
              <p>{item.framework1}</p>
              <p>{item.framework2}</p>
            </div>
            <div className='links'>
              <a href={item.codelink} className='text-decoration-none text-black'>
                <p>Code
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-brand-github"><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg>
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



const Projects = () => {
  const projectImages = [project1, project2, project3, project4];
  return (
    <section id='projects'>
      <h1 className='portfolio'>PORTFOLIO</h1>
      <p className='portfolio-bio'>Each project is a unique piece of development 🧩</p>

      {items.map((item, index) => {
        return (
          <Single
            item={item}
            key={item.id}
            imageUrl={projectImages[index]}
            imageSize={item.imageSize}
          />
        );
      })}
    </section>
  )
}

export default Projects;