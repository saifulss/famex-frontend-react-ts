import * as React from "react";
import { ExpenseClaim as ExpenseClaimModel } from "../../store/expenseClaim/types";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import { CurrencyUtils } from "../../utils/CurrencyUtils";
import moment from "moment";
import { ListItemAvatar } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";

const nameInitials = require('name-initials');

interface ExpenseClaimProps {
  expenseClaim: ExpenseClaimModel;
  userDisplayName: string;
}

const renderPrimary = (expenseClaim: ExpenseClaimModel) => (
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }}
  >
    <div>{CurrencyUtils.toCurrencyWithoutTrailingZeroes(expenseClaim.amount / 100)}</div>
    {renderTimestamp(expenseClaim)}
  </div>
);

const renderTimestamp = (expenseClaim: ExpenseClaimModel) => {
  const createdAt = moment(expenseClaim.createdAt);
  let displayText = createdAt.fromNow();

  const threeDaysAgo = moment().subtract(3, "d");
  if (createdAt.isBefore(threeDaysAgo)) displayText = createdAt.format("D MMM YYYY, HH:mm");

  return <div style={{ fontSize: "70%", color: "#aaaaaa" }}>{displayText}</div>;
};

const renderSecondary = (expenseClaim: ExpenseClaimModel) => (
  <div>
    {/*<div style={{ fontSize: "100%", color: "#aaaaaa" }}>{expenseClaim.category.name}</div>*/}
    {renderDescriptionIfExists(expenseClaim)}
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
  <ListItem>
    <ListItemAvatar>
      <Avatar>
        {nameInitials(props.userDisplayName)}
      </Avatar>
    </ListItemAvatar>
    <ListItemText
      primary={renderPrimary(props.expenseClaim)}
      secondary={renderSecondary(props.expenseClaim)}
      disableTypography={true}
    />
  </ListItem>
);
