import { Link, PlugZap, TriangleAlert } from "lucide-react";
import { Reference } from "./Reference";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function Fields({ children }) {
  return <div className="">{children}</div>;
}

export function Field({ children }) {
  return (
    <div className="flex flex-col gap-2 border-b last:border-none border-border py-4 border-dashed">
      {children}
    </div>
  );
}

export function FieldHeader({ children }) {
  return (
    <div className="flex flex-row items-center gap-1 group relative">
      {children}
    </div>
  );
}

export function FieldHeaderPermalink({ name }: { name: string }) {
  return (
    <a
      className="opacity-0 group-hover:opacity-100 absolute -left-0.5 -translate-x-full h-full"
      href={`#${name}`}
    >
      <Reference variant="field" className="h-full bg-transparent">
        <Link className="h-4 w-4" />
      </Reference>
    </a>
  );
}

export function FieldActions({ children }) {
  return <div>{children}</div>;
}

export function FieldDescription({ children }) {
  return <div className="text-sm">{children}</div>;
}

export function FieldHeaderSeparator() {
  return (
    <span aria-hidden className="text-pink-200 select-none text-[0.3rem]">
      ●
    </span>
  );
}

export function FieldDeprecation() {
  return (
    <Reference className="bg-yellow-100 text-yellow-700">
      <TriangleAlert className="w-4 h-4 mr-2" />
      deprecated
    </Reference>
  );
}

export function FieldConnectionMarker() {
  return (
    <Tooltip>
      <TooltipTrigger>
        <Reference variant="field" className="p-1.5">
          <PlugZap className="h-4 w-4" />
        </Reference>
      </TooltipTrigger>
      <TooltipContent>Connection</TooltipContent>
    </Tooltip>
  );
}
