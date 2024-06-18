import React, { useState } from "react";
import { TicketStatus } from "@prisma/client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { updateTicketStatusById } from "@/actions/ticket";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import { Skeleton } from "@/components/ui/skeleton";
import TicketDetailsDialog from "./TicketDetailsDialog";

interface TicketStatusCellProps {
  status: TicketStatus | null;
  ticketId: string | null;
  userId: string | null;
  onStatusChange: (newStatus: TicketStatus) => void;
}

const TicketStatusCell: React.FC<TicketStatusCellProps> = ({
  status,
  ticketId,
  userId,
  onStatusChange,
}) => {
  const [selectedStatus, setSelectedStatus] = useState<TicketStatus | null>(
    status
  );
  const [loading, setLoading] = useState(false);

  const handleChange = async (newStatus: TicketStatus) => {
    if (!ticketId) return;

    setSelectedStatus(newStatus);
    onStatusChange(newStatus);
    setLoading(true);

    try {
      await updateTicketStatusById(ticketId, newStatus);
      toast("Ticket status updated successfully");
    } catch (error) {
      console.error("Failed to update ticket status:", error);
      toast("Failed to update ticket status");
    } finally {
      setLoading(false);
    }
  };

  if (!ticketId) {
    return (
      <div className="flex justify-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="20px"
          height="20px"
          viewBox="0 0 50 50"
          style={{ fill: "#FA5252" }}
        >
          <path d="M25,2C12.319,2,2,12.319,2,25s10.319,23,23,23s23-10.319,23-23S37.681,2,25,2z M33.71,32.29c0.39,0.39,0.39,1.03,0,1.42 C33.51,33.9,33.26,34,33,34s-0.51-0.1-0.71-0.29L25,26.42l-7.29,7.29C17.51,33.9,17.26,34,17,34s-0.51-0.1-0.71-0.29 c-0.39-0.39-0.39-1.03,0-1.42L23.58,25l-7.29-7.29c-0.39-0.39-0.39-1.03,0-1.42c0.39-0.39,1.03-0.39,1.42,0L25,23.58l7.29-7.29 c0.39-0.39,1.03-0.39,1.42,0c0.39,0.39,0.39,1.03,0,1.42L26.42,25L33.71,32.29z"></path>
        </svg>
      </div>
    );
  }

  return (
    <>
      {loading ? (
        <Skeleton className="w-full h-[20px] rounded-full" />
      ) : (
        <div className="flex items-center space-x-2">
          <Select value={selectedStatus || ""} onValueChange={handleChange}>
            <SelectTrigger className="bg-gray-800">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              {Object.values(TicketStatus).map((status) => (
                <SelectItem key={status} value={status}>
                  {status}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <TicketDetailsDialog userId={userId} />
        </div>
      )}
      <Toaster />
    </>
  );
};

export default TicketStatusCell;