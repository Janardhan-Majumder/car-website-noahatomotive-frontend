'use client';

import AuthWrapper from '@/components/auth/AuthWrapper';
import VerifyOTPForm from '@/components/auth/VerifyOTPForm';

export default function VerifyOTPPage() {
  return (
    <AuthWrapper title="Forgot Password" variant="curve" backButtonHref="/forgot-password">
        <VerifyOTPForm />
    </AuthWrapper>
  );
}
