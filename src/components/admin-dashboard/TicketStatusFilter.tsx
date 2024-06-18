import React, { useState } from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { TicketStatus } from "@prisma/client";

interface TicketStatusFilterProps {
  onFilterChange: (selectedStatuses: TicketStatus[]) => void;
}

const TicketStatusFilter: React.FC<TicketStatusFilterProps> = ({
  onFilterChange,
}) => {
  const [selectedStatuses, setSelectedStatuses] = useState<TicketStatus[]>([]);

  const handleStatusChange = (status: TicketStatus) => {
    const isSelected = selectedStatuses.includes(status);

    if (isSelected) {
      const updatedStatuses = selectedStatuses.filter((s) => s !== status);
      setSelectedStatuses(updatedStatuses);
      onFilterChange(updatedStatuses);
    } else {
      const updatedStatuses = [...selectedStatuses, status];
      setSelectedStatuses(updatedStatuses);
      onFilterChange(updatedStatuses);
    }
  };

  return (
    <ToggleGroup type="multiple">
      {Object.values(TicketStatus).map((status) => (
        <ToggleGroupItem
          className="border-[1px] border-gray-400"
          key={status}
          value={status}
          onClick={() => handleStatusChange(status)}
        >
          {status}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  );
};

export default TicketStatusFilter;