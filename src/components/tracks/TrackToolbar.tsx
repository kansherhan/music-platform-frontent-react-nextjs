"use client";

import { useRouter } from "next/navigation";
import { Button } from "primereact/button";
import { Toolbar } from "primereact/toolbar";

export function TrackToolbar() {
  const router = useRouter();

  const startContent = <h3 className="text-primary">Список треков</h3>;

  const endContent = (
    <Button
      icon="pi pi-plus"
      label="Создать трек"
      className="mr-2"
      onClick={() => router.push("/tracks/create")}
    />
  );

  return <Toolbar start={startContent} end={endContent} />;
}
