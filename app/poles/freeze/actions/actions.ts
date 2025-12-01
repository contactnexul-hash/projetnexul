"use server";

export async function registerFreezeAction(data: any) {
  console.log("Freeze action received:", data);
  return { success: true };
}
