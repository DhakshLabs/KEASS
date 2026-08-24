"use server";

export type ContactState = {
  ok: boolean;
  error: string;
};

export async function submitRequest(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const company = String(formData.get("company") ?? "").trim();
  const expertise = String(formData.get("expertise") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !email || !company || !expertise || !message) {
    return { ok: false, error: "Please complete the required fields." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, error: "Please enter a valid work email." };
  }

  return { ok: true, error: "" };
}
