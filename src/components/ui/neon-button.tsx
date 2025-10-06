import React from 'react'
import { cn } from '../../lib/utils'
import { VariantProps, cva } from "class-variance-authority";

const buttonVariants = cva(
    "relative group border text-white mx-auto text-center rounded-full font-bold uppercase tracking-wider transition-all duration-300",
    {
        variants: {
            variant: {
                default: "bg-green-500/10 hover:bg-green-500/5 border-green-500/30 hover:border-green-400",
                solid: "bg-green-500 hover:bg-green-600 text-white border-transparent hover:border-green-400 transition-all duration-200",
                listening: "bg-red-500/10 hover:bg-red-500/5 border-red-500/30 hover:border-red-400 animate-pulse",
            },
            size: {
                default: "px-8 py-3 text-lg",
                sm: "px-6 py-2 text-base",
                lg: "px-12 py-4 text-xl",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> { neon?: boolean }

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, neon = true, size, variant, children, ...props }, ref) => {
        return (
            <button
                className={cn(buttonVariants({ variant, size }), className)}
                ref={ref}
                {...props}
            >
                <span className={cn("absolute h-px opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out inset-x-0 inset-y-0 bg-gradient-to-r w-3/4 mx-auto from-transparent via-green-400 to-transparent hidden", neon && "block")} />
                {children}
                <span className={cn("absolute group-hover:opacity-30 transition-all duration-500 ease-in-out inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-green-400 to-transparent hidden", neon && "block")} />
            </button>
        );
    }
)

Button.displayName = 'Button';

export { Button, buttonVariants };
