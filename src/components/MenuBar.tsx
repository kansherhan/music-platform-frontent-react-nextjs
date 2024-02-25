"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { MenuItem } from "primereact/menuitem";
import { InputText } from "primereact/inputtext";
import { Menubar } from "primereact/menubar";

export function MenuBar() {
  const router = useRouter();

  const items: MenuItem[] = [
    {
      label: "Home",
      icon: "pi pi-home",
      command: () => router.push("/"),
    },
    {
      label: "Треки",
      icon: "pi pi-star",
      command: () => router.push("/tracks"),
    },
    {
      label: "Альбомы",
      icon: "pi pi-star",
      command: () => router.push("/albums"),
    },
  ];

  const end = (
    <InputText placeholder="Поиск" type="text" className="w-8rem sm:w-auto" />
  );

  return <Menubar className="my-3" model={items} end={end} />;
}
