import { useMutation } from "@tanstack/react-query";
import { useActor } from "./useActor";

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export function useSubmitContactForm() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async ({ name, email, message }: ContactFormData) => {
      if (!actor) throw new Error("Backend not available. Please try again.");
      return actor.submitContactForm(name, email, message);
    },
  });
}
