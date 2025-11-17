import React from 'react';
import Empty from '../../empty';
import { FaRegClock } from "react-icons/fa";

export default function PageContentInfo(): React.ReactElement {
  return (  
        <Empty title='Content coming soon' icon={FaRegClock} description='This section is under construction.' />
  );
}