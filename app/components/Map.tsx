import { cn } from "@/lib/utils";

export function Map({ children, className }) {
  return (
    <div
      className={cn(
        "p-1 bg-muted font-mono rounded-md border-solid border-border border shadow-sm",
        className
      )}
    >
      {children}
    </div>
  );
}

export function MapTitle({ children }) {
  return (
    <div className="px-2 bg-white rounded-sm h-8 flex items-center">
      {children}
    </div>
  );
}

export function MapContent({ children }) {
  return <div className="p-4 flex flex-col">{children}</div>;
}

export function MapCategory({ children }) {
  return <span className="group/category">{children}</span>;
}

export function MapCategoryTitle({ children }) {
  return (
    <h3 className="text-sm text-muted-foreground font-normal">{children}</h3>
  );
}

export function MapItem({ children }) {
  return (
    <li className="my-2 flex flex-row items-center h-[28px] group/item">
      <div>{children}</div>
      <div className="h-[45px] mr-4 border-primary/20 border-dashed border-t border-r flex-1 rounded-tr-md top-1/2 -mb-[45px] ml-2 group-last/item:h-[71px] group-last/item:-mb-[71px] group-last-of-type/category:h-[20px] group-last-of-type/category:-mb-[20px]"></div>
    </li>
  );
}

export function MapSource({ children }) {
  return <div className="my-1 text-right">{children}</div>;
}
