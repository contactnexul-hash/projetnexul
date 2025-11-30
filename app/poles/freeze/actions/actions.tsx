export async function registerFreezeAction(data: any) {
  console.log("Freeze action logged:", data);

  return {
    success: true,
    message: "Action Freeze enregistrée avec succès",
  };
}
