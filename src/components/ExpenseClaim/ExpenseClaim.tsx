import * as React from "react";
import { ExpenseClaim as ExpenseClaimModel } from "../../store/expenseClaim/types";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import FolderIcon from "@material-ui/icons/Folder";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import ListItem from "@material-ui/core/ListItem";
import DeleteIcon from "@material-ui/icons/Delete";

interface ExpenseClaimProps {
  expenseClaim: ExpenseClaimModel;
}

export const ExpenseClaim = (props: ExpenseClaimProps) => (
  <ListItem>
    <ListItemAvatar>
      <Avatar>
        <FolderIcon />
      </Avatar>
    </ListItemAvatar>
    <ListItemText
      primary={props.expenseClaim.amount}
      secondary={props.expenseClaim.name}
    />
    <ListItemSecondaryAction>
      <IconButton edge="end" aria-label="delete">
        <DeleteIcon />
      </IconButton>
    </ListItemSecondaryAction>
  </ListItem>
);
