'use client';

import { ActionButtons } from "../../../components/booking/Payment/ActionButtons";
import { FailureIcon } from "../../../components/booking/Payment/FailureIcon";
import { FailureMessage } from "../../../components/booking/Payment/FailureMessage";


export default function PaymentPage() {
  return (
    <div>
      <div className="flex flex-col gap-6 items-center justify-center">
        <FailureIcon />
        <FailureMessage />
        <ActionButtons />
      </div>
    </div>
  );
}