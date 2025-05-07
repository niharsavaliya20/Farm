// "use client"; // for Next.js App Router

// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";

// export default function CursorFollower() {
//   const [position, setPosition] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const move = (e) => {
//       setPosition({ x: e.clientX, y: e.clientY });
//     };

//     window.addEventListener("mousemove", move);
//     return () => window.removeEventListener("mousemove", move);
//   }, []);

//   return (
//     <motion.div
//       className="fixed top-0 left-0 w-6 h-6 rounded-full bg-green-700 pointer-events-none z-50"
//       animate={{
//         x: position.x - 12,
//         y: position.y - 12,
//       }}
//       transition={{
//         type: "spring",
//         stiffness: 300,
//         damping: 25,
//       }}
//     />
//   );
// }

"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../../assets/palm-leaf_17453099.png";; // adjust path based on your project

export default function CursorFollower() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50 w-10 h-10"
      animate={{
        x: position.x - 20, // offset for centering the image
        y: position.y - 20,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 25,
      }}
    >
      
      <Image src={logo} alt="Plant" width={30} height={30} />
    </motion.div>
  );
}