import { PROMO_CODES } from "@/lib/promo";
import { Promo } from "@/lib/types";
import { toast } from "react-hot-toast";

interface Props {
  onApply: (promo: Promo) => void;
  appliedCode?: string;
}

export default function PromoForm({ onApply, appliedCode }: Props) {
  const handleAction = (formData: FormData) => {
    const code = formData.get("promoCode")?.toString().trim() || "";

    if (!code) {
      toast.error("Please enter a promo code");
      return;
    }

    if (code === appliedCode) {
      toast.error("This promo code is already applied");
      return;
    }

    const promo = PROMO_CODES.find((p) => p.code === code.toUpperCase());

    if (promo) {
      toast.success(`Promo code ${promo.code} applied! -${promo.discount}%`);
      onApply(promo);
    } else {
      toast.error("Invalid promo code");
    }
  };
  return (
    <div>
      <h2>Discount Code</h2>
      <form action={handleAction}>
        <div>
          <input
            type="text"
            name="promoCode"
            placeholder="Enter Promo Code"
            autoFocus
          />
        </div>
        <button type="submit">Apply Promo Code</button>
      </form>
      {appliedCode && (
        <p>
          Currently applied: <strong>{appliedCode}</strong>
        </p>
      )}
    </div>
  );
}
