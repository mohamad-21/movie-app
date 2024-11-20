"use client";
import { PersonDetails } from "@/src/types";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import React, { useState } from "react";

function PersonInfo({ person }: { person: PersonDetails }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-zinc-900 p-3 rounded-xl w-full">
      <button className="font-bold gap-4 w-full" onClick={() => setExpanded(!expanded)}>
        <span className="flex items-center justify-between">Personal Info {expanded ? <IconChevronUp size="25" /> : <IconChevronDown size="25" />}</span>
      </button>
      <div className={`flex ${expanded ? "max-h-[1000px] mt-6" : "max-h-0"} flex-col gap-4 duration-1000 bg-zinc-900 overflow-hidden`}>
        <InfoItem title="Date of birth" value={person.birthday} />
        <InfoItem title="Place of birth" value={person.place_of_birth} />
        <InfoItem title="Gender" value={person.gender === 2 ? "Male" : "Female"} />
        <InfoItem title="Known as" value={person.also_known_as.map(name => <span className="block" key={name}>{name}</span>)} />
      </div>
    </div>
  )
}

export function InfoItem({ title, value }: { title: string | number, value: string | number | React.ReactNode }) {
  return (
    <div className="flex text-left gap-0.5 flex-col">
      <h3>{title}</h3>
      <div className="text-sm text-zinc-400">{value}</div>
    </div>
  )
}

export default PersonInfo;
