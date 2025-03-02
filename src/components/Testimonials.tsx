import portrait1 from "../assets/portrait1.jpg"
import { FaStar } from "react-icons/fa";

const Testimonials = () => {
  return (
    <div className="flex flex-col justify-center items-center py-6 my-6">
        <h2 className="tracking-tight text-gray-950 text-3xl lg:text-4xl font-extrabold md:!leading-[55px]">Depoimentos</h2>
        <p className="my-4 max-w-6xl text-gray-600 tracking-wide leading-relaxed text-center py-4 text-lg">Veja o que nossos usuários estão dizendo.</p>
        <div className="flex flex-row gap-8">
            <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
                <div className="flex items-center gap-4 mb-8 mt-20">
                    <img className="w-12 h-12 rounded-full object-top object-cover" src={portrait1} alt="Foto" />
                    <div>
                        <h2 className="font-bold tracking-tight text-gray-600 text-xl">Tania Andrew</h2>
                        <p className="font-medium tracking-wider text-gray-400 text-sm">Frontend Lead @ Google</p>
                    </div>
                    <div className="flex flex-row items-center justify-center gap-1 ml-8">
                        <div className="text-yellow-400 text-lg">
                            <FaStar/>
                        </div>
                        <div className="text-yellow-400 text-lg">
                            <FaStar/>
                        </div>
                        <div className="text-yellow-400 text-lg">
                            <FaStar/>
                        </div>
                        <div className="text-yellow-400 text-lg">
                            <FaStar/>
                        </div>
                        <div className="text-yellow-400 text-lg">
                            <FaStar/>
                        </div>
                    </div>
                </div>
                <p className="text-gray-600 tracking-wide leading-relaxed font-thin">
                    <span className="font-extrabold text-lg text-gray-600">"</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat placeat ut esse cumque voluptate facilis, Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat placeat ut esse cumque voluptate facilis <span className="font-extrabold text-lg text-gray-600">"</span>
                </p>
            </div>
            <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
                <div className="flex items-center gap-4 mb-8 mt-20">
                    <img className="w-12 h-12 rounded-full object-top object-cover" src={portrait1} alt="Foto" />
                    <div>
                        <h2 className="font-bold tracking-tight text-gray-600 text-xl">Tania Andrew</h2>
                        <p className="font-medium tracking-wider text-gray-400 text-sm">Frontend Lead @ Google</p>
                    </div>
                    <div className="flex flex-row items-center justify-center gap-1 ml-8">
                        <div className="text-yellow-400 text-lg">
                            <FaStar/>
                        </div>
                        <div className="text-yellow-400 text-lg">
                            <FaStar/>
                        </div>
                        <div className="text-yellow-400 text-lg">
                            <FaStar/>
                        </div>
                        <div className="text-yellow-400 text-lg">
                            <FaStar/>
                        </div>
                        <div className="text-yellow-400 text-lg">
                            <FaStar/>
                        </div>
                    </div>
                </div>
                <p className="text-gray-600 tracking-wide leading-relaxed font-thin">
                    <span className="font-extrabold text-lg text-gray-600">"</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat placeat ut esse cumque voluptate facilis, Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat placeat ut esse cumque voluptate facilis <span className="font-extrabold text-lg text-gray-600">"</span>
                </p>
            </div>
            <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
                <div className="flex items-center gap-4 mb-8 mt-20">
                    <img className="w-12 h-12 rounded-full object-top object-cover" src={portrait1} alt="Foto" />
                    <div>
                        <h2 className="font-bold tracking-tight text-gray-600 text-xl">Tania Andrew</h2>
                        <p className="font-medium tracking-wider text-gray-400 text-sm">Frontend Lead @ Google</p>
                    </div>
                    <div className="flex flex-row items-center justify-center gap-1 ml-8">
                        <div className="text-yellow-400 text-lg">
                            <FaStar/>
                        </div>
                        <div className="text-yellow-400 text-lg">
                            <FaStar/>
                        </div>
                        <div className="text-yellow-400 text-lg">
                            <FaStar/>
                        </div>
                        <div className="text-yellow-400 text-lg">
                            <FaStar/>
                        </div>
                        <div className="text-yellow-400 text-lg">
                            <FaStar/>
                        </div>
                    </div>
                </div>
                <p className="text-gray-600 tracking-wide leading-relaxed font-thin">
                    <span className="font-extrabold text-lg text-gray-600">"</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat placeat ut esse cumque voluptate facilis, Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat placeat ut esse cumque voluptate facilis <span className="font-extrabold text-lg text-gray-600">"</span>
                </p>
            </div>
        </div>
    </div>
  )
}

export default Testimonials