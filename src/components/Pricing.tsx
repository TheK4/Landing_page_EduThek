import { motion } from "framer-motion";

const easing = [0.25, 0.1, 0.25, 1];

interface Plan {
  title: string;
  price: string;
  description: string;
  benefits: string[];
  bgColor: string;
  textColor: string;
}

const plans: Plan[] = [
  {
    title: "Start",
    price: "R$29",
    description: "Melhor opção para quem está iniciando.",
    benefits: [
      "Acesso aos cursos básicos",
      "Certificado de conclusão",
      "Monitorias Individuais: 2 Monitorias",
      "Mais de 1400 Aulas",
    ],
    bgColor: "bg-emerald-50",
    textColor: "text-emerald-800",
  },
  {
    title: "Pro",
    price: "R$150",
    description: "Melhor opção para múltiplos usuários, com suporte premium.",
    benefits: [
      "Acesso a todos os cursos",
      "Certificado de conclusão",
      "Monitorias Individuais: 4 Monitorias",
      "Mais de 1400 Aulas",
      "Suporte Premium",
    ],
    bgColor: "bg-emerald-100 border-solid border-emerald-200 border-2",
    textColor: "text-emerald-800",
  },
  {
    title: "Premium",
    price: "R$299",
    description: "Acesso a todos os cursos e melhor suporte especializado.",
    benefits: [
      "Acesso a todos os cursos",
      "Certificado de conclusão",
      "Monitorias Individuais: 6 Monitorias",
      "Mais de 1400 Aulas",
      "Suporte VIP",
    ],
    bgColor: "bg-emerald-50",
    textColor: "text-emerald-800",
  },
];

interface PricingCardProps extends Plan {
  delay: number;
}

const PricingCard = ({ title, price, description, benefits, bgColor, textColor, delay }: PricingCardProps) => (
  <motion.div
    whileInView={{ opacity: 1, y: 0 }}
    initial={{ opacity: 0, y: 100 }}
    transition={{ duration: 1.5 + delay, ease: easing }}
    className={`flex flex-col justify-between p-6 mx-auto max-w-sm text-center ${bgColor} rounded-xl`}
  >
    <h3 className={`mb-4 text-2xl font-semibold ${textColor}`}>{title}</h3>
    <p className="font-light text-emerald-600 sm:text-lg w-80">{description}</p>
    <div className="flex justify-center items-baseline my-8">
      <span className={`mr-2 text-5xl font-extrabold ${textColor}`}>{price}</span>
      <span className="text-emerald-600">/mês</span>
    </div>
    <ul role="list" className="mb-8 space-y-4 text-left">
      {benefits.map((benefit, index) => (
        <li key={index} className="flex items-center space-x-3">
          <svg className="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
          </svg>
          <span className="text-emerald-600">{benefit}</span>
        </li>
      ))}
    </ul>
    <a href="#" className="text-white bg-emerald-600 hover:bg-emerald-700 focus:ring-4 focus:ring-emerald-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
      Vamos Começar!
    </a>
  </motion.div>
);

const Pricing = () => {
  return (
    <div id="planos" className="border-b pb-20 mb-32">
      <div className="flex flex-col justify-center items-center py-6 my-6">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5, ease: easing }}
          className="tracking-tight text-gray-950 text-4xl lg:text-5xl font-extrabold"
        >
          Planos
        </motion.h2>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1.5, ease: easing }}
          className="my-4 text-base max-w-6xl text-gray-600 tracking-wide leading-relaxed text-center py-4"
        >
          Impulsione o seu aprendizado com os melhores cursos e faça parte da maior comunidade tech.
        </motion.p>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {plans.map((plan, index) => (
          <PricingCard key={plan.title} {...plan} delay={index} />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
