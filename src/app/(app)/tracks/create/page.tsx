"use client";

import { Steps } from "primereact/steps";
import { MenuItem } from "primereact/menuitem";
import { Card } from "@/components/Card";
import { useState } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { FileUpload } from "@/components/FileUpload";

export default function CreateTrackPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [audioFile, setAudioFile] = useState(null);
  const [imageFile, setImageFile] = useState(null);

  const items: MenuItem[] = [
    {
      label: "Описания песни",
    },
    {
      label: "Загрузка",
    },
    {
      label: "Готово",
    },
  ];

  return (
    <Card className="flex-column">
      <Steps
        model={items}
        activeIndex={activeIndex}
        readOnly={false}
        className="w-full mb-4"
      />

      {(() => {
        if (activeIndex === 0) {
          return (
            <Card className="flex-column w-full">
              <InputText placeholder="Имя автора" className="w-full mb-2" />
              <InputText placeholder="Названия трека" className="w-full mb-2" />
              <InputTextarea
                rows={13}
                placeholder="Текст песни"
                className="w-full"
              />
            </Card>
          );
        } else if (activeIndex === 1) {
          return (
            <FileUpload
              file={imageFile}
              setFile={setImageFile}
              accept="image/*"
            />
          );
        } else if (activeIndex === 2) {
          return (
            <FileUpload
              file={audioFile}
              setFile={setAudioFile}
              accept="audio/*"
            />
          );
        } else {
          return <p>Если вы видите это то где то возникла ошибка!</p>;
        }
      })()}

      <div className="flex justify-content-between align-items-center w-full mt-5">
        <Button
          disabled={activeIndex === 0}
          icon="pi pi-arrow-left"
          label="Назад"
          onClick={() => setActiveIndex((prev) => prev - 1)}
        />
        <Button
          icon="pi pi-arrow-right"
          iconPos="right"
          label="Вперед"
          onClick={() => setActiveIndex((prev) => prev + 1)}
        />
      </div>
    </Card>
  );
}
