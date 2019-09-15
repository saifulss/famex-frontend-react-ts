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
import { CurrencyUtils } from "../../utils/CurrencyUtils";
import moment from "moment";

interface ExpenseClaimProps {
  expenseClaim: ExpenseClaimModel;
}

const renderPrimary = (expenseClaim: ExpenseClaimModel) => (
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }}
  >
    <div>{CurrencyUtils.toCurrency(expenseClaim.amount)}</div>
    <div style={{ fontSize: "70%", color: "#aaaaaa" }}>
      {moment(expenseClaim.createdAt).fromNow()}
    </div>
  </div>
);

const renderSecondary = (expenseClaim: ExpenseClaimModel) => (
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }}
  >
    <div style={{ fontSize: "90%" }}>
      <div>{expenseClaim.category.name}</div>
      {renderDescriptionIfExists(expenseClaim)}
    </div>
  </div>
);

const renderDescriptionIfExists = (expenseClaim: ExpenseClaimModel) => {
  if (!expenseClaim.description) return null;

  return (
    <div style={{ fontSize: "80%", color: "#aaaaaa" }}>
      {expenseClaim.description}
    </div>
  );
};

export const ExpenseClaim = (props: ExpenseClaimProps) => (
  <ListItem alignItems="flex-start">
    <ListItemAvatar>
      <Avatar>
        <FolderIcon />
      </Avatar>
    </ListItemAvatar>
    <ListItemText
      primary={renderPrimary(props.expenseClaim)}
      secondary={renderSecondary(props.expenseClaim)}
    />
    <ListItemSecondaryAction>
      <IconButton edge="end" aria-label="delete">
        <DeleteIcon />
      </IconButton>
    </ListItemSecondaryAction>
  </ListItem>
);
