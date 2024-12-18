import { RiReactjsLine } from "react-icons/ri"
import { TbBrandNextjs } from "react-icons/tb"
import { SiMongodb } from "react-icons/si"
import { DiRedis } from "react-icons/di"
import { FaJs } from "react-icons/fa"
import { DiHtml5 } from "react-icons/di"
import { DiCss3 } from "react-icons/di"
import { animate, motion } from "framer-motion"

const iconVariants=(duration)=>({
    initial: {y:-10},
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
})

const Technology = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <h2 className="my-20 text-center text-4xl">Technologies</h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <motion.div 
            variants={iconVariants(2)}
            whileInView="animate"
            initial="initial"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-5xl text-cyan-400"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(2.5)}
            whileInView="animate"
            initial="initial"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <TbBrandNextjs className="text-5xl "/>
            </motion.div>
            <motion.div 
            variants={iconVariants(1.5)}
            whileInView="animate"
            initial="initial"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMongodb className="text-5xl text-green-500"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(2)}
            whileInView="animate"
            initial="initial"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiRedis className="text-5xl text-red-700"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(1)}
            whileInView="animate"
            initial="initial"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaJs className="text-5xl text-yellow-500"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(1.5)}
            whileInView="animate"
            initial="initial"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiHtml5 className="text-5xl text-orange-400"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(2.5)}
            whileInView="animate"
            initial="initial"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiCss3 className="text-5xl text-cyan-500"/>
            </motion.div>
        </div>
    </div>
  )
}

export default Technology