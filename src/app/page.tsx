import { Grid } from "@mui/material";
import AppDashboardHeader from "./app-dashboard-header";

export default function AppHomePage() {
  return (
    <>
      <AppDashboardHeader />
      <Grid container justifyContent="center">
        <h1>APP - HOME PAGE</h1>
      </Grid>
    </>
  );
}
