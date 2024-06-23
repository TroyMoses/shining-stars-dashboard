import React from "react";
import { useRouterContext, type TitleProps } from "@refinedev/core";
import Button from "@mui/material/Button";

import { logo, nalongo } from "assets";

export const Title: React.FC<TitleProps> = ({ collapsed }) => {
  const { Link } = useRouterContext();

  return (
    <Button fullWidth variant="text" disableRipple>
      <Link to="/">
        {collapsed ? (
          <img src={logo} alt="Nalongo" width="28px" />
        ) : (
          <img src={nalongo} alt="Nalongo" width="140px" />
        )}
      </Link>
    </Button>
  );
};
