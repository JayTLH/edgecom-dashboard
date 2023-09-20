import { Button } from "../../../components";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export const getColumns = ({ onMenuClick, userId }) => [
  { field: "title", headerName: "Title", flex: true },
  { field: "user", headerName: "Author", flex: true },
  {
    field: "createdAt",
    headerName: "Created At",
    valueGetter: (params) => {
      const date = new Date(params.value);
      return date.toLocaleDateString(undefined, {
        timeZone: "America/Toronto",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      });
    },
    flex: true,
  },
  {
    field: "actions",
    headerName: "Actions",
    renderCell: (params) =>
      // only render actions for the article owner
      params.row.user === userId ? (
        <Button variant="text" onClick={(event) => onMenuClick(event, params.row)}>
          <MoreVertIcon />
        </Button>
      ) : null,
  },
];
