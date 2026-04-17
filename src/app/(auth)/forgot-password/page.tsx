'use client';

import AuthWrapper from '@/components/auth/AuthWrapper';
import ForgotPasswordForm from '@/components/auth/ForgotPasswordForm';

export default function ForgotPasswordPage() {
  return (
    <AuthWrapper title="Forgot Password" variant="curve" backButtonHref="/login">
        <ForgotPasswordForm />
    </AuthWrapper>
  );
}
