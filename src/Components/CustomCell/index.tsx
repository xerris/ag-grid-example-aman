import "./index.css";
import { loadLastFiveIcons } from "../../utils/Utils";
import { ICellRendererParams } from "ag-grid-community";

export const lastFiveComponent = (props: ICellRendererParams) => {
  const listItems = props.data.lastFiveMatches.map(
    (item: string, index: number) => (
      <li key={index} className="lastFiveIcons">
        {loadLastFiveIcons(item)}
      </li>
    )
  );
  return <ul className="lastFiveGrid">{listItems}</ul>;
};
