"use client";
import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

/* -------------------------------------------------------------------------- */
/*                                NAVBAR WRAPPER                              */
/* -------------------------------------------------------------------------- */
export const Navbar = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > 100);
  });

  return (
    <motion.div ref={ref} className="fixed inset-x-0 top-4 z-40 w-full">
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child as any, { visible })
          : child
      )}
    </motion.div>
  );
};

/* -------------------------------------------------------------------------- */
/*                                 DESKTOP NAV                                 */
/* -------------------------------------------------------------------------- */
export const NavBody = ({ children, visible }: { children: React.ReactNode; visible: boolean }) => {
  return (
    <motion.div
      animate={{
        width: visible ? "75%" : "100%",
        backdropFilter: visible ? "blur(18px)" : "blur(12px)",
        borderRadius: visible ? "1.5rem" : "2rem",
        y: visible ? 10 : 0,
      }}
      transition={{ type: "spring", stiffness: 180, damping: 40 }}
      className={cn(
        "relative z-60 mx-auto hidden h-16 w-full max-w-7xl flex-row items-center justify-between " +
          "rounded-full border border-white/20 bg-white/20 px-4 py-1 backdrop-blur-xl overflow-hidden flex-nowrap lg:flex dark:border-white/10 dark:bg-neutral-900/40"
      )}
    >
      {children}
    </motion.div>
  );
};

/* -------------------------------------------------------------------------- */
/*                                 NAV ITEMS                                   */
/* -------------------------------------------------------------------------- */
export const NavItems = ({
  items,
}: {
  items: { name: string; link: string }[];
}) => {
  const pathname = usePathname();

  return (
    <div className="absolute inset-0 hidden flex-1 flex-row items-center justify-center gap-4 text-sm font-medium lg:flex dark:text-neutral-200">
      {items.map((item, i) => {
        const active = pathname === item.link;

        return (
          <a
            key={i}
            href={item.link}
            className={cn(
              "relative px-4 py-2 text-black dark:text-white transition",
              active && "font-semibold underline underline-offset-4"
            )}
          >
            {item.name}
          </a>
        );
      })}
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/*                                MOBILE NAV                                   */
/* -------------------------------------------------------------------------- */
export const MobileNav = ({
  children,
  isOpen,
  setIsOpen,
}: {
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) => {
  const { scrollY } = useScroll();

  // Close menu on scroll
  useMotionValueEvent(scrollY, "change", () => {
    if (isOpen) setIsOpen(false);
  });

  return (
    <div
      className="
        relative z-50 mx-auto flex 
        w-full max-w-[95%]
        flex-col items-center justify-between
        rounded-full
        border border-white/20 bg-white/20 
        px-4 py-2 
        backdrop-blur-xl 
        lg:hidden 
        dark:border-white/10 dark:bg-neutral-900/40
      "
    >
      {children}
    </div>
  );
};

export const MobileNavHeader = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex w-full items-center justify-between px-1">{children}</div>;
};

/* -------------------------------------------------------------------------- */
/*                                MOBILE DROPDOWN                              */
/* -------------------------------------------------------------------------- */
export const MobileNavMenu = ({
  children,
  isOpen,
}: {
  children: React.ReactNode;
  isOpen: boolean;
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0,
            backdropFilter: "blur(12px)",
           }
        }
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="
            absolute left-1/2 top-16 -translate-x-1/2
            w-[95%]
            flex flex-col gap-4
            rounded-2xl
            border border-white/30 
            bg-white/40 
            px-4 py-6 
            shadow-xl backdrop-blur-xl
            dark:border-white/10 dark:bg-neutral-900/60
          "
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

/* -------------------------------------------------------------------------- */
/*                                TOGGLE ICON                                  */
/* -------------------------------------------------------------------------- */
export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  return isOpen ? (
    <IconX className="cursor-pointer text-black dark:text-white" onClick={onClick} />
  ) : (
    <IconMenu2 className="cursor-pointer text-black dark:text-white" onClick={onClick} />
  );
};

/* -------------------------------------------------------------------------- */
/*                                 LOGO                                        */
/* -------------------------------------------------------------------------- */
export const NavbarLogo = ({ visible }: { visible: boolean }) => {
  return (
    <motion.a
      href="#"
      initial={false}
      animate={{ scale: visible ? 0.8 : 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 30 }}
      className="relative z-20 mr-4 flex items-center gap-2 px-2"
    >
      <div className="relative h-14 w-14 sm:h-16 sm:w-16 shrink-0">
        <img src="/logo/trtlogo.png" alt="logo" className="h-full w-full object-contain" />
      </div>
      <motion.span
        animate={{ scale: visible ? 0.85 : 1 }}
        className="text-base font-semibold text-black dark:text-white whitespace-nowrap"
      >
        The Responsible Traveler
      </motion.span>
    </motion.a>
  );
};

/* -------------------------------------------------------------------------- */
/*                                BUTTON COMPONENT                              */
/* -------------------------------------------------------------------------- */
export const NavbarButton = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 rounded-md bg-white text-black text-sm font-bold cursor-pointer transition hover:-translate-y-0.5"
    >
      {children}
    </button>
  );
};
