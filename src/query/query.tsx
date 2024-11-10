import { addToCart } from "@/actions/cartAction";
import { useMutation } from "@tanstack/react-query";

export function useAddToCartMutation() {
  return useMutation({ mutationFn: addToCart });
}
