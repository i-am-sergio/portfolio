import { animate, motion } from "framer-motion";

const stairAnimation = {
    initial: {
        top: "0%",
    },
    animate: {
        top: "100%",
    },
    exit: {
        top: ["100%", "0%"],
    }
}

// calculate the reverse index for staggered delay
const reverseIndex = (index: number) => {
    const totalSteps = 6;
    return totalSteps - index - 1;
}

const Stairs = () => {
  return (
    <>
    {/* Render 6 moition divs  */}
    {[...Array(6)].map((_, index) => {
        return (
            <motion.div
                key={index}
                // custom={index}
                variants={stairAnimation}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{
                    delay: 0.05 * reverseIndex(index),
                    duration: 0.2,
                    ease: "easeInOut"
                }}
                className="w-full h-full bg-white relative"
            />
        )
    })
    }    
    </>
  )
}

export default Stairs