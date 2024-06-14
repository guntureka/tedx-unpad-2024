"use server";

import { db } from "@/utils/db";
import { TicketStatus } from "@prisma/client";

/**
 * Represents a custom output type.
 */
type CustomOutput = {
  select?: {};
  include?: {};
};

/**
 * Retrieves all tickets from the database.
 * @returns {Promise<Array<Ticket>>} A promise that resolves to an array of tickets.
 */
export const getAllTicket = async () => {
  try {
    const tickets = await db.ticket.findMany();

    return tickets;
  } catch (error) {
    console.log(error);
  }
};

/**
 * Retrieves all tickets based on the provided custom output.
 * @param custom - The custom output to filter the tickets.
 * @returns A promise that resolves to an array of tickets.
 */
export const getAllTIcketCustom = async (custom: CustomOutput) => {
  try {
    const tickets = await db.ticket.findMany(custom);

    return tickets;
  } catch (error) {
    console.log(error);
  }
};

/**
 * Retrieves a ticket by its ID.
 * @param id - The ID of the ticket to retrieve.
 * @returns A Promise that resolves to the ticket object, or undefined if not found.
 */
export const getTicketById = async (id: string) => {
  try {
    const tickets = await db.ticket.findUnique({
      where: {
        id,
      },
    });

    return tickets;
  } catch (error) {
    console.log(error);
  }
};

/**
 * Retrieves a ticket by user ID.
 * @param id - The ID of the user.
 * @returns A Promise that resolves to the ticket object.
 */
export const getTicketByUserId = async (id: string) => {
  try {
    const tickets = await db.ticket.findUnique({
      where: {
        userId: id,
      },
    });

    return tickets;
  } catch (error) {
    console.log(error);
  }
};

/**
 * Updates the status of a ticket by its ID.
 * @param id - The ID of the ticket to update.
 * @param status - The new status of the ticket.
 * @returns The updated ticket.
 */
export const updateTicketStatusById = async (
  id: string,
  status: TicketStatus
) => {
  try {
    const ticket = await db.ticket.update({
      where: {
        id,
      },
      data: {
        status,
      },
    });

    return ticket;
  } catch (error) {
    console.log(error);
  }
};

/**
 * Updates the status of a ticket by user ID.
 * @param id - The ID of the user.
 * @param status - The new status of the ticket.
 * @returns The updated ticket.
 */
export const updateTicketStatusByUserId = async (
  id: string,
  status: TicketStatus
) => {
  try {
    const ticket = await db.ticket.update({
      where: {
        userId: id,
      },
      data: {
        status,
      },
    });

    return ticket;
  } catch (error) {
    console.log(error);
  }
};
