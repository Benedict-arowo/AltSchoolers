import React from 'react';
import { Card } from '../ui/card';

interface InfoCardProps {
  title: string;
  reportLink: string;
  mainValue: string;
  percentageChange: string;
  statusList?: string[];
  footerText: string;
}

const InfoCard: React.FC<InfoCardProps> = ({
  title,
  reportLink,
  mainValue,
  percentageChange,
  statusList,
  footerText,
}) => {
  return (
    <Card className="flex flex-col p-2 text-xs bg-white card-gradient">
      <div className="flex items-center justify-between z-10">
        <span className="text-muted-foreground">{title}</span>
        <span>{reportLink}</span>
      </div>
      <div className="flex justify-between items-center my-auto z-10">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-semibold">{mainValue}</span>
          <span className="text-[10px] tracking-tighter px-1 bg-blue-200 rounded-sm">
            {percentageChange}
          </span>
        </div>
        {statusList && (
          <div className="flex flex-col items-start gap-1 text-[10px]">
            {statusList.map((status, index) => (
              <span key={index} className="bg-secondary px-1 rounded-[4px]">
                {status}
              </span>
            ))}
          </div>
        )}
      </div>
      <p className="z-10">{footerText}</p>
    </Card>
  );
};

export default InfoCard;
