import * as React from "react";

export interface RootProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function(props: RootProps): React.ReactElement<RootProps> {
  return <div {...props}></div>;
}
