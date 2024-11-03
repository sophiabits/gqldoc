import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

import { ArrowLeftFromLine, Braces, Pencil, Search } from "lucide-react";

const referenceVariants = cva("", {
  variants: {
    size: {
      default: "py-1 px-2",
      inline: "py-0 px-1 align-middle",
    },
    variant: {
      default: "bg-primary/5",
      field: "bg-pink-100 text-pink-700",
      mutation: "bg-yellow-100 text-yellow-700",
      query: "text-blue-700 bg-blue-100",
      type: "text-cyan-600 bg-cyan-100",
    },
    background: {
      default: "",
      plain: "bg-primary/5",
      transparent: "bg-transparent",
    },
    weight: {
      strong: "font-semibold",
      default: "",
      subtle: "bg-transparent",
    },
  },
  defaultVariants: {
    background: "default",
    size: "default",
    weight: "default",
    variant: "default",
  },
});

interface ReferenceProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof referenceVariants> {}

export function Reference({
  background,
  children,
  className,
  size,
  variant,
  weight,
  ...rest
}: ReferenceProps) {
  const Component = size === "inline" ? "span" : "div";
  return (
    <Component
      className={cn(
        "rounded-md inline-flex items-center font-mono text-sm",
        referenceVariants({ background, size, variant, weight }),
        className
      )}
      {...rest}
    >
      {children}
    </Component>
  );
}

export function ReferenceLink({ children, href }) {
  return (
    <a href={href} className="underline hover:no-underline">
      {children}
    </a>
  );
}

export function ObjectFieldReference({ object, field }) {
  return (
    <Reference>
      <ArrowLeftFromLine className="w-4 h-4 mr-2" />{" "}
      <ReferenceLink href="#">
        <span className="text-pink-500 underline hover:no-underline">
          {object}
        </span>
      </ReferenceLink>
      <span className="text-pink-900">.{field}</span>
    </Reference>
  );
}

interface BoundReferenceProps
  extends Pick<ReferenceProps, "background" | "children" | "size" | "weight"> {}

export function FieldReference(props: BoundReferenceProps) {
  return <Reference variant="field" {...props} />;
}

export function ObjectTypeReference(props: BoundReferenceProps) {
  // TODO: Need an `object` variant
  return <Reference variant="field" {...props} />;
}

export function TypeReference(props: BoundReferenceProps) {
  return <Reference variant="type" {...props} />;
}

export function SourceReference({ children }) {
  return (
    <Reference>
      <Braces className="w-4 h-4 mr-2" />
      {children}
    </Reference>
  );
}

export function MutationReference({
  children,
  size,
  ...rest
}: BoundReferenceProps) {
  return (
    <Reference variant="mutation" size={size} {...rest}>
      <Pencil
        className={cn(size === "inline" ? "w-3 h-3 mr-1" : "w-4 h-4 mr-2")}
      />
      {children}
    </Reference>
  );
}

export function QueryReference({
  children,
  size,
  ...rest
}: BoundReferenceProps) {
  return (
    <Reference variant="query" size={size} {...rest}>
      <Search
        className={cn(size === "inline" ? "w-3 h-3 mr-1" : "w-4 h-4 mr-2")}
      />
      {children}
    </Reference>
  );
}
