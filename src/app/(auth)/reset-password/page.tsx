'use client';

import AuthWrapper from '@/components/auth/AuthWrapper';
import ResetPasswordForm from '@/components/auth/ResetPasswordForm';

export default function ResetPasswordPage() {
  return (
    <AuthWrapper title="Reset Password" variant="curve" backButtonHref="/verify-otp">
        <ResetPasswordForm />
    </AuthWrapper>
  );
}
