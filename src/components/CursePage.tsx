import { motion } from "framer-motion";

const animations = [
  { x: -100, y: 0, duration: 1.5 }, 
  { x: 0, y: -100, duration: 1.5 }, 
  { x: 100, y: 0, duration: 1.5 },  
  { x: -100, y: 0, duration: 1.5 }, 
  { x: 0, y: 100, duration: 1.5 },  
  { x: 100, y: 0, duration: 1.5 },  
];

const easing = [0.25, 0.1, 0.25, 1]; // Suavidade na entrada e saída

const courses = [
  { title: "FRONT-END", skills: ["HTML, CSS", "React", "Angular", "JavaScript", "JQuery"] },
  { title: "BACK-END", skills: ["Java", "NodeJs", "C#", "ExpressJs", "PHP", "Ruby"] },
  { title: "MOBILE", skills: ["Kotlin", "Flutter", "React Native", "Swift", "Android"] },
  { title: "UX DESIGN", skills: ["Protótipos", "Wireframes", "Style Guides", "Grids"] },
  { title: "DEVOPS", skills: ["Kubernetes", "Puppet", "Git", "Amazon CloudWatch"] },
  { title: "WORDPRESS", skills: ["Elementor", "Bootstrap", "MySQL", "Framer"] },
];

const CursePage = () => {
  return (
    <div id="cursos" className="border-b pb-20 mb-20">
      <div className="flex flex-col justify-center items-center">
        <motion.h2 
          whileInView={{ opacity: 1, y: 0 }} 
          initial={{ opacity: 0, y: -100 }} 
          transition={{ duration: 1.5, ease: easing }} 
          className="tracking-tight text-gray-950 text-4xl lg:text-5xl font-extrabold md:!leading-[55px]"
        >
          Cursos
        </motion.h2>

        <motion.p 
          whileInView={{ opacity: 1, x: 0 }} 
          initial={{ opacity: 0, x: -100 }} 
          transition={{ duration: 1.5, ease: easing }} 
          className="my-4 text-base max-w-6xl text-gray-600 tracking-wide leading-relaxed text-center py-4"
        >
          Acreditamos que a tecnologia é a chave para o futuro...
        </motion.p>
      </div>

      {/* GRID DE CURSOS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-center mx-auto mt-10 py-6 max-w-4xl">
        {courses.map((course, index) => (
          <motion.div
            key={index}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            initial={{ x: animations[index].x, y: animations[index].y, opacity: 0 }}
            transition={{ duration: animations[index].duration, ease: easing, delay: index * 0.2 }}
            className="flex flex-col w-full max-w-[250px] h-[200px] items-center justify-center px-6 py-6 bg-emerald-50 border-solid border-emerald-200 border-2 rounded-xl transition hover:-translate-y-1 hover:scale-105 shadow-md"
          >
            <div className="text-emerald-800 font-bold text-lg mb-4">{course.title}</div>
            <p className="text-emerald-600 text-sm text-center tracking-tight">
              {course.skills.map((skill, i) => (
                <a key={i} href="#" className="no-underline hover:underline hover:text-emerald-700">
                  {skill}
                  {i < course.skills.length - 1 ? ", " : ""}
                </a>
              ))}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CursePage;
