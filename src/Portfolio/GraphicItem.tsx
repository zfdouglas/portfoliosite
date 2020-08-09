import * as React from "react";

function GraphicItem(props: any) {
  return (
    <div className="GraphicItem">
      <div>{props.description}</div>
      <img src={props.url} alt={props.alttext} />
    </div>
  );
}
export default GraphicItem;
