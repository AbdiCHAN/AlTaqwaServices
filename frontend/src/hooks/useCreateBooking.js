import { apiPost } from "./useApi";

export default function useCreateBooking() {
  async function createBooking(data) {
    return apiPost("/bookings", {
      ...data,
      status: "confirmed",
      createdAt: new Date().toISOString()
    });
  }

  return { createBooking };
}