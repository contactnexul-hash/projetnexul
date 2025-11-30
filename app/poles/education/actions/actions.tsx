"use client";

type SomeActionProps = {
  name: string;
};

export function SomeAction({ name }: SomeActionProps) {
  return (
    <div className="p-4 border rounded shadow mb-2">
      {name}
    </div>
  );
}
// Ajout pour corriger le build
export function submitVolunteer(data: any) {
  console.log("Volunteer submitted:", data);
}

