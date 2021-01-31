import * as React from "react";
import { useViewportWidth } from "./useViewportWidth";
import { useTailwindBreakpoint } from "./useTailwindBreakpoint";

function ViewportWidthDebugger(): JSX.Element {
  const vw = useViewportWidth();
  return <p>@media width: {vw}px</p>;
}

function TailwindBreakpointDebugger(): JSX.Element {
  return (
    <>
      <p className="block sm:hidden">Too small</p>
      <p className="hidden sm:block md:hidden">sm</p>
      <p className="hidden md:block lg:hidden">md</p>
      <p className="hidden lg:block xl:hidden">lg</p>
      <p className="hidden xl:block">xl</p>
    </>
  );
}

function CurrentBreakPoint(): JSX.Element {
  const breakpoint = useTailwindBreakpoint();
  return <p>Current Breakpoint {breakpoint}</p>;
}

function BreakpointDebugger(): JSX.Element {
  return (
    <div className="w-full">
      <h2>Breakpoint Debugger</h2>
      <ViewportWidthDebugger />
      <CurrentBreakPoint />
      <TailwindBreakpointDebugger />
    </div>
  );
}

export { BreakpointDebugger };
