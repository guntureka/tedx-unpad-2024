"use client";

import { TicketStatus } from "@prisma/client";
import React, { useState, useEffect, useMemo } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
import { getAllUserWithProfileTicket } from "@/actions/user";
import TablePagination from "./TablePagination";
import TicketStatusCell from "./TicketStatusCell";
import TicketStatusFilter from "./TicketStatusFilter";
import SearchBar from "./SearchBar";

interface Profile {
  id: string;
  userId: string;
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  born: Date | null;
  age: number | null;
  address: string | null;
  affiliate: string | null;
  interest: string | null;
  phone: string | null;
  reference: string | null;
  ticketStatus: TicketStatus | any;
  ticketId: string | any;
}

type SortConfig = {
  key: keyof Profile;
  direction: "default" | "ascending" | "descending";
};

const UserTable: React.FC = () => {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [sortConfig, setSortConfig] = useState<SortConfig | null>(null);
  const [filteredStatuses, setFilteredStatuses] = useState<TicketStatus[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchProfiles = async () => {
      setLoading(true);
      try {
        const users = await getAllUserWithProfileTicket();
        if (users) {
          let profileData = users
            .filter((user) => user.Profile !== null)
            .map((user) => ({
              id: user.Profile!.id,
              userId: user.Profile!.userId,
              email: user.email,
              firstName: user.Profile!.firstName,
              lastName: user.Profile!.lastName,
              born: user.Profile!.born,
              age: user.Profile!.age,
              address: user.Profile!.address,
              affiliate: user.Profile!.affiliate,
              interest: user.Profile!.interest,
              phone: user.Profile!.phone,
              reference: user.Profile!.reference,
              ticketStatus: user.Ticket?.status,
              ticketId: user.Ticket?.id,
            }));

          if (filteredStatuses.length > 0) {
            profileData = profileData.filter(
              (profile) =>
                profile.ticketStatus &&
                filteredStatuses.includes(profile.ticketStatus)
            );
          }

          if (searchTerm) {
            profileData = profileData.filter((profile) =>
              Object.values(profile).some((value) =>
                String(value).toLowerCase().includes(searchTerm.toLowerCase())
              )
            );
          }

          setProfiles(profileData);
        } else {
          setProfiles([]);
        }
      } catch (err) {
        console.error("Failed to fetch profiles:", err);
        setProfiles([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProfiles();
  }, [filteredStatuses, searchTerm]);

  const handleSort = (key: keyof Profile) => {
    let nextDirection: "ascending" | "descending" | "default";

    if (
      !sortConfig ||
      sortConfig.key !== key ||
      sortConfig.direction === "default"
    ) {
      nextDirection = "ascending";
    } else if (sortConfig.direction === "ascending") {
      nextDirection = "descending";
    } else {
      nextDirection = "default";
    }

    setSortConfig({ key, direction: nextDirection });
  };

  const sortedProfiles = useMemo(() => {
    let sortableProfiles = [...profiles];

    if (sortConfig && sortConfig.direction !== "default") {
      sortableProfiles.sort((a, b) => {
        const aValue = a[sortConfig.key];
        const bValue = b[sortConfig.key];

        if (sortConfig.key === "ticketStatus") {
          const aStatus = a.ticketStatus ?? "";
          const bStatus = b.ticketStatus ?? "";

          if (sortConfig.direction === "ascending") {
            return aStatus.localeCompare(bStatus);
          } else {
            return bStatus.localeCompare(aStatus);
          }
        } else {
          if (aValue === null) return 1;
          if (bValue === null) return -1;

          if (typeof aValue === "string" && typeof bValue === "string") {
            if (sortConfig.direction === "ascending") {
              return aValue.localeCompare(bValue);
            } else {
              return bValue.localeCompare(aValue);
            }
          } else {
            if (sortConfig.direction === "ascending") {
              return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
            } else {
              return bValue < aValue ? -1 : bValue > aValue ? 1 : 0;
            }
          }
        }
      });
    }

    return sortableProfiles;
  }, [profiles, sortConfig]);

  const currentProfiles = sortedProfiles.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const handleStatusChange = (id: string, newStatus: TicketStatus) => {
    setProfiles((prevProfiles) =>
      prevProfiles.map((profile) =>
        profile.ticketId === id
          ? { ...profile, ticketStatus: newStatus }
          : profile
      )
    );
  };

  const handleFilterChange = (selectedStatuses: TicketStatus[]) => {
    setFilteredStatuses(selectedStatuses);
  };

  const renderSortIcon = (column: keyof Profile) => {
    if (!sortConfig || sortConfig.key !== column) {
      return (
        <svg
          className="inline-block w-3 h-3 ml-2 text-white cursor-pointer hover:text-gray-500"
          fill="currentColor"
          viewBox="0 0 562.392 562.391"
          onClick={() => handleSort(column)}
        >
          <g>
            <g>
              <path d="M123.89,262.141h314.604c19.027,0,17.467-31.347,15.496-47.039c-0.605-4.841-3.636-11.971-6.438-15.967L303.965,16.533 c-12.577-22.044-32.968-22.044-45.551,0L114.845,199.111c-2.803,3.996-5.832,11.126-6.438,15.967 C106.43,230.776,104.863,262.141,123.89,262.141z" />
              <path d="M114.845,363.274l143.569,182.584c12.577,22.044,32.968,22.044,45.551,0l143.587-182.609 c2.804-3.996,5.826-11.119,6.438-15.967c1.971-15.691,3.531-47.038-15.496-47.038H123.89c-19.027,0-17.46,31.365-15.483,47.062 C109.019,352.147,112.042,359.277,114.845,363.274z" />
            </g>
          </g>
        </svg>
      );
    }
    if (sortConfig.direction === "ascending") {
      return (
        <svg
          className="inline-block w-4 h-4 ml-2 text-white cursor-pointer hover:text-gray-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          onClick={() => handleSort(column)}
        >
          <path d="M7 14l5-5 5 5H7z" />
        </svg>
      );
    }
    if (sortConfig.direction === "descending") {
      return (
        <svg
          className="inline-block w-4 h-4 ml-2 text-white cursor-pointer hover:text-gray-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          onClick={() => handleSort(column)}
        >
          <path d="M7 10l5 5 5-5H7z" />
        </svg>
      );
    }
    return null;
  };

  return (
    <div className="w-full">
      <div className=" flex flex-row justify-between mb-4">
        <SearchBar onSearch={setSearchTerm} />
        <TicketStatusFilter onFilterChange={handleFilterChange} />
      </div>
      <Table className="bg-black rounded-lg text-white">
        <TableHeader>
          <TableRow>
            <TableHead className="w-1/6">Email</TableHead>
            <TableHead className="w-1/12">
              First Name {renderSortIcon("firstName")}
            </TableHead>
            <TableHead className="w-1/12">
              Last Name {renderSortIcon("lastName")}
            </TableHead>
            <TableHead className="w-1/12">Date of Birth</TableHead>
            <TableHead className="w-1/24">
              Age {renderSortIcon("age")}
            </TableHead>
            <TableHead className="w-1/6">
              Address {renderSortIcon("address")}
            </TableHead>
            <TableHead className="w-1/12">
              Affiliation {renderSortIcon("affiliate")}
            </TableHead>
            <TableHead className="w-1/12">
              Interest {renderSortIcon("interest")}
            </TableHead>
            <TableHead className="w-1/12">Phone</TableHead>
            <TableHead className="w-1/12">
              Reference {renderSortIcon("reference")}
            </TableHead>
            <TableHead className="w-1/12">
              Ticket Status {renderSortIcon("ticketStatus")}
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {loading
            ? Array.from({ length: pageSize }).map((_, index) => (
                <TableRow key={index}>
                  {Array.from({ length: 11 }).map((_, cellIndex) => (
                    <TableCell key={cellIndex}>
                      <Skeleton className="w-full h-5" />
                    </TableCell>
                  ))}
                </TableRow>
              ))
            : currentProfiles.map((profile) => (
                <TableRow key={profile.id}>
                  <TableCell className="w-1/6 break-all">
                    {profile.email}
                  </TableCell>
                  <TableCell className="w-1/12 break-words">
                    {profile.firstName}
                  </TableCell>
                  <TableCell className="w-1/12 break-words">
                    {profile.lastName}
                  </TableCell>
                  <TableCell className="w-1/12">
                    {profile.born
                      ? new Date(profile.born).toLocaleDateString()
                      : ""}
                  </TableCell>
                  <TableCell className="w-1/24">{profile.age}</TableCell>
                  <TableCell className="w-1/6 break-words">
                    {profile.address}
                  </TableCell>
                  <TableCell className="w-1/12 break-words">
                    {profile.affiliate}
                  </TableCell>
                  <TableCell className="w-1/12 break-words">
                    {profile.interest}
                  </TableCell>
                  <TableCell className="w-1/12">{profile.phone}</TableCell>
                  <TableCell className="w-1/12 break-words">
                    {profile.reference}
                  </TableCell>
                  <TableCell>
                    <TicketStatusCell
                      status={profile.ticketStatus}
                      ticketId={profile.ticketId}
                      userId={profile.userId}
                      onStatusChange={(newStatus) =>
                        handleStatusChange(profile.ticketId, newStatus)
                      }
                    />
                  </TableCell>
                </TableRow>
              ))}
        </TableBody>
      </Table>
      <div className="mt-10">
        <TablePagination
          currentPage={currentPage}
          totalPages={Math.ceil(profiles.length / pageSize)}
          onPageChange={setCurrentPage}
          pageSize={pageSize}
        />
      </div>
    </div>
  );
};

export default UserTable;