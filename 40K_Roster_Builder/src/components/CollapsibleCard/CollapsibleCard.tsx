import { Accordion, AccordionDetails, AccordionProps, AccordionSummary } from '@mui/material';
import './CollapsibleCard.css';

interface CollapsibleCardProps {
  summary: string; 
  children: JSX.Element;
  props?: AccordionProps;
  expanded: boolean;
  onChange: (clickedBoxName: string) => (event: React.SyntheticEvent, isBoxClicked: boolean) => void;
  boxName: string;
}

const CollapsibleCard: React.FC<CollapsibleCardProps > = ({summary, children, props, expanded, onChange, boxName}) => {

  return (
    <>
      <Accordion slotProps={{heading: {component: 'h6'}}} className="CollapsibleCard" {...props} sx={{'::before': {backgroundColor: "rgba(0,0,0, 0.0)"}}}
          expanded={expanded} onChange={onChange(boxName)}>
        <AccordionSummary>{summary}</AccordionSummary>
        <AccordionDetails>{children}</AccordionDetails>
      </Accordion>
    </>
  );
}

export default CollapsibleCard;