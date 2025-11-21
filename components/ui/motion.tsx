"use client";

import { motion, HTMLMotionProps, Variants } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps extends HTMLMotionProps<"div"> {
    children: ReactNode;
    delay?: number;
    direction?: "up" | "down" | "left" | "right" | "none";
    duration?: number;
    className?: string;
}

export function FadeIn({
    children,
    delay = 0,
    direction = "up",
    duration = 0.5,
    className,
    ...props
}: FadeInProps) {
    const variants: Variants = {
        hidden: {
            opacity: 0,
            y: direction === "up" ? 20 : direction === "down" ? -20 : 0,
            x: direction === "left" ? 20 : direction === "right" ? -20 : 0,
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: {
                duration,
                delay,
                ease: "easeOut",
            },
        },
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={variants}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
}

interface StaggerContainerProps extends HTMLMotionProps<"div"> {
    children: ReactNode;
    delay?: number;
    staggerChildren?: number;
    className?: string;
}

export function StaggerContainer({
    children,
    delay = 0,
    staggerChildren = 0.1,
    className,
    ...props
}: StaggerContainerProps) {
    const variants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: delay,
                staggerChildren,
            },
        },
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={variants}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
}

interface ScaleInProps extends HTMLMotionProps<"div"> {
    children: ReactNode;
    delay?: number;
    duration?: number;
    className?: string;
}

export function ScaleIn({
    children,
    delay = 0,
    duration = 0.4,
    className,
    ...props
}: ScaleInProps) {
    const variants: Variants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration,
                delay,
                ease: "easeOut",
            },
        },
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={variants}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
}
