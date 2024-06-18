'use client'
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { getTicketByUserId } from "@/actions/ticket";
import { Ticket } from "@prisma/client";

interface TicketDetailsDialogProps {
  userId: string | null;
}

const TicketDetailsDialog: React.FC<TicketDetailsDialogProps> = ({
  userId,
}) => {
  const [ticketDetails, setTicketDetails] = useState<Ticket | null>(null);

  const fetchTicketDetails = async () => {
    if (!userId) return;

    try {
      const ticket = await getTicketByUserId(userId);
      setTicketDetails(ticket);
    } catch (error) {
      console.error("Failed to fetch ticket details:", error);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          onClick={fetchTicketDetails}
          className="cursor-pointer fill-white hover:fill-gray-500 transition-colors duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="20"
            height="20"
            viewBox="0 0 26 26"
          >
            <path d="M 13 1.1875 C 6.476563 1.1875 1.1875 6.476563 1.1875 13 C 1.1875 19.523438 6.476563 24.8125 13 24.8125 C 19.523438 24.8125 24.8125 19.523438 24.8125 13 C 24.8125 6.476563 19.523438 1.1875 13 1.1875 Z M 15.460938 19.496094 C 14.851563 19.734375 14.367188 19.917969 14.003906 20.042969 C 13.640625 20.167969 13.222656 20.230469 12.742188 20.230469 C 12.007813 20.230469 11.433594 20.050781 11.023438 19.691406 C 10.617188 19.335938 10.414063 18.878906 10.414063 18.324219 C 10.414063 18.109375 10.429688 17.890625 10.460938 17.667969 C 10.488281 17.441406 10.539063 17.191406 10.605469 16.90625 L 11.367188 14.21875 C 11.433594 13.960938 11.492188 13.71875 11.539063 13.488281 C 11.585938 13.257813 11.605469 13.046875 11.605469 12.855469 C 11.605469 12.515625 11.535156 12.273438 11.394531 12.140625 C 11.25 12.003906 10.980469 11.9375 10.582031 11.9375 C 10.386719 11.9375 10.183594 11.96875 9.976563 12.027344 C 9.769531 12.089844 9.59375 12.148438 9.445313 12.203125 L 9.648438 11.375 C 10.144531 11.171875 10.621094 11 11.078125 10.855469 C 11.53125 10.710938 11.964844 10.636719 12.367188 10.636719 C 13.097656 10.636719 13.664063 10.816406 14.05859411.167969 C 14.453125 11.519531 14.652344 11.980469 14.652344 12.542969 C 14.652344 12.660156 14.640625 12.867188 14.613281 13.160156 C 14.585938 13.453125 14.535156 13.722656 14.460938 13.972656 L 13.703125 16.652344 C 13.640625 16.867188 13.585938 17.113281 13.535156 17.386719 C 13.488281 17.660156 13.464844 17.871094 13.464844 18.011719 C 13.464844 18.367188 13.542969 18.613281 13.703125 18.742188 C 13.859375 18.871094 14.136719 18.933594 14.53125 18.933594 C 14.714844 18.933594 14.921875 18.902344 15.15625 18.839844 C 15.386719 18.773438 15.554688 18.71875 15.660156 18.667969 Z M 15.324219 8.617188 C 14.972656 8.945313 14.546875 9.109375 14.050781 9.109375 C 13.554688 9.109375 13.125 8.945313 12.769531 8.617188 C 12.414063 8.289063 12.238281 7.890625 12.238281 7.425781 C 12.238281 6.960938 12.417969 6.558594 12.769531 6.226563 C 13.125 5.894531 13.554688 5.730469 14.050781 5.730469 C 14.546875 5.730469 14.972656 5.894531 15.324219 6.226563 C 15.679688 6.558594 15.855469 6.960938 15.855469 7.425781 C 15.855469 7.890625 15.679688 8.289063 15.324219 8.617188 Z"></path>
          </svg>
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Ticket Details</DialogTitle>
        </DialogHeader>
        {ticketDetails ? (
          <div>
            <DialogDescription className="text-sm text-gray-600 dark:text-gray-400">
              <p className="mb-2">
                <span className="font-semibold">Ticket ID:</span>{" "}
                {ticketDetails.id}
              </p>
              <p className="mb-2">
                <span className="font-semibold">Nickname:</span>{" "}
                {ticketDetails.nickname}
              </p>
              <p className="mb-2">
                <span className="font-semibold">Have Attended:</span>{" "}
                {ticketDetails.haveAttended ? "Yes" : "No"}
              </p>
              <p className="mb-2">
                <span className="font-semibold">LinkedIn:</span>{" "}
                {ticketDetails.linkedin}
              </p>
              <p className="mb-2">
                <span className="font-semibold">Instagram:</span>{" "}
                {ticketDetails.instagram}
              </p>
              <p className="mb-2">
                <span className="font-semibold">Facebook:</span>{" "}
                {ticketDetails.facebook}
              </p>
              <p className="mb-2">
                <span className="font-semibold">Twitter:</span>{" "}
                {ticketDetails.twitter}
              </p>
              <p className="mb-2">
                <span className="font-semibold">Reason:</span>{" "}
                {ticketDetails.reason}
              </p>
              <p className="mb-2">
                <span className="font-semibold">Selfish Reason:</span>{" "}
                {ticketDetails.selfishReason}
              </p>
              <p className="mb-2">
                <span className="font-semibold">Selfless Reason:</span>{" "}
                {ticketDetails.selflessReason}
              </p>
              <p>
                <span className="font-semibold">Goals:</span>{" "}
                {ticketDetails.goal.join(", ")}
              </p>
            </DialogDescription>
          </div>
        ) : (
          <DialogDescription>Loading...</DialogDescription>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default TicketDetailsDialog;