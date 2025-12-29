"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { usePathname } from "next/navigation";

export default function Cursor() {
    const cursorRef = useRef<HTMLDivElement | null>(null);

    const pathname = usePathname();
    const isLoeka = pathname.includes("theone");

    useEffect(() => {
        const cursor = cursorRef.current;
        if (!cursor) return;

        gsap.set(cursor, {
            xPercent: -50,
            yPercent: -50,
        });

        const onMouseMove = (e: MouseEvent) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.3,
                ease: "power3.out",
            });
        };

        window.addEventListener("mousemove", onMouseMove);
        return () => window.removeEventListener("mousemove", onMouseMove);
    }, []);

    return (
        <div
            ref={cursorRef}
            className="fixed top-0 left-0 w-10 h-10 rounded-full pointer-events-none z-9999 mix-blend-difference flex items-center justify-center text-[10px]"
            style={{ backgroundColor: isLoeka ? "#FF0000" : "white" }}
        >
        </div>
    );
}
