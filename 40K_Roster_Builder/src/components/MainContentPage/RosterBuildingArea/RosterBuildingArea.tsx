import FactionAddingArea, {FactionAddingAreaType} from "../FactionAddingArea/FactionAddingArea";
import QuickRosterStats from "../QuickRosterStats/QuickRosterStats";

interface RosterBuildingAreaProps {
  factionName: string;
  detachmentName?: string;
}

const RosterBuildingArea: React.FC<RosterBuildingAreaProps> = ({factionName, detachmentName}) => {


  return (
    <>
      <QuickRosterStats faction={factionName} detachment={detachmentName} pointsUsed={0} allowedPoints={500} pointsLeft={500 - 0} sizeCategory="Combat Patrol"/>
      <FactionAddingArea factionName={factionName} detachmentName={detachmentName} type={FactionAddingAreaType.ARMY}></FactionAddingArea>
      <FactionAddingArea factionName={factionName} detachmentName={detachmentName} type={FactionAddingAreaType.ALLIES}></FactionAddingArea>
      {/* <FactionAddingArea factionName={factionName} detachmentName={detachmentName} type={FactionAddingAreaType.ALLIES}></FactionAddingArea> */}
      {/* <FactionAddingArea factionName={factionName} detachmentName={detachmentName} type={FactionAddingAreaType.ALLIES}></FactionAddingArea> */}
      {/* <FactionAddingArea factionName={factionName} detachmentName={detachmentName} type={FactionAddingAreaType.ALLIES}></FactionAddingArea> */}
    </>
  );
}

export default RosterBuildingArea;