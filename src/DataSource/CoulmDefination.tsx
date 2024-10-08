import { ColDef } from "ag-grid-community";
import { lastFiveComponent } from "../Components/CustomCell";
import CustomHeader from "../Components/CustomHeader";
import { ClubModels } from "../Types/ClubModels";

export const colDefination: ColDef<ClubModels>[] = [
  {
    headerGroupComponent: CustomHeader,
    headerGroupComponentParams: {
      displayName: "Season",
      year: "2024-25",
    },
    children: [
      {
        headerName: "Club",
        field: "club",
        sortable: true,
        filter: true,
        minWidth: 200,
      },
      { headerName: "MP", field: "matchesPlayed", flex: 1 },
      { headerName: "W", field: "win", flex: 1 },
      { headerName: "D", field: "draw", flex: 1 },
      { headerName: "L", field: "lost", flex: 1 },
      { headerName: "GF", field: "goalsScored", flex: 1 },
      { headerName: "GA", field: "goalsAgainst", flex: 1 },
      { headerName: "GD", field: "goalDifference", flex: 1 },
      {
        headerName: "Pts",
        field: "points",
        flex: 1,
        headerClass: "bold-header",
      },
      {
        headerName: "Last 5",
        headerClass: "centered-header",
        field: "lastFiveMatches",
        flex: 2,
        cellRenderer: lastFiveComponent,
        minWidth: 200,
      },
    ],
  },
];
