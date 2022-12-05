"use client";

import { ReactNode } from "react";

import { motion } from "framer-motion";

export default function Motion({ children }: { children: ReactNode }) {
    return (
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {children}
        </motion.section>
    );
}
