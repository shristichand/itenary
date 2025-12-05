import React from "react";
import clsx from "clsx";

type StyleType = {
    size: string;
    leading: string;
};

type StyleNameType =
    // New styles
    | "p1"
    | "p2"
    | "p3"
    | "p4"
    | "p5"
    | "p6"
    | "p7"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "sub1"
    | "sub2"
    | "sub3"
    | "sub4"
    | "sub5"
    | "sub6"
    | "d1"
    | "d2";
    
type VariantType =
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "p"
    | "span"
    | "address"
    | "div";

type WeightType = "regular" | "medium" | "semibold" | "bold";

const styles: Record<StyleNameType, StyleType> = {

    // New styles
    // Paragraphs
    p1: { size: "text-[0.625rem]", leading: "leading-[1.125rem]" },
    p2: { size: "text-[0.75rem]", leading: "leading-[1.25rem]" },
    p3: { size: "text-[0.875rem]", leading: "leading-[1rem] md:leading-[1.375rem]" },
    p4: { size: "text-[1rem]", leading: "leading-[1.5rem]" },
    p5: { size: "text-[1.125rem]", leading: "leading-[1.625rem]" },
    p6: { size: "text-[.875rem] md:text-[1.25rem]", leading: "leading-[1rem] md:leading-[1.75rem]" },
    p7: { size: "text-[1.5rem]", leading: "leading-[2rem]" },

    // Headings
    h1: { size: "text-[1rem]", leading: "leading-[1.5rem]" },
    h2: { size: "text-[1.125rem]", leading: "leading-[1.625rem]" },
    h3: { size: "md:text-[1.25rem] text-[.9169rem]", leading: "md:leading-[1.75rem] leading-[1.2831rem]" },
    h4: { size: "text-base md:text-[1.5rem]", leading: "leading-[2rem]" },
    h5: { size: "text-[2rem]", leading: "leading-[2.5rem]" },
    h6: { size: "text-[2.5rem]", leading: "leading-[3rem]" },

    // Sub-headings
    sub1: { size: "text-[1rem]", leading: "leading-[1.5rem]" },
    sub2: { size: "text-[1.125rem]", leading: "leading-[1.625rem]" },
    sub3: { size: "text-[1.25rem]", leading: "leading-[1.75rem]" },
    sub4: { size: "text-[1.5rem]", leading: "leading-[2rem]" },
    sub5: { size: "text-[2rem]", leading: "leading-[2.5rem]" },
    sub6: { size: "text-[2.5rem]", leading: "leading-[3rem]" },

    // Display
    d1: { size: "text-[3.75rem]", leading: "leading-[4.25rem]" },
    d2: { size: "text-[3.5rem]", leading: "leading-[4rem]" },
};

const weights: Record<WeightType, string> = {
    regular: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
};

interface TypographyProps {
    children: React.ReactNode;
    className?: string;
    variant?: VariantType;
    styleName?: StyleNameType;
    weight?: WeightType;
}

export const Typography = ({
    children,
    className = "",
    variant = "p",
    styleName = "p4",
    weight = "regular",
}: TypographyProps) => {
    const Element = variant;
    const { size, leading } = styles[styleName];
    const fontWeight = weights[weight];

    return (
        <Element className={clsx(size, leading, fontWeight, className)}>
            {children}
        </Element>
    );
};