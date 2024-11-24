import { Box, Typography } from "@mui/material";

export interface QuickRosterStatsProps {
  army: string;
  detachment?: string;
  sizeCategory?: string;
  pointsUsed: number;
  allowedPoints?: number;
  pointsLeft?: number;
}

const QuickRosterStats: React.FC<QuickRosterStatsProps> = ({army, detachment, sizeCategory, pointsUsed, allowedPoints, pointsLeft}) => {

  return (
    <>
      <Box className="QuickRosterStatsBox">
        <Typography>
          {army}
          {detachment !== undefined && detachment !== "" ? ": " + detachment : ""}
          {sizeCategory !== undefined && sizeCategory !== "" ? " | " + sizeCategory : ""}<br/>
          {pointsUsed ? pointsUsed : 0} pts used
          {allowedPoints ? " of " + allowedPoints : ""}
          {pointsLeft ? " | " + pointsLeft + " pts left": ""}
        </Typography>
      </Box>
    </>
  );
}

export default QuickRosterStats;