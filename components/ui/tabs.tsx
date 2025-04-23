import * as React from "react";
import { useState } from "react";

export function Tabs({ children, defaultValue, onValueChange }: any) {
  const [active, setActive] = useState(defaultValue);
  return <div>{children.map((child: any) => {
    if (child.type.name === 'TabsList') {
      return React.cloneElement(child, { active, setActive, onValueChange });
    }
    if (child.props.value === active) return child;
    return null;
  })}</div>;
}

export function TabsList({ children, active, setActive, onValueChange }: any) {
  return <div className="flex gap-2 mb-4">
    {children.map((child: any) => React.cloneElement(child, { active, setActive, onValueChange }))}
  </div>;
}

export function TabsTrigger({ children, value, active, setActive, onValueChange }: any) {
  return <button
    className={`px-4 py-2 border rounded ${active === value ? 'bg-gray-200' : ''}`}
    onClick={() => { setActive(value); onValueChange(value); }}
  >{children}</button>;
}

export function TabsContent({ children }: any) {
  return <div>{children}</div>;
}
